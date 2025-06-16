import {
  ClientEvent,
  SocketClientEventsEnum,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import { MotivoFinal } from "../../../@types/SocketEventsData";
import partidaService from "../../../services/partida.service";
import { emitEvent } from "../setupEvents";

export const desistirEvent: ClientEvent<
  SocketClientEventsEnum.DESISTIR_PARTIDA
> = async (socket, io, data) => {
  const sockets = await io.to(String(data.idPartida)).fetchSockets();

  const idAdversario = sockets.find(
    (s) => s.data.usuario.id !== socket.data.usuario.id
  )?.data.usuario.id;

  await partidaService.desistirPartida(
    data.idPartida,
    socket.data.usuario.id,
    idAdversario
  );

  emitEvent(socket, io, SocketServerEventsEnum.FINAL_PARTIDA, {
    idPartida: data.idPartida,
    motivo: MotivoFinal.DESISTENCIA,
  });
};
