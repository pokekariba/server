import { StatusPartida, StatusUsuario } from "@prisma/client";
import {
  ClientEvent,
  SocketClientEventsEnum,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import partidaService from "../../../services/partida.service";
import { socketError } from "../../../utils/socketError";
import usuarioService from "../../../services/usuario.service";
import { emitEvent } from "../setupEvents";
import { TargetEventEnum } from "../../../@types/SocketEventsData";

export const sairPartidaEvent: ClientEvent<
  SocketClientEventsEnum.SAIR_PARTIDA
> = async (socket, io, data) => {
  const { idPartida } = data;
  const usuarioId = Number(socket.data.usuario.id);
  const partida = await partidaService.buscarPartidaComUsuario(idPartida);
  if (!partida || partida.status !== StatusPartida.em_espera) {
    socketError("Partida não encontrada ou não está em espera", 404, socket);
    return;
  }
  await partidaService.sairDaPartida(partida, usuarioId);
  await usuarioService.mudarStatusUsuario(
    StatusUsuario.online,
    usuarioId,
    socket
  );
  socket.leave(String(idPartida));
  emitEvent(socket, io, SocketServerEventsEnum.SALA_ATUALIZADA, { idPartida });
  emitEvent(socket, io, SocketServerEventsEnum.LISTAR_PARTIDAS, {
    to: TargetEventEnum.ALL,
  });
};
