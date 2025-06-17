import { Server, Socket } from "socket.io";
import { ClientEvent, SocketClientEventsEnum } from "../../@types/SocketEvents";
import { jogadaEvent } from "./client/jogadaEvent";
import { entrarPartidaEvent } from "./client/entrarPartidaEvent";
import { iniciarPartidaEvent } from "./client/iniciarPartidaEvent";
import { criarPartidaEvent } from "./client/criarPartidaEvent";
import { typedKeys } from "../../utils/typedKeys";
import { sairPartidaEvent } from "./client/sairPartidaEvent";
import { desistirEvent } from "./client/desistirEvent";

const clientEvents: { [K in SocketClientEventsEnum]: ClientEvent<K> } = {
  desistir_partida: desistirEvent,
  jogada: jogadaEvent,
  entrar_partida: entrarPartidaEvent,
  iniciar_partida: iniciarPartidaEvent,
  criar_partida: criarPartidaEvent,
  sair_partida: sairPartidaEvent,
};

export const setupEvents = (socket: Socket, io: Server) => {
  console.log(
    `Usuario: ${socket.data.usuario.nome} setupEvents no socket: ${socket.id}`
  );

  if (!socket.data.__boundEvents) {
    socket.data.__boundEvents = new Set();
  }

  for (const event of typedKeys(clientEvents)) {
    if (socket.data.__boundEvents.has(event)) {
      console.log(
        `Listener ${event} já registrado para ${socket.id}, pulando.`
      );
      continue;
    }

    const handler = clientEvents[event];
    console.log(clientEvents[event]);
    socket.data.__boundEvents.add(event);

    console.log(`Registrando listener ${event} para ${socket.id}`);
    socket.on(event, (payload) => {
      console.log(`Recebido evento ${event} no socket ${socket.id}`);
      handler(socket, io, payload);
    });
  }
};
