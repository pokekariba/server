import { StatusPartida, StatusUsuario, Usuario } from "@prisma/client";
import { Server, Socket } from "socket.io";
import { emitEvent } from "../setupEvents";
import { SocketServerEventsEnum } from "../../../@types/SocketEvents";
import { TargetEventEnum } from "../../../@types/SocketEventsData";
import prisma from "../../../config/prisma.config";
import usuarioService from "../../../services/usuario.service";
import partidaService from "../../../services/partida.service";

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
    await partidaService.sairDaPartida(partida, usuario.id);
    emitEvent(socket, io, SocketServerEventsEnum.LISTAR_PARTIDAS, {
      to: TargetEventEnum.ALL,
    });
  }
  usuarioService.mudarStatusUsuario(StatusUsuario.offline, usuario.id, socket);
};
