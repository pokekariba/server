import {
  ClientEvent,
  SocketClientEventsEnum,
} from "../../../@types/SocketEvents";

export const jogadaEvent: ClientEvent<SocketClientEventsEnum.JOGADA> = (
  socket,
  io,
  data
) => {};
