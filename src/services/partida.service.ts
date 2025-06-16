import {
  Partida,
  Prisma,
  StatusPartida,
  StatusUsuario,
  Usuario,
} from "@prisma/client";
import {
  EstadoPartida,
  JogadorComCarta,
  ResumoPartida,
} from "../@types/EstadoPartida";
import prisma from "../config/prisma.config";
import { criptografarString } from "../utils/criptografia";
import { Carta, TipoCarta } from "../@types/Carta";

const estadoPartidasAndamento = new Map<number, EstadoPartida>();

const partidaService = {
  listarPartidasEmEspera: async (): Promise<ResumoPartida[]> => {
    const listaPartidas = await prisma.partida.findMany({
      select: {
        id: true,
        nome: true,
        vagas: true,
        senha: true,
      },
      where: {
        status: StatusPartida.em_espera,
      },
    });
    return listaPartidas.map((partida) => ({
      ...partida,
      senha: !!partida.senha,
    }));
  },
  listarUsuariosPartida: async (idPartida: number): Promise<Usuario[]> => {
    const jogadoresPartida = await prisma.jogadorPartida.findMany({
      where: {
        partida_id: idPartida,
      },
      include: {
        usuario: true,
      },
    });
    return jogadoresPartida.map((jogador) => jogador.usuario);
  },
  buscarPartidaEmAndamento: (idPartida: number): EstadoPartida | undefined => {
    return estadoPartidasAndamento.get(idPartida);
  },
  buscarPartidaComUsuario: async (
    idPartida: number
  ): Promise<PatidaComUsuario> => {
    const partida = await prisma.partida.findUnique({
      where: {
        id: idPartida,
      },
      include: {
        jogadores: {
          include: {
            usuario: {
              select: { id: true, nome: true },
            },
          },
        },
        ganhador: {
          select: { nome: true },
        },
      },
    });
    if (!partida) {
      throw new Error(`Partida com ID ${idPartida} não encontrada.`);
    }
    return partida;
  },
  buscarPartidaPeloUsuario: async (idUsuario: number) => {
    return await prisma.partida.findFirst({
      select: {
        id: true,
      },
      where: {
        status: StatusPartida.em_andamento,
        jogadores: {
          some: {
            usuario_id: idUsuario,
          },
        },
      },
    });
  },
  buscarPartida: async (idPartida: number) => {
    return await prisma.partida.findFirst({
      where: {
        id: idPartida,
      },
      include: {
        criador: true,
      },
    });
  },
  criarPartida: async (
    nome: string,
    idCriador: string,
    senha?: string
  ): Promise<Partida> => {
    const senhaCriptografada = await criptografarString(senha || "");
    const partida = await prisma.partida.create({
      data: {
        nome,
        status: StatusPartida.em_espera,
        senha: senha ? senhaCriptografada : undefined,
        criador_id: Number(idCriador),
        jogadores: {
          create: {
            ordem_jogada: 1,
            usuario_id: Number(idCriador),
          },
        },
      },
    });
    return partida;
  },
  desistirPartida: async (
    idPartida: number,
    idDesistente: string,
    idGanhador: string
  ) => {
    await prisma.$transaction(async (dx) => {
      await dx.partida.update({
        data: {
          status: StatusPartida.finalizado,
          ganhador_id: Number(idGanhador),
          data_fim: new Date(),
        },
        where: {
          id: idPartida,
        },
      });

      await dx.usuario.updateMany({
        where: {
          jogadorPartidas: {
            some: {
              partida_id: idPartida,
            },
          },
        },
        data: { status: StatusUsuario.online },
      });

      await dx.jogadorPartida.updateMany({
        where: { usuario_id: Number(idDesistente), partida_id: idPartida },
        data: { pontuacao: 0 },
      });
    });
    estadoPartidasAndamento.delete(idPartida);
  },
  preencherVaga: async (partida: Partida, idUsuario: number) => {
    const id = partida.id;
    const ordem_jogada = 3 - partida.vagas;
    return await prisma.partida.update({
      where: { id },
      data: {
        vagas: { decrement: 1 },
        jogadores: {
          create: {
            usuario_id: idUsuario,
            ordem_jogada,
          },
        },
      },
    });
  },
  iniciarPartida: async (partida: PatidaComUsuario): Promise<EstadoPartida> => {
    const idPartida = partida.id;
    const baralho = gerarBaralho(idPartida);
    const jogadores = partida.jogadores.map(({ usuario, ...jogador }) => ({
      ...jogador,
      cartas: [],
      pontuacao: 0,
    }));
    const estadoPartida: EstadoPartida = {
      idPartida,
      status: StatusPartida.em_andamento,
      baralho,
      rodada: 1,
      tabuleiro: Array(8)
        .fill(null)
        .map(() => []),
      jogadores,
    };
    estadoPartidasAndamento.set(idPartida, estadoPartida);

    for (const jogador of jogadores) {
      comprarCartas(jogador, idPartida);
    }

    await salvarPartida(idPartida);

    return estadoPartidasAndamento.get(idPartida) as EstadoPartida;
  },
  sairDaPartida: async (
    partida: Partida,
    idUsuario: number
  ): Promise<Partida> => {
    return await prisma.partida.update({
      where: { id: partida.id },
      data: {
        vagas: { increment: 1 },
        status:
          partida.vagas >= 1
            ? StatusPartida.finalizado
            : StatusPartida.em_espera,
        jogadores: {
          deleteMany: {
            usuario_id: idUsuario,
          },
        },
      },
    });
  },
  realizarJogada: async (
    partida: EstadoPartida,
    cartasJogadas: Carta[],
    jogador: JogadorComCarta,
    valorCamaleao?: number
  ) => {
    const tabuleiro = partida.tabuleiro;
    jogador.cartas = jogador.cartas.filter(
      (carta) => !cartasJogadas.includes(carta)
    );
    const valorCartasJogadas = [
      ...new Set(cartasJogadas.map((carta) => carta.valor)),
    ].filter((valor) => valor !== 0);

    if (valorCartasJogadas.length > 1) {
      throw new Error("Somente um valor de carta pode ser jogado por vez.");
    }

    if (!valorCartasJogadas.length && !valorCamaleao) {
      throw new Error("Camaleão jogado sem valor definido.");
    }

    const indexCasaCartasJogadas = (valorCartasJogadas[0] ?? valorCamaleao) - 1;

    const casaTabuleiro = tabuleiro[indexCasaCartasJogadas];

    casaTabuleiro.push(...cartasJogadas);

    casaTabuleiro.forEach((carta, index) => {
      carta.tipo = TipoCarta.mesa;
      carta.posicao = index;
    });

    if (casaTabuleiro.length >= 3) {
      let indexCapturadas: number | undefined;
      if (indexCasaCartasJogadas === 0) {
        if (tabuleiro[7].length) {
          indexCapturadas = 7;
        }
      } else {
        for (let i = indexCasaCartasJogadas - 1; i >= 0; i--) {
          if (!tabuleiro[i].length) continue;
          indexCapturadas = i;
          break;
        }
      }
      if (indexCapturadas !== undefined) {
        const cartasCapturadas = tabuleiro[indexCapturadas];

        jogador.pontuacao += cartasCapturadas.length;

        cartasCapturadas.forEach((carta) => {
          carta.tipo = TipoCarta.capturado;
          carta.jogador_partida_id = jogador.id;
          carta.posicao = 0;
        });

        jogador.cartas.push(...cartasCapturadas);
        tabuleiro[indexCapturadas] = [];
      }
    }
    partida.rodada++;

    comprarCartas(jogador, partida.idPartida);

    await salvarPartida(partida.idPartida);

    return partida;
  },
  finalizarPartida: async (idPartida: number): Promise<void> => {
    const partida = estadoPartidasAndamento.get(idPartida);
    if (!partida) {
      throw new Error(`Partida com ID ${idPartida} não encontrada.`);
    }

    const jogadores = partida.jogadores;

    const maxPontos = Math.max(...jogadores.map((j) => j.pontuacao));
    const vencedores = jogadores.filter((j) => j.pontuacao === maxPontos);

    let ganhador_id: number;
    if (vencedores.length === 1) {
      ganhador_id = vencedores[0].usuario_id;
    }

    await prisma.$transaction(async (tx) => {
      await tx.partida.update({
        where: { id: idPartida },
        data: {
          status: StatusPartida.finalizado,
          ganhador_id,
          data_fim: new Date(),
        },
      });
      await tx.usuario.updateMany({
        where: {
          jogadorPartidas: {
            some: {
              partida_id: idPartida,
            },
          },
        },
        data: { status: StatusUsuario.online },
      });
    });

    estadoPartidasAndamento.delete(idPartida);
  },
};

const embaralhar = <T>(array: T[]): T[] => {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const gerarBaralho = (partidaId: number): Carta[] => {
  const cartasBase = [
    { valor: 0, quantidade: 2 },
    { valor: 1, quantidade: 8 },
    { valor: 2, quantidade: 8 },
    { valor: 3, quantidade: 8 },
    { valor: 4, quantidade: 8 },
    { valor: 5, quantidade: 8 },
    { valor: 6, quantidade: 8 },
    { valor: 7, quantidade: 8 },
    { valor: 8, quantidade: 8 },
  ];

  let baralho: Carta[] = [];

  for (const carta of cartasBase) {
    for (let i = 0; i < carta.quantidade; i++) {
      const cartaParaInserir: Carta = {
        id: 0,
        partida_id: partidaId,
        valor: carta.valor,
        tipo: TipoCarta.baralho,
        posicao: 0,
      };
      baralho.push(cartaParaInserir);
    }
  }

  baralho = embaralhar(baralho);

  baralho = baralho.map((carta, index) => ({
    ...carta,
    posicao: index,
    id: index,
  }));

  return baralho;
};

const salvarPartida = async (partidaId: number): Promise<void> => {
  const partida = estadoPartidasAndamento.get(partidaId);

  if (!partida) {
    throw new Error(`Partida com ID ${partidaId} não encontrada.`);
  }

  await prisma.partida.update({
    where: { id: partidaId },
    data: {
      status: partida.status,
      jogadores: {
        updateMany: partida.jogadores.map((jogador) => ({
          where: { id: jogador.id },
          data: {
            pontuacao: jogador.pontuacao,
          },
        })),
      },
    },
  });
};

const comprarCartas = (jogador: JogadorComCarta, idPartida: number): void => {
  const partida = estadoPartidasAndamento.get(idPartida);

  if (!partida) {
    throw new Error(`Partida com ID ${idPartida} não encontrada.`);
  }

  const maoJogador =
    jogador.cartas.filter((carta) => carta.tipo === TipoCarta.mao) || [];

  const cartasParaComprar = Math.min(
    5 - maoJogador.length,
    partida.baralho.length
  );

  const cartasCompradas = partida.baralho.splice(-cartasParaComprar);

  const novaMao = [...maoJogador, ...cartasCompradas];

  novaMao.forEach((carta, index) => {
    carta.tipo = TipoCarta.mao;
    carta.jogador_partida_id = jogador.id;
    carta.posicao = index;
  });

  jogador.cartas = [...new Set<Carta>([...jogador.cartas, ...novaMao])];
};

export default partidaService;

export type PatidaComUsuario = Prisma.PartidaGetPayload<{
  include: {
    ganhador: {
      select: {
        nome: true;
      };
    };
    jogadores: {
      include: {
        usuario: {
          select: {
            id: true;
            nome: true;
          };
        };
      };
    };
  };
}>;
