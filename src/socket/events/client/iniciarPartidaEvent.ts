import {
  ClientEvent,
  SocketClientEventsEnum,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import partidaService from "../../../services/partida.service";
import { socketError } from "../../../utils/socketError";
import { emitEvent } from "../setupEvents";

export const iniciarPartidaEvent: ClientEvent<
  SocketClientEventsEnum.INICIAR_PARTIDA
> = async (socket, io, data) => {
  const { idPartida } = data;
  const partida = await partidaService.buscarPartidaComUsuario(idPartida);
  if (partida?.status !== "em_espera") {
    socketError("Partida não está em espera", 409, socket);
    return;
  }
  if (partida.vagas !== 0) {
    socketError("Ainda há vagas disponíveis na partida", 400, socket);
    return;
  }
  if (partida.criador_id !== Number(socket.data.usuario.id)) {
    socketError("Apenas o criador da partida pode iniciar", 403, socket);
    return;
  }
  await partidaService.iniciarPartida(partida);

  emitEvent(socket, io, SocketServerEventsEnum.RODADA_CALCULADA, { idPartida });
};
