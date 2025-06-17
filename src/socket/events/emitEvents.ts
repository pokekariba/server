import { Server, Socket } from "socket.io";
import { SocketServerEventsEnum, ServerEvent } from "../../@types/SocketEvents";
import { SocketServerEventsData } from "../../@types/SocketEventsData";
import { finalPartidaEvent } from "./server/finalPartidaEvent";
import { listarPartidasEvent } from "./server/listarPartidasEvent";
import { rodadaCalculadaEvent } from "./server/rodadaCalculadaEvent";
import { salaAtualizadaEvent } from "./server/salaAtualizadaEvent";

const serverEvents: { [K in SocketServerEventsEnum]: ServerEvent<K> } = {
  listar_partidas: listarPartidasEvent,
  final_partida: finalPartidaEvent,
  sala_atualizada: salaAtualizadaEvent,
  rodada_calculada: rodadaCalculadaEvent,
};

export const emitEvent = <T extends SocketServerEventsEnum>(
  socket: Socket,
  io: Server,
  event: T,
  payload: SocketServerEventsData[T]
) => {
  serverEvents[event](socket, io, payload);
};
