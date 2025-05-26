import {
  ClientEvent,
  SocketClientEventsEnum,
} from "../../../@types/SocketEvents";

export const sairPartidaEvent: ClientEvent<
  SocketClientEventsEnum.SAIR_PARTIDA
> = (socket, io, data) => {};
