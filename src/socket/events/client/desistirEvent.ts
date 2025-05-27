import {
  ClientEvent,
  SocketClientEventsEnum,
} from "../../../@types/SocketEvents";

export const desistirEvent: ClientEvent<SocketClientEventsEnum.DESISTIR> = (
  socket,
  io,
  data
) => {};
