import { Socket } from "socket.io";
import { verificarToken } from "../utils/jwt";
import { StatusPartida, StatusUsuario } from "@prisma/client";
import { socketError } from "../utils/socketError";
import { prisma } from "../config/prisma.config";

export type NextFunction = (err?: Error) => void;

export const handShakeMiddleware = async (
  socket: Socket,
  next: NextFunction
) => {
  const token = socket.handshake.auth.token;
  if (!token) {
    return next(socketError("Token de autenticação não fornecido.", 401));
  }
  try {
    const payload = verificarToken(token);
    if (payload.tipo !== "access") {
      return next(socketError("Token inválido ou expirado.", 401));
    }
    let usuario = await prisma.usuario.findUnique({
      where: {
        id: +payload.id,
      },
    });

    if (!usuario) {
      return next(socketError("Usuário não encontrado.", 404));
    }

    if (usuario.status === StatusUsuario.banido) {
      return next(socketError("Usuário banido.", 403));
    }

    if (usuario.status === StatusUsuario.em_partida) {
      const partida = await prisma.partida.findFirst({
        select: {
          id: true,
        },
        where: {
          status: StatusPartida.em_andamento,
          jogadores: {
            some: {
              usuario_id: usuario.id,
            },
          },
        },
      });
      if (partida) {
        socket.data.idPartida = partida.id;
      }
    }

    if (!socket.data.idPartida) {
      usuario = await prisma.usuario.update({
        where: { id: usuario.id },
        data: { status: StatusUsuario.online },
      });
    }
    socket.data.usuario = usuario;
    next();
  } catch (err: any) {
    console.log("Erro ao verificar token no handshake:", err);
    if (err.name === "TokenExpiredError") {
      return next(socketError("Sessão expirada, faça login novamente", 401));
    }
    return next(socketError("Token inválido", 401));
  }
};
