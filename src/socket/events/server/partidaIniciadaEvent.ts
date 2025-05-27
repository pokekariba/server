import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";

export const partidaIniciadaEvent: ServerEvent<
  SocketServerEventsEnum.PARTIDA_INICIADA
> = (socket, io, data) => {};
