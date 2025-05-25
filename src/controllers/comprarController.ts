import { Request, Response } from "express";
import { PrismaClient, Usuario } from '@prisma/client';

const prisma = new PrismaClient();

export const comprarItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const usuarioId = res.locals.usuario.id;  // ID do usuário extraído do JWT no middleware
    const { itemId } = req.body;

    if (!itemId || typeof itemId !== "number") {
      res.status(400).json({ mensagem: "ID do item inválido" });
      return;
    }

    // Buscar usuário e saldo
    const usuario = res.locals.usuario as Usuario;

    // Buscar item na loja
    const item = await prisma.itemLoja.findUnique({
      where: { id: itemId }
    });

    if (!item) {
      res.status(404).json({ mensagem: "Item não encontrado" });
      return;
    }

    if (item.disponibilidade !== "disponivel") {
      res.status(409).json({ mensagem: "Item não esta mais disponível na loja." });
      return;
    }

    const jaPossui = await prisma.itemUsuario.findFirst({
        where: {
          usuario_id: usuarioId,
          item_loja_id: itemId
        }
      });
  
      if (jaPossui) {
        res.status(409).json({ mensagem: "Usuário já possui este item." });
        return;
      }

    if (usuario.moedas < item.preco) {
      res.status(402).json({ mensagem: "Saldo insuficiente para comprar o item." });
      return;
    }

    // Atualizar saldo e salvar associação
    const novoSaldo = usuario.moedas - item.preco;

    await prisma.$transaction([
      prisma.usuario.update({
        where: { id: usuarioId },
        data: { moedas: novoSaldo }
      }),
      prisma.itemUsuario.create({
        data: {
          usuario_id: usuarioId,
          item_loja_id: itemId
        }
      })
    ]);

    res.status(200).json({ saldoAtual: novoSaldo });
  } catch (erro) {
    console.error("Erro ao comprar item:", erro);
    res.status(500).json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};
