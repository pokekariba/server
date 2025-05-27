import { StatusPartida } from "@prisma/client";
import {
  ServerEvent,
  SocketServerEventsEnum,
} from "./../../../@types/SocketEvents";
import { prisma } from "../../../config/prisma.config";
import {
  SocketServerEventsPayload,
  TargetEventEnum,
} from "../../../@types/SocketEventsData";

export const listarPartidasEvent: ServerEvent<
  SocketServerEventsEnum.LISTAR_PARTIDAS
> = async (socket, io, data) => {
  const partidas = await prisma.partida.findMany({
    select: {
      id: true,
      nome: true,
      vagas: true,
    },
    where: {
      status: StatusPartida.em_espera,
    },
  });

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
      io.to(data.idPartida).emit(
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
