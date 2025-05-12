import { Request, Response, NextFunction } from "express";
import { gerarAccessToken, verificarToken } from "../utils/jwt";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export async function autenticador(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ mensagem: "Token inválido" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verificarToken(token);
    const usuario = await prisma.usuario.findUnique({
      where: {
        id: +payload.id,
      }
    });
    if (!usuario) {
      res.status(401).json({ mensagem: "Usuário não encontrado" });
      return;
    }
    // Verificação de rota /backoffice e cargo do usuário
    if (req.path.startsWith("/backoffice") && usuario.cargo !== "adm") {
      res.status(401).json({ mensagem: "Usuário não autorizado" });
      return
    }

    // Gera novo token com +15min
    const novoToken = gerarAccessToken(payload.id);
    res.setHeader("x-renewed-token", novoToken);

    // Adiciona o payload no request para uso posterior
    res.locals.usuario = payload;

    next();
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      res.status(401).json({ mensagem: "Sessão expirada, faça login novamente" });
      return;
    }

    res.status(401).json({ mensagem: "Token inválido" });
    return;
  }
}
