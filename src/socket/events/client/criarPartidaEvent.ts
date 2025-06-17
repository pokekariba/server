import { StatusUsuario } from "@prisma/client";
import {
  ClientEvent,
  SocketClientEventsEnum,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import partidaService from "../../../services/partida.service";
import usuarioService from "../../../services/usuario.service";
import { socketError } from "../../../utils/socketError";
import { TargetEventEnum } from "../../../@types/SocketEventsData";
import { emitEvent } from "../emitEvents";

export const criarPartidaEvent: ClientEvent<
  SocketClientEventsEnum.CRIAR_PARTIDA
> = async (socket, io, data) => {
  const { nome, senha } = data;
  const idCriador = socket.data.usuario.id;

  if (!nome) {
    socketError("Nome da partida é obrigatório.", 400, socket);
    return;
  }

  const partida = await partidaService.criarPartida(nome, idCriador, senha);

  if (!partida) {
    socketError("Erro ao criar partida.", 500, socket);
    return;
  }

  await usuarioService.mudarStatusUsuario(
    StatusUsuario.em_partida,
    Number(idCriador),
    socket
  );

  socket.join(partida.id.toString());

  socket.leave("usuarios_online");

  emitEvent(socket, io, SocketServerEventsEnum.SALA_ATUALIZADA, {
    idPartida: partida.id,
  });

  emitEvent(socket, io, SocketServerEventsEnum.LISTAR_PARTIDAS, {
    to: TargetEventEnum.ALL,
  });
};
