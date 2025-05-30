import { Partida, Prisma, StatusPartida, Usuario } from "@prisma/client";
import { EstadoPartida, ResumoPartida } from "../@types/EstadoPartida";
import prisma from "../config/prisma.config";
import { RemoteSocket, Server } from "socket.io";

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
  buscarPartida: async (idPartida: string): Promise<PatidaComNomeUsuario> => {
    const partida = await prisma.partida.findUnique({
      where: {
        id: Number(idPartida),
      },
      include: {
        jogadores: {
          include: {
            usuario: {
              select: { nome: true },
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
};

export default partidaService;

export type PatidaComNomeUsuario = Prisma.PartidaGetPayload<{
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
            nome: true;
          };
        };
      };
    };
  };
}>;
