import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";

export const salaAtualizadaEvent: ServerEvent<
  SocketServerEventsEnum.SALA_ATUALIZADA
> = (socket, io, data) => {};
