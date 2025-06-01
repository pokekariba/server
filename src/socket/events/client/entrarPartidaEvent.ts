import { StatusPartida, StatusUsuario, Usuario } from "@prisma/client";
import {
  ClientEvent,
  SocketClientEventsEnum,
  SocketServerEventsEnum,
} from "../../../@types/SocketEvents";
import partidaService from "../../../services/partida.service";
import { socketError } from "../../../utils/socketError";
import { compararString } from "../../../utils/criptografia";
import usuarioService from "../../../services/usuario.service";
import { emitEvent } from "../setupEvents";
import { TargetEventEnum } from "../../../@types/SocketEventsData";

export const entrarPartidaEvent: ClientEvent<
  SocketClientEventsEnum.ENTRAR_PARTIDA
> = async (socket, io, data) => {
  const usuario: Usuario = socket.data.usuario;
  if (usuario.status === StatusUsuario.em_partida) {
    socketError("O usuário já esta em outra partida!", 403, socket);
    return;
  }
  const partida = await partidaService.buscarPartida(data.idPartida);
  if (!partida) {
    socketError("Parida não foi encontrada.", 404, socket);
    return;
  }
  if (partida.status !== StatusPartida.em_espera) {
    socketError("Parida indiponível.", 403, socket);
    return;
  }
  if (!partida.vagas) {
    socketError("Não há vagas disponíveis.", 403, socket);
    return;
  }
  if (
    partida.senha &&
    !(await compararString(data.senha || "", partida.senha))
  ) {
    socketError("Senha incorreta.", 403, socket);
    return;
  }
  await partidaService.preencherVaga(partida, Number(usuario.id));
  socket.join(String(usuario.id));
  await usuarioService.mudarStatusUsuario(
    StatusUsuario.em_partida,
    Number(usuario.id),
    socket
  );
  emitEvent(socket, io, SocketServerEventsEnum.SALA_ATUALIZADA, {
    idPartida: partida.id,
  });
  emitEvent(socket, io, SocketServerEventsEnum.LISTAR_PARTIDAS, {
    to: TargetEventEnum.ALL,
  });
};
