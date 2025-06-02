<<<<<<< HEAD
import { Request, Response } from "express";
import { DisponibilidadeItem, TipoItemLoja } from "@prisma/client";
import prisma from "../config/prisma.config";
=======
import { Request, Response, NextFunction } from "express";
import {
  PrismaClient,
  DisponibilidadeItem,
  TipoItemLoja,
} from "@prisma/client";
import { verificarToken } from "../utils/jwt";


const prisma = new PrismaClient();
>>>>>>> ba00c5e (FERNANDO_CASTELHANO)

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

 // Sua função para verificar o JWT



async function buscarImagensDoDeck(deckId: number): Promise<string[]> {
    const deck = await prisma.item.findUnique({
      where: { id: deckId },
      select: {
        imagens_deck: true, // ajuste com base no seu modelo real
      },
    });
  
    return deck?.imagens_deck || [];
  }
  




export const equiparItem = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.body;
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Token ausente ou inválido" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verificarToken(token); // Supondo que retorna { id: userId }
    const userId = decoded.id;

    // Verifica se o item realmente pertence ao usuário
    const itemUsuario = await prisma.item_Usuario.findFirst({
      where: {
        usuarioId: userId,
        itemId: itemId,
      },
      include: {
        item: true,
      },
    });

    if (!itemUsuario) {
      return res.status(404).json({ error: "Usuário não possui este item" });
    }

    const { tipo, imagem } = itemUsuario.item;

    let updateData = {};

    switch (tipo) {
      case "deck":
        updateData = { deck_ativo: itemId };
        break;
      case "fundo":
        updateData = { fundo_ativo: itemId };
        break;
      case "avatar":
        updateData = { avatar_ativo: itemId };
        break;
      default:
        return res.status(400).json({ error: "Tipo de item inválido" });
    }

    // Atualiza o campo correspondente no usuário
    await prisma.usuario.update({
      where: { id: userId },
      data: updateData,
    });

    // Gera o array de imagens
    let imagens: string[] = [];

    if (tipo === "deck") {
      imagens = await buscarImagensDoDeck(itemId); // Retorna múltiplas imagens
    } else {
      imagens = [imagem]; // Apenas uma imagem
    }

    return res.status(200).json({ imagens });

  } catch (error) {
    console.error("Erro ao equipar item:", error);
    return res
      .status(500)
      .json({ error: "Erro interno. Tente novamente mais tarde." });
  }
};
