import { StatusPartida, StatusUsuario, Usuario } from "@prisma/client";
import { Server, Socket } from "socket.io";
import prisma from "../../../config/prisma.config";
import usuarioService from "../../../services/usuario.service";
import { desistirEvent } from "./desistirEvent";
import { sairPartidaEvent } from "./sairPartidaEvent";

export const disconnectEvent = async (socket: Socket, io: Server) => {
  console.log(`Disconectando socket: ${socket.id}`);

  const usuario = socket.data.usuario as Usuario;
  if (!usuario) return;
  const partida = await prisma.partida.findFirst({
    where: {
      jogadores: {
        some: {
          usuario_id: usuario.id,
        },
      },
      NOT: {
        status: StatusPartida.finalizado,
      },
    },
  });
  if (partida) {
    if (partida.status === StatusPartida.em_espera) {
      await sairPartidaEvent(socket, io, { idPartida: partida.id });
    } else {
      await desistirEvent(socket, io, { idPartida: partida.id });
    }
  }
  await usuarioService.mudarStatusUsuario(
    StatusUsuario.offline,
    usuario.id,
    socket
  );
};
