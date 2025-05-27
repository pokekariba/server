import {
  ClientEvent,
  SocketClientEventsEnum,
} from "../../../@types/SocketEvents";

export const entrarPartidaEvent: ClientEvent<
  SocketClientEventsEnum.ENTRAR_PARTIDA
> = (socket, io, data) => {};
