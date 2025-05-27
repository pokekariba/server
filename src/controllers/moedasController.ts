import { Request, Response } from "express";
import { prisma } from "../config/prisma.config";

export async function moedas(req: Request, res: Response) {
  try {
    const { quantidade, formaPagamento } = req.body;

    if (typeof quantidade !== "number" || quantidade <= 0) {
      res.status(400).json({ mensagem: "Quantidade inválida." });
      return;
    }

    // Usuário já está disponível via middleware
    const usuario = res.locals.usuario;

    // Atualiza as moedas do usuário
    const novoSaldo = usuario.moedas + quantidade;

    await prisma.usuario.update({
      where: { id: usuario.id },
      data: { moedas: novoSaldo },
    });

    res.status(200).json({ moedasAtuais: novoSaldo });
  } catch (error) {
    console.error("Erro ao comprar moedas:", error);
    res
      .status(500)
      .json({ mensagem: "Erro interno, tente novamente mais tarde." });
  }
}
