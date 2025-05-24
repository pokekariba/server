import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function moedas(req: Request, res: Response) {
  try {
    const { quantidade, formaPagamento } = req.body;

    if (typeof quantidade !== "number" || quantidade <= 0) {
      res.status(400).json({ mensagem: "Quantidade inválida." });
      return;
    }

    // Pega o id do usuário do token (setado pelo middleware autenticador)
    const usuarioId = res.locals.usuario.id;

    // Busca o usuário no banco
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(usuarioId) },
    });

    if (!usuario) {
      res.status(404).json({ mensagem: "Usuário não encontrado." });
      return;
    }

    // Atualiza as moedas do usuário
    const novoSaldo = usuario.moedas + quantidade;

    await prisma.usuario.update({
      where: { id: usuario.id },
      data: { moedas: novoSaldo },
    });

    // Retorna o novo saldo de moedas
    res.status(200).json({ moedasAtuais: novoSaldo });
  } catch (error) {
    console.error("Erro ao comprar moedas:", error);
    res.status(500).json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
}
