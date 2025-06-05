import { Socket } from "socket.io";
import { NextFunction } from "./handshake.middleware";
import { socketError } from "../utils/socketError";
import { SocketClientEventsEnum } from "../@types/SocketEvents";

type SocketIoPacket = [event: string, ...args: any[]];

export const partidaMiddleware = (
  packet: SocketIoPacket,
  socket: Socket,
  aplicarPayload: SocketClientEventsEnum[]
) => {
  const [event, ...args] = packet;

  if (!aplicarPayload.includes(event as SocketClientEventsEnum)) return;

  const partida = args[0].idPartida;

  if (partida && !socket.rooms.has(String(partida))) {
    throw socketError("Usuario não esta nessa partida", 403);
  }
};
