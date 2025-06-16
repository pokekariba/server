import { Partida, JogadorPartida, StatusPartida } from "@prisma/client";
import { Carta } from "./Carta";

export interface EstadoPartida {
  idPartida: number;
  status: StatusPartida;
  rodada: number;
  tabuleiro: Carta[][];
  jogadores: JogadorComCarta[];
  baralho: Carta[];
}

export type JogadorComCarta = JogadorPartida & {
  cartas: Carta[];
};

export type ResumoPartida = Pick<Partida, "id" | "nome" | "vagas"> & {
  senha: boolean;
};
