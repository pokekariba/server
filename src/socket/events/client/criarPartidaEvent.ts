import {
  ClientEvent,
  SocketClientEventsEnum,
} from "../../../@types/SocketEvents";

export const criarPartidaEvent: ClientEvent<
  SocketClientEventsEnum.CRIAR_PARTIDA
> = (socket, io, data) => {};
