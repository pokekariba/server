import {
  ClientEvent,
  SocketClientEventsEnum,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import { MotivoFinal } from "../../../@types/SocketEventsData";
import partidaService from "../../../services/partida.service";
import { socketError } from "../../../utils/socketError";
import { emitEvent } from "../setupEvents";

export const jogadaEvent: ClientEvent<SocketClientEventsEnum.JOGADA> = async (
  socket,
  io,
  data
) => {
  const partida = partidaService.buscarPartidaEmAndamento(data.idPartida);
  if (!partida) {
    socketError(
      "Partida não encontrada ou não está em andamento.",
      404,
      socket
    );
    return;
  }
  const jogador = partida.jogadores.find(
    (j) => j.usuario_id === socket.data.usuario.id
  );
  if (!jogador) {
    socketError("Jogador não encontrado na partida.", 404, socket);
    return;
  }
  const cartasReais = jogador.cartas.filter((carta) =>
    data.idCartas.includes(carta.id)
  );
  if (!cartasReais.length || cartasReais.length !== data.idCartas.length) {
    socketError("Carta não encontrada na mão do jogador.", 404, socket);
    return;
  }
  try {
    await partidaService.realizarJogada(
      partida,
      cartasReais,
      jogador,
      data.valorCamaleao
    );
    emitEvent(socket, io, SocketServerEventsEnum.RODADA_CALCULADA, {
      idPartida: partida.idPartida,
      jogada: cartasReais,
    });
    if (
      partida.baralho.length === 0 &&
      partida.jogadores.every((j) => j.cartas.length === 0)
    ) {
      partidaService.finalizarPartida(partida.idPartida);
      emitEvent(socket, io, SocketServerEventsEnum.FINAL_PARTIDA, {
        idPartida: partida.idPartida,
        motivo: MotivoFinal.NORMAL,
      });
    }
  } catch (error: any) {
    socketError("Erro ao realizar jogada, " + error.message, 500, socket);
    return;
  }
};
