import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import { SocketServerEventsPayload } from "../../../@types/SocketEventsData";
import partidaService from "../../../services/partida.service";

export const finalPartidaEvent: ServerEvent<
  SocketServerEventsEnum.FINAL_PARTIDA
> = async (socket, io, data) => {
  const partida = await partidaService.buscarPartidaComUsuario(data.idPartida);
  if (!partida) return;

  const jogadores = partida.jogadores;
  const pontuacao = new Map<string, number>();
  for (const jogador of jogadores) {
    pontuacao.set(jogador.usuario.nome, jogador.pontuacao);
  }

  const payload: SocketServerEventsPayload["final_partida"] = {
    vencedor: partida.ganhador?.nome || "Empate",
    pontuacao: Array.from(pontuacao),
    motivo: data.motivo,
  };

  io.to(String(data.idPartida)).emit(
    SocketServerEventsEnum.FINAL_PARTIDA,
    payload
  );

  const sockets = await io.in(String(data.idPartida)).fetchSockets();

  for (const s of sockets) {
    s.leave(String(data.idPartida));
    s.disconnect(true);
  }
};
