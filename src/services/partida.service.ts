import { Partida, Prisma, StatusPartida, Usuario } from "@prisma/client";
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
        vagas: 1,
        senha: senha ? senhaCriptografada : undefined,
        criador_id: Number(idCriador),
        jogadores: {
          create: {
            ordem_jogada: 1,
            usuario_id: Number(idCriador),
            pontuacao: 0,
          },
        },
      },
    });
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
