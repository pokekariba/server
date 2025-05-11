import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { gerarAccessToken } from "../utils/jwt";

const JWT_SECRET = process.env.JWT_SECRET || "sua_chave_secreta";

export function autenticador(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ mensagem: "Token inválido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET) as any;

    // Verificação de rota /backoffice e cargo do usuário
    if (req.path.startsWith("/backoffice") && payload.cargo !== "adm") {
      return res.status(401).json({ mensagem: "Usuário não autorizado" });
    }

    // Gera novo token com +15min
    const novoToken = gerarAccessToken(payload.id);
    res.setHeader("x-renewed-token", novoToken);

    // Adiciona o payload no request para uso posterior
    (req as any).usuario = payload;

    next();
  } catch (err: any) {
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ mensagem: "Sessão expirada, faça login novamente" });
    }

    return res.status(401).json({ mensagem: "Token inválido" });
  }
}
