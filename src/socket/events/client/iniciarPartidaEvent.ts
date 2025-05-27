import {
  ClientEvent,
  SocketClientEventsEnum,
} from "../../../@types/SocketEvents";

export const iniciarPartidaEvent: ClientEvent<
  SocketClientEventsEnum.INICIAR_PARTIDA
> = (socket, io, data) => {};
