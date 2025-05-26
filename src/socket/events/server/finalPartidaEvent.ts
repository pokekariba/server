import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";

export const finalPartidaEvent: ServerEvent<
  SocketServerEventsEnum.FINAL_PARTIDA
> = (socket, io, data) => {};
