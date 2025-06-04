import { Request, Response } from "express";
import { DisponibilidadeItem, TipoItemLoja, Usuario } from "@prisma/client";
import prisma from "../config/prisma.config";
import { ItemLojaResponse } from "../@types/ItemLoja";

export const comprarItemLoja = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuarioId = res.locals.usuario.id; // ID do usuário extraído do JWT no middleware
    const { itemId } = req.body;

    if (!itemId || typeof itemId !== "number") {
      res.status(400).json({ mensagem: "ID do item inválido" });
      return;
    }

    // Buscar usuário e saldo
    const usuario = res.locals.usuario as Usuario;

    // Buscar item na loja
    const item = await prisma.itemLoja.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      res.status(404).json({ mensagem: "Item não encontrado" });
      return;
    }

    if (item.disponibilidade !== "disponivel") {
      res
        .status(409)
        .json({ mensagem: "Item não esta mais disponível na loja." });
      return;
    }

    const jaPossui = await prisma.itemUsuario.findFirst({
      where: {
        usuario_id: usuarioId,
        item_loja_id: itemId,
      },
    });

    if (jaPossui) {
      res.status(409).json({ mensagem: "Usuário já possui este item." });
      return;
    }

    if (usuario.moedas < item.preco) {
      res
        .status(402)
        .json({ mensagem: "Saldo insuficiente para comprar o item." });
      return;
    }

    // Atualizar saldo e salvar associação
    const novoSaldo = usuario.moedas - item.preco;

    await prisma.$transaction([
      prisma.usuario.update({
        where: { id: usuarioId },
        data: { moedas: novoSaldo },
      }),
      prisma.itemUsuario.create({
        data: {
          usuario_id: usuarioId,
          item_loja_id: itemId,
        },
      }),
    ]);

    res.status(200).json({ saldoAtual: novoSaldo });
  } catch (erro) {
    console.error("Erro ao comprar item:", erro);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};

export const listaItemLoja = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const usuarioId = res.locals.usuario.id;

    const itensUsuario = await prisma.itemUsuario
      .findMany({
        select: {
          item_loja_id: true,
        },
        where: {
          usuario_id: usuarioId,
        },
      })
      .then((arr) => arr.flatMap((item) => item.item_loja_id));

    const itensLoja = await prisma.itemLoja.findMany({
      where: {
        OR: [
          { disponibilidade: DisponibilidadeItem.disponivel },
          { id: { in: itensUsuario } },
        ],
      },
    });

    const itensPorTipo = itensLoja.reduce(
      (acc, item) => {
        const obtido = itensUsuario.includes(item.id);
        switch (item.tipo) {
          case TipoItemLoja.avatar:
            acc.avatar.push({ ...item, obtido });
            break;
          case TipoItemLoja.deck:
            acc.cartas.push({ ...item, obtido });
            break;
          case TipoItemLoja.fundo:
            acc.fundo.push({ ...item, obtido });
            break;
        }
        return acc;
      },
      { cartas: [], fundo: [], avatar: [] } as {
        cartas: ItemLojaResponse[];
        fundo: ItemLojaResponse[];
        avatar: ItemLojaResponse[];
      }
    );
    res.status(200).json(itensPorTipo);
  } catch (error) {
    console.error("Erro ao comprar item:", error);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};
