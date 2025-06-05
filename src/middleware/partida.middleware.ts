import { Socket } from "socket.io";
import { NextFunction } from "./handshake.middleware";
import { socketError } from "../utils/socketError";
import { SocketClientEventsEnum } from "../@types/SocketEvents";

type SocketIoPacket = [event: string, ...args: any[]];

export const partidaMiddleware = (
  packet: SocketIoPacket,
  socket: Socket,
  next: NextFunction,
  aplicarPayload: SocketClientEventsEnum[]
) => {
  const [event, ...args] = packet;

  if (!aplicarPayload.includes(event as SocketClientEventsEnum)) return next();

  const partida = args[0].idPartida;

  if (partida && !socket.rooms.has(String(partida))) {
    return next(socketError("Usuario não esta nessa partida", 403));
  }
  next();
};
