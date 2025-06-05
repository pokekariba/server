import { Socket } from "socket.io";
import { NextFunction } from "./handshake.middleware";
import { socketError } from "../utils/socketError";
import {
  gerarAccessToken,
  tokenVaiexpirarEm,
  verificarToken,
} from "../utils/jwt";

export const socketMiddleware = (socket: Socket) => {
  const token = socket.handshake.auth?.token;

  if (!token) {
    throw socketError("Token não fornecido", 401);
  }

  try {
    const payload = verificarToken(token);
    if (tokenVaiexpirarEm(payload, 5)) {
      const newToken = gerarAccessToken(payload.id);
      socket.emit("token_renovado", newToken);
    }
  } catch (err: any) {
    console.log("Erro ao verificar token no handshake:", err);
    if (err.name === "TokenExpiredError") {
      throw socketError("Sessão expirada, faça login novamente", 401);
    }
    throw socketError("Token inválido", 401);
  }
};
