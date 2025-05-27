import {
  ServerEvent,
  SocketServerEventsEnum,
} from "./../../../@types/SocketEvents";

export const listarPartidasEvent: ServerEvent<
  SocketServerEventsEnum.LISTAR_PARTIDAS
> = (socket, io, data) => {};
