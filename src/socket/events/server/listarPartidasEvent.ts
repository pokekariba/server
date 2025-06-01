import { StatusPartida } from "@prisma/client";
import {
  ServerEvent,
  SocketServerEventsEnum,
} from "./../../../@types/SocketEvents";
import {
  SocketServerEventsPayload,
  TargetEventEnum,
} from "../../../@types/SocketEventsData";
import partidaService from "../../../services/partida.service";

export const listarPartidasEvent: ServerEvent<
  SocketServerEventsEnum.LISTAR_PARTIDAS
> = async (socket, io, data) => {
  const partidas = await partidaService.listarPartidasEmEspera();

  const payload: SocketServerEventsPayload["listar_partidas"] = {
    partidas,
  };

  switch (data.to) {
    case TargetEventEnum.ALL:
      io.to("usuarios_online").emit(
        SocketServerEventsEnum.LISTAR_PARTIDAS,
        payload
      );
      break;
    case TargetEventEnum.ROOM:
      if (!data.idPartida) {
        throw new Error("idPartida is required for ROOM target");
      }
      io.to(String(data.idPartida)).emit(
        SocketServerEventsEnum.LISTAR_PARTIDAS,
        payload
      );
      break;
    case TargetEventEnum.CLIENT:
      socket.emit(SocketServerEventsEnum.LISTAR_PARTIDAS, payload);
      break;
    default:
      break;
  }
};
