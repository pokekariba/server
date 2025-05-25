import { Request, Response, NextFunction } from "express";
import { PrismaClient, DisponibilidadeItem, TipoItemLoja } from "@prisma/client";

const prisma = new PrismaClient();

export async function adicionarItem(req: Request, res: Response) {
  try {
    const { nome, tipo, disponibilidade, preco } = req.body;

    // Validações básicas
    if (!nome || typeof nome !== "string") {
      return res.status(400).json({ mensagem: "Campo NOME inválido, tente novamente." });
    }

    if (!tipo || !Object.values(TipoItemLoja).includes(tipo)) {
      return res.status(400).json({ mensagem: "Campo TIPO inválido, tente novamente." });
    }

    if (!disponibilidade || !Object.values(DisponibilidadeItem).includes(disponibilidade)) {
      return res.status(400).json({ mensagem: "Campo DISPONIBILIDADE inválido, tente novamente." });
    }

    if (typeof preco !== "number" || preco < 0) {
      return res.status(400).json({ mensagem: "Campo PRECO inválido, tente novamente." });
    }

    await prisma.itemLoja.create({
      data: {
        nome,
        tipo: tipo as TipoItemLoja,
        disponibilidade: disponibilidade as DisponibilidadeItem,
        preco,
      },
    });

    return res.sendStatus(200);
  } catch (error) {
    console.error("Erro ao adicionar item:", error);
    return res.status(500).json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
}
