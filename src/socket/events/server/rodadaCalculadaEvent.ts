import { Carta, TipoCarta } from "@prisma/client";
import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import { SocketServerEventsPayload } from "../../../@types/SocketEventsData";

export const rodadaCalculadaEvent: ServerEvent<
  SocketServerEventsEnum.RODADA_CALCULADA
> = async (socket, io, data) => {
  const sockets = await io.in(data.idPartida).fetchSockets();

  let cartasJogador: Carta[] = [];
  let cartasAdversario: Carta[] = [];
  let pontuacaoJogador = 0;
  let pontuacaoAdversario = 0;

  for (const jogador of data.jogadores) {
    if (jogador.id === socket.data.idUsuario) {
      cartasJogador.concat(jogador.cartas);
      pontuacaoJogador = jogador.pontuacao;
    } else {
      cartasAdversario.concat(jogador.cartas);
      pontuacaoAdversario = jogador.pontuacao;
    }
  }

  const { maoJogador, cartasCapturadas } = separarCartasPorTipo(cartasJogador);
  const {
    maoJogador: maoAdversario,
    cartasCapturadas: cartasCapturadasAdversario,
  } = separarCartasPorTipo(cartasAdversario);

  for (const s of sockets) {
    const isJogador = s.data.idUsuario === socket.data.idUsuario;
    const payload: SocketServerEventsPayload["rodada_calculada"] = {
      tabuleiro: data.tabuleiro,
      rodada: data.rodada,
      baralho: data.baralho,
      maoJogador: isJogador ? maoJogador : maoAdversario,
      maoAdversario: isJogador ? maoAdversario.length : maoJogador.length,
      jogadaAdversario: isJogador ? null : data.jogada,
      pontuacaoJogador: isJogador ? pontuacaoJogador : pontuacaoAdversario,
      pontuacaoAdversario: isJogador ? pontuacaoAdversario : pontuacaoJogador,
      cartasCapturadas: isJogador
        ? cartasCapturadas
        : cartasCapturadasAdversario,
      cartasCapturadasAdversario: isJogador
        ? cartasCapturadasAdversario
        : cartasCapturadas,
      suaVez: !isJogador,
    };
    s.emit(SocketServerEventsEnum.RODADA_CALCULADA, payload);
  }
};

const separarCartasPorTipo = (cartas: Carta[]) => {
  let maoJogador: Carta[] = [];
  let cartasCapturadas = new Map<number, number>();
  for (const carta of cartas) {
    if (carta.tipo === TipoCarta.mao) {
      maoJogador.push(carta);
    }
    if (carta.tipo === TipoCarta.capturado) {
      cartasCapturadas.set(carta.valor, carta.quantidade);
    }
  }
  return { maoJogador, cartasCapturadas };
};
