import { env } from '../config/env';
import { TokenPayload } from './../@types/TokenPayload';

import jwt from "jsonwebtoken";

const JWT_SECRET = env.jwtSecret; // ideal configurar no .env

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

export function tokenVaiexpirarEm(
  payload: TokenPayload,
  minutos: number
): boolean {
  if (!payload || !payload.exp) {
    return false;
  }

  const now = Math.floor(Date.now() / 1000);
  const timeLeftInSeconds = payload.exp - now;
  const thresholdInSeconds = minutos * 60;

  return timeLeftInSeconds <= thresholdInSeconds;
}
