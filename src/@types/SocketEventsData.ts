import { Carta, JogadorPartida, Partida, Usuario } from "@prisma/client";
import { SocketClientEventsEnum, SocketServerEventsEnum } from "./SocketEvents";

export interface SocketClientEventsData {
  [SocketClientEventsEnum.JOGADA]: {
    idCarta: string;
  };
  [SocketClientEventsEnum.DESISTIR]: void;
  [SocketClientEventsEnum.ENTRAR_PARTIDA]: {
    idPartida: string;
    senha?: string;
  };
  [SocketClientEventsEnum.SAIR_PARTIDA]: void;
  [SocketClientEventsEnum.CRIAR_PARTIDA]: {
    nome: string;
    senha?: string;
  };
  [SocketClientEventsEnum.INICIAR_PARTIDA]: {
    idPartida: string;
  };
}

export interface SocketServerEventsData {
  [SocketServerEventsEnum.LISTAR_PARTIDAS]: {
    to: TargetEventEnum;
    idPartida?: string;
  };
  [SocketServerEventsEnum.RODADA_CALCULADA]: {
    idPartida: string;
    rodada: number;
    tabuleiro: Carta[];
    jogadores: JogadorPartida;
    jogada: Carta | null;
    baralho: number;
  };
  [SocketServerEventsEnum.FINAL_PARTIDA]: {
    idPartida: string;
    vencedor: string;
    pontuacao: Map<string, number>;
  };
  [SocketServerEventsEnum.SALA_ATUALIZADA]: {
    idPartida: string;
    jogadores: Usuario[];
  };
  [SocketServerEventsEnum.PARTIDA_INICIADA]: {
    idPartida: string;
    reconexao?: boolean;
  };
}

export interface SocketServerEventsPayload {
  [SocketServerEventsEnum.LISTAR_PARTIDAS]: {
    partidas: Pick<Partida, "id" | "nome" | "vagas">[];
  };
  [SocketServerEventsEnum.RODADA_CALCULADA]: {
    rodada: number;
    tabuleiro: Carta[];
    jogadaAdversario: Carta | null;
    pontuacaoJogador: number;
    pontuacaoAdversario: number;
    cartasCapturadas: Map<number, number>;
    cartasCapturadasAdversario: Map<number, number>;
    baralho: number;
    maoJogador: Carta[];
    maoAdversario: number;
    suaVez: boolean;
  };
  [SocketServerEventsEnum.FINAL_PARTIDA]: {
    vencedor: string;
    pontuacao: Map<string, number>;
  };
  [SocketServerEventsEnum.SALA_ATUALIZADA]: {
    jogadores: JogadoresSala[];
  };
  [SocketServerEventsEnum.PARTIDA_INICIADA]: {
    baralho: number;
    maoJogador: Carta[];
    suaVez: boolean;
  };
}

export enum TargetEventEnum {
  ALL = "all",
  ROOM = "room",
  CLIENT = "client",
}

export type JogadoresSala = Pick<
  Usuario,
  "nome" | "avatar_ativo" | "partidas_totais" | "partidas_ganhas"
>;
