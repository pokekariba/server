import { Request, Response } from "express";
import { DisponibilidadeItem, TipoItemLoja } from "@prisma/client";
import prisma from "../config/prisma.config";

export async function adicionarItem(req: Request, res: Response) {
  try {
    const { nome, tipo, disponibilidade, preco } = req.body;

    // Validações básicas
    if (!nome || typeof nome !== "string") {
      res
        .status(400)
        .json({ mensagem: "Campo NOME inválido, tente novamente." });
      return;
    }

    if (!tipo || !Object.values(TipoItemLoja).includes(tipo)) {
      res
        .status(400)
        .json({ mensagem: "Campo TIPO inválido, tente novamente." });
      return;
    }

    if (
      !disponibilidade ||
      !Object.values(DisponibilidadeItem).includes(disponibilidade)
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

    const item = await prisma.itemLoja.create({
      data: {
        nome,
        tipo: tipo as TipoItemLoja,
        disponibilidade: disponibilidade as DisponibilidadeItem,
        preco,
      },
    });

    res.status(200).json(item);
  } catch (error) {
    console.error("Erro ao adicionar item:", error);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
    return;
  }
}

export const listarItens = async (
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

export const editarItem = async (
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

export const equiparItem = async (req: Request, res: Response) => {
  const usuarioId = res.locals.usuario.id;
  try {
    const { idItem, variante } = req.body;

    const item = await prisma.itemUsuario.findFirst({
      where: { item_loja_id: idItem, usuario_id: usuarioId },
      include: { itemLoja: true },
    });

    const tipo = {
      [TipoItemLoja.avatar]: "avatar_ativo",
      [TipoItemLoja.deck]: "deck_ativo",
      [TipoItemLoja.fundo]: "fundo_ativo",
    };

    if (!item) {
      res.status(404).json({ mensagem: "Item não encontrado" });
      return;
    }
    const tipoItem = tipo[item.itemLoja.tipo];
    if (!tipoItem) {
      res.status(404).json({ mensagem: "Item não encontrado" });
      return;
    }
    await prisma.usuario.update({
      where: { id: usuarioId },
      data: { [tipoItem]: item.item_loja_id },
    });

    if (variante) {
      await prisma.usuario.update({
        where: { id: usuarioId },
        data: { avatar_variante: variante },
      });
    }
    res.status(200).json({ itens: item });
  } catch (erro) {
    console.error("Erro ao listar itens da loja:", erro);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};
