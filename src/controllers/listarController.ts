import { Request, Response } from "express";
import { prisma } from "../config/prisma.config";

export const listarItensLoja = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { nome, tipo, disponibilidade } = req.body;

    const itens = await prisma.itemLoja.findMany({
      where: {
        nome: {
          contains: nome || "",
          mode: "insensitive",
        },
        tipo: tipo || undefined,
        disponibilidade: disponibilidade || undefined,
      },
      orderBy: {
        id: "asc",
      },
    });

    res.status(200).json({ itens });
  } catch (erro) {
    console.error("Erro ao listar itens da loja:", erro);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};
