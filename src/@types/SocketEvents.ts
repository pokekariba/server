import { Server, Socket } from "socket.io";
import {
  SocketClientEventsData,
  SocketServerEventsData,
} from "./SocketEventsData";

export enum SocketClientEventsEnum {
  JOGADA = "jogada",
  DESISTIR = "desistir",
  ENTRAR_PARTIDA = "entrar_partida",
  SAIR_PARTIDA = "sair_partida",
  CRIAR_PARTIDA = "criar_partida",
  INICIAR_PARTIDA = "iniciar_partida",
}

export enum SocketServerEventsEnum {
  LISTAR_PARTIDAS = "listar_partidas",
  RODADA_CALCULADA = "rodada_calculada",
  FINAL_PARTIDA = "final_partida",
  SALA_ATUALIZADA = "sala_atualizada",
  PARTIDA_INICIADA = "partida_iniciada",
}

export type ServerEvent<E extends SocketServerEventsEnum> = (
  socket: Socket,
  io: Server,
  data: SocketServerEventsData[E]
) => void;

export type ClientEvent<E extends SocketClientEventsEnum> = (
  socket: Socket,
  io: Server,
  data: SocketClientEventsData[E]
) => void;
