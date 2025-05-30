import { Request, Response } from "express";
import { prisma } from "../config/prisma.config";

export const editarItemLoja = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id, nome, tipo, disponibilidade, preco } = req.body;

    // Validações de campos
    if (!id || typeof id !== "number") {
      res.status(400).json({ mensagem: "Campo ID inválido, tente novamente." });
      return;
    }

    if (!nome || typeof nome !== "string") {
      res
        .status(400)
        .json({ mensagem: "Campo NOME inválido, tente novamente." });
      return;
    }

    if (!tipo || !["deck", "avatar", "fundo"].includes(tipo)) {
      res
        .status(400)
        .json({ mensagem: "Campo TIPO inválido, tente novamente." });
      return;
    }

    if (
      !disponibilidade ||
      !["disponivel", "indisponivel"].includes(disponibilidade)
    ) {
      res
        .status(400)
        .json({ mensagem: "Campo DISPONIBILIDADE inválido, tente novamente." });
      return;
    }

    if (typeof preco !== "number" || preco < 0) {
      res
        .status(400)
        .json({ mensagem: "Campo PRECO inválido, tente novamente." });
      return;
    }

    const itemExistente = await prisma.itemLoja.findUnique({
      where: { id },
    });

    if (!itemExistente) {
      res.status(404).json({ mensagem: "Nenhum item encontrado." });
      return;
    }

    await prisma.itemLoja.update({
      where: { id },
      data: {
        nome,
        tipo, // já está validado como um valor permitido
        disponibilidade,
        preco,
      },
    });

    res.status(200).json({ mensagem: "Item atualizado com sucesso." });
  } catch (erro) {
    console.error("Erro ao editar item da loja:", erro);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};
