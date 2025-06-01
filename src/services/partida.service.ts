import {
  Carta,
  Partida,
  Prisma,
  StatusPartida,
  StatusUsuario,
  TipoCarta,
  Usuario,
} from "@prisma/client";
import {
  EstadoPartida,
  JogadorPartida,
  ResumoPartida,
} from "../@types/EstadoPartida";
import prisma from "../config/prisma.config";
import { Server } from "socket.io";
import { criptografarString } from "../utils/criptografia";

const estadoPartidasAndamento = new Map<number, EstadoPartida>();
let io!: Server;

const partidaService = {
  init: (server: Server): void => {
    io = server;
  },
  listarPartidasEmEspera: async (): Promise<ResumoPartida[]> => {
    return await prisma.partida.findMany({
      select: {
        id: true,
        nome: true,
        vagas: true,
      },
      where: {
        status: StatusPartida.em_espera,
      },
    });
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

      await dx.carta.deleteMany({
        where: {
          partida_id: idPartida,
        },
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
      comprarCartas(idPartida, jogador.id);
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
    jogador: JogadorPartida,
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

    comprarCartas(jogador.id, partida.idPartida);

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
      ganhador_id = vencedores[0].id;
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

      await tx.carta.deleteMany({
        where: { partida_id: idPartida },
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
      const cartaParaInserir = {
        partida_id: partidaId,
        jogador_partida_id: null,
        valor: carta.valor,
        tipo: TipoCarta.baralho,
        posicao: 0,
      };
      baralho.push(cartaParaInserir as Carta);
    }
  }

  baralho = embaralhar(baralho);

  baralho = baralho.map((carta, index) => ({ ...carta, posicao: index }));

  return baralho;
};

const salvarPartida = async (partidaId: number): Promise<void> => {
  const partida = estadoPartidasAndamento.get(partidaId);

  if (!partida) {
    throw new Error(`Partida com ID ${partidaId} não encontrada.`);
  }

  const cartasDoJogo: Carta[] = [
    ...partida.tabuleiro.flat(),
    ...partida.baralho,
  ];

  for (const jogador of partida.jogadores) {
    cartasDoJogo.push(...jogador.cartas);
  }

  const cartasSaoNovas = cartasDoJogo[0].id === undefined;

  const cartasNovas = await prisma.$transaction(async (xt) => {
    await xt.partida.update({
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
    if (cartasSaoNovas) {
      return await xt.carta.createManyAndReturn({
        data: cartasDoJogo,
      });
    } else {
      await Promise.all(
        cartasDoJogo.map((carta) =>
          xt.carta.update({
            where: { id: carta.id },
            data: {
              posicao: carta.posicao,
              jogador_partida_id: carta.jogador_partida_id,
              tipo: carta.tipo,
            },
          })
        )
      );
    }
  });

  if (cartasSaoNovas && cartasNovas) {
    for (const cartaNova of cartasNovas) {
      const cartaAntiga = cartasDoJogo.find(
        (c) =>
          c.posicao === cartaNova.posicao &&
          c.tipo === cartaNova.tipo &&
          c.jogador_partida_id === cartaNova.jogador_partida_id &&
          c.valor === cartaNova.valor
      );
      if (cartaAntiga) {
        cartaAntiga.id = cartaNova.id;
      }
    }
  }
};

const comprarCartas = (idJogador: number, idPartida: number): void => {
  const partida = estadoPartidasAndamento.get(idPartida);

  if (!partida) {
    throw new Error(`Partida com ID ${idPartida} não encontrada.`);
  }

  const jogador = partida.jogadores.find((j) => j.id === idJogador);

  if (!jogador) {
    throw new Error(
      `Jogador com ID ${idJogador} não encontrado na partida ${idPartida}.`
    );
  }

  const maoJogador = jogador.cartas || [];

  const cartasParaComprar = Math.min(
    5 - maoJogador.length,
    partida.baralho.length
  );

  if (cartasParaComprar <= 0) return;

  const cartasCompradas = partida.baralho.splice(-cartasParaComprar);

  cartasCompradas.forEach((carta, index) => {
    carta.tipo = TipoCarta.mao;
    carta.jogador_partida_id = idJogador;
    carta.posicao = maoJogador.length + index;
  });

  jogador.cartas = [...maoJogador, ...cartasCompradas];
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
