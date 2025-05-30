import { StatusPartida } from "@prisma/client";
import { EstadoPartida, ResumoPartida } from "../@types/EstadoPartida";
import prisma from "../config/prisma.config";
import { Server } from "socket.io";

const estadoPartidas = new Map<number, EstadoPartida>();
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
};

export default partidaService;
