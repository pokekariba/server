import { Carta, TipoCarta } from "@prisma/client";
import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import {
  JogadoresPartida,
  SocketServerEventsPayload,
} from "../../../@types/SocketEventsData";
import { Socket } from 'socket.io';

export const rodadaCalculadaEvent: ServerEvent<
  SocketServerEventsEnum.RODADA_CALCULADA
> = async (socket, io, data) => {
  const sockets = await io.in(data.idPartida).fetchSockets();

  const { maos, capturadas, pontuacoes } = separarInformacoesPorJogador(
    data.jogadores
  );

  for (const s of sockets) {
    const isJogador = s.data.usuario.id === socket.data.usuario.id;
    const idAdversario = isJogador ? 
    const maoJogador = maos.get(s.data.idUsuario) || [];

    const payload: SocketServerEventsPayload["rodada_calculada"] = {
      tabuleiro: data.tabuleiro,
      rodada: data.rodada,
      baralho: data.baralho,
      suaVez: !isJogador,
    };
    s.emit(SocketServerEventsEnum.RODADA_CALCULADA, payload);
  }
};

const separarInformacoesPorJogador = (jogadores: JogadoresPartida[]) => {
  let maos = new Map<number, Carta[]>();
  let capturadas = new Map<number, number[]>();
  let pontuacoes = new Map<number, number>();

  for (const jogador of jogadores) {
    const idJogador = jogador.id;
    const { mao, capturada } = separarCartasPorTipo(jogador.cartas);
    maos.set(idJogador, mao);
    capturadas.set(idJogador, capturada);
    pontuacoes.set(idJogador, jogador.pontuacao);
  }

  return { maos, capturadas, pontuacoes };
};

const separarCartasPorTipo = (cartas: Carta[]) => {
  const tipos = cartas.reduce(
    (acc, carta) => {
      if (carta.tipo === TipoCarta.mao) {
        acc.mao.push(carta);
      } else {
        acc.capturada[carta.valor] = carta.quantidade;
      }
      return acc;
    },
    { mao: [] as Carta[], capturada: Array(9).fill(0) as number[] }
  );
  return tipos;
};

const buscarAdversario = (sockets: Socket[], idJogador: number) => {

}