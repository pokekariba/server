import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";

export const rodadaCalculadaEvent: ServerEvent<
  SocketServerEventsEnum.RODADA_CALCULADA
> = (socket, io, data) => {};
