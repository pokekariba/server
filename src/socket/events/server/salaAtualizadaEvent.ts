import {
  ServerEvent,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import {
  JogadoresSala,
  SocketServerEventsPayload,
} from "../../../@types/SocketEventsData";
import partidaService from "../../../services/partida.service";

export const salaAtualizadaEvent: ServerEvent<
  SocketServerEventsEnum.SALA_ATUALIZADA
> = async (socket, io, data) => {
  const jogadores = await partidaService.listarUsuariosPartida(data.idPartida);

  const payload: SocketServerEventsPayload["sala_atualizada"] = {
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
