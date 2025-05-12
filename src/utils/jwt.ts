import { TokenPayload } from './../@types/TokenPayload';
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string; // ideal configurar no .env

export function gerarAccessToken(id: string): string {
  // ✔️ Token com validade de 15 minutos e tipo "access"
  return jwt.sign({ id, tipo: "access" }, JWT_SECRET, { expiresIn: "15m" });
}

export function gerarPasswordResetToken(id: string): string {
  // ✔️ Token com validade de 30 minutos e tipo "reset"
  return jwt.sign({ id, tipo: "reset" }, JWT_SECRET, { expiresIn: "30m" });
}

export function verificarToken(token: string): TokenPayload {
  // ✔️ Verifica e retorna o payload do token
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
}
