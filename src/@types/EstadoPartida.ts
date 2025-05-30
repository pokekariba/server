import { Carta, Partida, Prisma } from "@prisma/client";

export interface EstadoPartida {
  idPartida: string;
  rodada: number;
  tabuleiro: Carta[];
  jogadores: JogadorPartida[];
  baralho: number;
}

export type JogadorPartida = Prisma.JogadorPartidaGetPayload<{
  include: {
    cartas: true;
  };
}>;

export type ResumoPartida = Pick<Partida, "id" | "nome" | "vagas">;
