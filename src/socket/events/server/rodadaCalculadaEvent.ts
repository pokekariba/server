import { Carta, TipoCarta } from "@prisma/client";
import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import {
  MotivoFinal,
  SocketServerEventsPayload,
} from "../../../@types/SocketEventsData";
import { JogadorPartida } from "../../../@types/EstadoPartida";
import partidaService from "../../../services/partida.service";
import { emitEvent } from "../setupEvents";

export const rodadaCalculadaEvent: ServerEvent<
  SocketServerEventsEnum.RODADA_CALCULADA
> = async (socket, io, data) => {
  const sockets = await io.in(String(data.idPartida)).fetchSockets();

  const partida = partidaService.buscarPartidaEmAndamento(data.idPartida);

  if (!partida) {
    console.error(`Partida ${data.idPartida} não encontrada.`);
    return emitEvent(socket, io, SocketServerEventsEnum.FINAL_PARTIDA, {
      idPartida: data.idPartida,
      motivo: MotivoFinal.ERRO_SERVICOR,
    });
  }

  const { maos, capturadas, pontuacoes } = separarInformacoesPorJogador(
    partida.jogadores
  );

  for (const [i, s] of sockets.entries()) {
    const isJogador = s.data.usuario.id === socket.data.usuario.id;
    if (!isJogador && data.reconexao) continue;
    const idAdversario = sockets[+!i].data.usuario.id;
    const maoJogador = maos.get(s.data.usuario.id) || [];
    const maoAdversario = maos.get(idAdversario)?.length || 0;
    const cartasCapturadas = capturadas.get(s.data.usuario.id) || [];
    const cartasCapturadasAdversario = capturadas.get(idAdversario) || [];
    const pontuacaoJogador = pontuacoes.get(s.data.usuario.id) || 0;
    const pontuacaoAdversario = pontuacoes.get(idAdversario) || 0;

    const payload: SocketServerEventsPayload["rodada_calculada"] = {
      tabuleiro: partida.tabuleiro,
      rodada: partida.rodada,
      baralho: partida.baralho.length,
      jogadaAdversario: data.jogada,
      suaVez: !isJogador,
      maoJogador,
      maoAdversario,
      cartasCapturadas,
      cartasCapturadasAdversario,
      pontuacaoAdversario,
      pontuacaoJogador,
    };
    s.emit(SocketServerEventsEnum.RODADA_CALCULADA, payload);
  }
};

const separarInformacoesPorJogador = (jogadores: JogadorPartida[]) => {
  let maos = new Map<number, Carta[]>();
  let capturadas = new Map<number, number[]>();
  let pontuacoes = new Map<number, number>();

  for (const jogador of jogadores) {
    const idUsuario = jogador.usuario_id;
    const { mao, capturada } = separarCartasPorTipo(jogador.cartas);
    maos.set(idUsuario, mao);
    capturadas.set(idUsuario, capturada);
    pontuacoes.set(idUsuario, jogador.pontuacao);
  }

  return { maos, capturadas, pontuacoes };
};

const separarCartasPorTipo = (cartas: Carta[]) => {
  const tipos = cartas.reduce(
    (acc, carta) => {
      if (carta.tipo === TipoCarta.mao) {
        acc.mao[carta.posicao] = carta;
      } else {
        acc.capturada[carta.valor]++;
      }
      return acc;
    },
    { mao: [] as Carta[], capturada: Array(9).fill(0) as number[] }
  );
  return tipos;
};
