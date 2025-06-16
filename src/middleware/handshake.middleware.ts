import { Socket } from "socket.io";
import { verificarToken } from "../utils/jwt";
import { StatusUsuario } from "@prisma/client";
import { socketError } from "../utils/socketError";
import usuarioService from "../services/usuario.service";
import partidaService from "../services/partida.service";

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
    let usuario = await usuarioService.buscarUsuario({
      id: Number(payload.id),
    });

    if (!usuario) {
      return next(socketError("Usuário não encontrado.", 404));
    }

    if (usuario.status === StatusUsuario.banido) {
      return next(socketError("Usuário banido.", 403));
    }

    usuario = await usuarioService.mudarStatusUsuario(
      StatusUsuario.online,
      usuario.id,
      socket
    );

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
