import { Carta, Partida, Prisma, Usuario } from "@prisma/client";
import { SocketClientEventsEnum, SocketServerEventsEnum } from "./SocketEvents";
import { EstadoPartida, ResumoPartida } from "./EstadoPartida";

export interface SocketClientEventsData {
  [SocketClientEventsEnum.JOGADA]: {
    idCartas: number[];
    idPartida: number;
    valorCamaleao?: number;
  };
  [SocketClientEventsEnum.DESISTIR_PARTIDA]: {
    idPartida: number;
  };
  [SocketClientEventsEnum.ENTRAR_PARTIDA]: {
    idPartida: number;
    senha?: string;
  };
  [SocketClientEventsEnum.SAIR_PARTIDA]: {
    idPartida: number;
  };
  [SocketClientEventsEnum.CRIAR_PARTIDA]: {
    nome: string;
    senha?: string;
  };
  [SocketClientEventsEnum.INICIAR_PARTIDA]: {
    idPartida: number;
  };
}

export interface SocketServerEventsData {
  [SocketServerEventsEnum.LISTAR_PARTIDAS]: {
    to: TargetEventEnum;
    idPartida?: number;
  };
  [SocketServerEventsEnum.RODADA_CALCULADA]: {
    idPartida: number;
    reconexao?: boolean;
    jogada?: Carta[];
  };
  [SocketServerEventsEnum.FINAL_PARTIDA]: {
    idPartida: number;
    motivo: MotivoFinal;
  };
  [SocketServerEventsEnum.SALA_ATUALIZADA]: {
    idPartida: number;
  };
}

export interface SocketServerEventsPayload {
  [SocketServerEventsEnum.LISTAR_PARTIDAS]: {
    partidas: ResumoPartida[];
  };
  [SocketServerEventsEnum.RODADA_CALCULADA]: {
    rodada: number;
    tabuleiro: Carta[][];
    jogadaAdversario?: Carta[];
    pontuacaoJogador: number;
    pontuacaoAdversario: number;
    cartasCapturadas: number[];
    cartasCapturadasAdversario: number[];
    baralho: number;
    maoJogador: Carta[];
    maoAdversario: number;
    suaVez: boolean;
  };
  [SocketServerEventsEnum.FINAL_PARTIDA]: {
    vencedor: string;
    pontuacao: Map<string, number>;
    motivo: MotivoFinal;
  };
  [SocketServerEventsEnum.SALA_ATUALIZADA]: ResumoPartida & {
    donoPartida: string;
    jogadores: JogadoresSala[];
  };
}

export enum TargetEventEnum {
  ALL = "all",
  ROOM = "room",
  CLIENT = "client",
}

export enum MotivoFinal {
  NORMAL = "normal",
  DESISTENCIA = "desitencia",
  ERRO_SERVICOR = "erro_servidor",
}

export type JogadoresSala = Pick<
  Usuario,
  "nome" | "avatar_ativo" | "partidas_totais" | "partidas_ganhas"
>;
