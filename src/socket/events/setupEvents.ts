import { Server, Socket } from "socket.io";
import {
  ClientEvent,
  ServerEvent,
  SocketClientEventsEnum,
  SocketServerEventsEnum,
} from "../../@types/SocketEvents";
import { SocketServerEventsData } from "../../@types/SocketEventsData";
import { jogadaEvent } from "./client/jogadaEvent";
import { desistirEvent } from "./client/desistirEvent";
import { entrarPartidaEvent } from "./client/entrarPartidaEvent";
import { iniciarPartidaEvent } from "./client/iniciarPartidaEvent";
import { sairPartidaEvent } from "./client/sairPartidaEvent";
import { criarPartidaEvent } from "./client/criarPartidaEvent";
import { listarPartidasEvent } from "./server/listarPartidasEvent";
import { finalPartidaEvent } from "./server/finalPartidaEvent";
import { salaAtualizadaEvent } from "./server/salaAtualizadaEvent";
import { partidaIniciadaEvent } from "./server/partidaIniciadaEvent";
import { typedKeys } from "../../utils/typedKeys";
import { rodadaCalculadaEvent } from "./server/rodadaCalculadaEvent";

const clientEvents: { [K in SocketClientEventsEnum]: ClientEvent<K> } = {
  jogada: jogadaEvent,
  entrar_partida: entrarPartidaEvent,
  iniciar_partida: iniciarPartidaEvent,
  criar_partida: criarPartidaEvent,
  desistir: desistirEvent,
  sair_partida: sairPartidaEvent,
};

const serverEvents: { [K in SocketServerEventsEnum]: ServerEvent<K> } = {
  listar_partidas: listarPartidasEvent,
  final_partida: finalPartidaEvent,
  sala_atualizada: salaAtualizadaEvent,
  partida_iniciada: partidaIniciadaEvent,
  rodada_calculada: rodadaCalculadaEvent,
};

export const setupEvents = (socket: Socket, io: Server) => {
  for (const event of typedKeys(clientEvents)) {
    const handler = clientEvents[event];

    socket.on(event, (payload) => {
      handler(socket, io, payload);
    });
  }
};

export const emitEvent = <T extends SocketServerEventsEnum>(
  socket: Socket,
  io: Server,
  event: T,
  payload: SocketServerEventsData[T]
) => {
  serverEvents[event](socket, io, payload);
};
