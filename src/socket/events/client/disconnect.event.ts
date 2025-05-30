import { StatusPartida, StatusUsuario, Usuario } from "@prisma/client";
import { Server, Socket } from "socket.io";
import { emitEvent } from "../setupEvents";
import { SocketServerEventsEnum } from "../../../@types/SocketEvents";
import { TargetEventEnum } from "../../../@types/SocketEventsData";
import { prisma } from "../../../config/prisma.config";

export const disconnectEvent = async (socket: Socket, io: Server) => {
  const usuario = socket.data.usuario as Usuario;
  if (!usuario) return;
  const partida = await prisma.partida.findFirst({
    where: {
      jogadores: {
        some: {
          usuario_id: usuario.id,
        },
      },
      status: StatusPartida.em_espera,
    },
  });
  if (usuario.status === StatusUsuario.em_partida && !partida) return;
  if (partida) {
    await prisma.partida.update({
      where: { id: partida.id },
      data: {
        vagas: { increment: 1 },
      },
    });
    emitEvent(socket, io, SocketServerEventsEnum.LISTAR_PARTIDAS, {
      to: TargetEventEnum.ALL,
    });
    return;
  }
  await prisma.usuario.update({
    where: { id: usuario.id },
    data: { status: StatusUsuario.offline },
  });
};
