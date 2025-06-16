import { Server } from "socket.io";
import { Server as HttpServer } from "http";
import { handShakeMiddleware } from "../middleware/handshake.middleware";
import { socketMiddleware } from "../middleware/socket.middleware";
import { disconnectEvent } from "./events/client/disconnect.event";
import { emitEvent, setupEvents } from "./events/setupEvents";
import {
  SocketClientEventsEnum,
  SocketServerEventsEnum,
} from "../@types/SocketEvents";
import { TargetEventEnum } from "../@types/SocketEventsData";
import { partidaMiddleware } from "../middleware/partida.middleware";

const eventosVerificacaoPartida: SocketClientEventsEnum[] = [
  SocketClientEventsEnum.DESISTIR_PARTIDA,
  SocketClientEventsEnum.INICIAR_PARTIDA,
  SocketClientEventsEnum.JOGADA,
  SocketClientEventsEnum.SAIR_PARTIDA,
];

export function setupSocketIO(server: HttpServer) {
  const io = new Server(server, {
    cors: { origin: "*" },
    path: "/jogo",
  });

  io.use(handShakeMiddleware);

  io.on("connection", (socket) => {
    socket.use((packet, next) => {
      try {
        socketMiddleware(packet, socket);
        partidaMiddleware(packet, socket, eventosVerificacaoPartida);
        next();
      } catch (err) {
        next(err as Error);
      }
    });
    console.log("Novo cliente conectado:", socket.id);
    setupEvents(socket, io);
    socket.on("error", (err: any) => {
      socket.emit("erro_evento", {
        mensagem: err.message,
        status: err.data.status,
      });
      if (err?.data?.status) {
        socket.disconnect(true);
      }
    });
    socket.on("disconnect", () => disconnectEvent(socket, io));

    socket.join("usuarios_online");
    emitEvent(socket, io, SocketServerEventsEnum.LISTAR_PARTIDAS, {
      to: TargetEventEnum.CLIENT,
    });
  });
}
