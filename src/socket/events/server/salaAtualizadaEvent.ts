import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import {
  JogadoresSala,
  SocketServerEventsPayload,
} from "../../../@types/SocketEventsData";
import partidaService from "../../../services/partida.service";
import { socketError } from "../../../utils/socketError";

export const salaAtualizadaEvent: ServerEvent<
  SocketServerEventsEnum.SALA_ATUALIZADA
> = async (socket, io, data) => {
  const jogadores = await partidaService.listarUsuariosPartida(data.idPartida);

  const partida = await partidaService.buscarPartida(data.idPartida);

  if (!partida) {
    socketError("Parida não foi encontrada.", 404, socket);
    return;
  }

  const payload: SocketServerEventsPayload["sala_atualizada"] = {
    id: partida.id,
    nome: partida.nome,
    vagas: partida.vagas,
    senha: !!partida.senha,
    donoPartida: partida.criador.nome,
    jogadores: [],
  };

  payload.jogadores = jogadores.map<JogadoresSala>((jogador) => ({
    nome: jogador.nome,
    avatar_ativo: jogador.avatar_ativo,
    partidas_totais: jogador.partidas_totais,
    partidas_ganhas: jogador.partidas_ganhas,
  }));

  io.to(String(data.idPartida)).emit(
    SocketServerEventsEnum.SALA_ATUALIZADA,
    payload
  );
};
