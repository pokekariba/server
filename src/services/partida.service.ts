import { Partida, Prisma, StatusPartida, StatusUsuario, Usuario } from "@prisma/client";
import { EstadoPartida, ResumoPartida } from "../@types/EstadoPartida";
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
  listarUsuariosPartida: async (idPartida: string): Promise<Usuario[]> => {
    const jogadoresPartida = await prisma.jogadorPartida.findMany({
      where: {
        partida_id: Number(idPartida),
      },
      include: {
        usuario: true,
      },
    });
    return jogadoresPartida.map((jogador) => jogador.usuario);
  },
  buscarPartidaEmAndamento: (idPartida: string): EstadoPartida | undefined => {
    return estadoPartidasAndamento.get(Number(idPartida));
  },
  buscarPartidaComUsuario: async (idPartida: string): Promise<PatidaComUsuario> => {
    const partida = await prisma.partida.findUnique({
      where: {
        id: Number(idPartida),
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
  buscarPartida: async (idPartida: string) => {
    return await prisma.partida.findFirst({
      where: {
        id: Number(idPartida)
      }
    })
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
            usuario_id: Number(idCriador)
          },
        },
      },
    });
    return partida;
  },
  desistirPartida: async (idPartida: string, idDesistente: string, idGanhador: string) => {
    await prisma.$transaction(async (dx) => {
      await dx.partida.update({
        data: {
          status: StatusPartida.finalizado,
          ganhador_id: Number(idGanhador),
          data_fim: new Date()
        },
        where: {
          id: Number(idPartida)
        }
      });

      await dx.usuario.updateMany({
        where: {
          jogadorPartidas: {
            some: {
              partida_id: Number(idPartida)
            },
          },
        },
        data: { status: StatusUsuario.online }
      });

      await dx.jogadorPartida.updateMany({
        where: {partida_id: Number(idDesistente)},
        data: {pontuacao: 0}
      })
    });
    estadoPartidasAndamento.delete(Number(idPartida));
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
            ordem_jogada
          }
        }
      }
    })
  }
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
