import { Request, Response } from "express";
import { PrismaClient, StatusUsuario } from "@prisma/client";

const prisma = new PrismaClient();

export const banirUsuario = async (req: Request, res: Response) => {
  const { idUsuario } = req.body;

  try {
    // Busca o usuário que será banido
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(idUsuario) },
    });

    if (!usuario) {
      res.status(404).json({ mensagem: "Usuário não encontrado." });
      return;
    }

    // Alterna o status entre "banido" e "offline"
    const novoStatus =
      usuario.status === StatusUsuario.banido
        ? StatusUsuario.offline
        : StatusUsuario.banido;

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: usuario.id },
      data: { status: novoStatus },
    });

    res.status(200).json({
      mensagem: `Usuário ${novoStatus === "banido" ? "banido" : "desbanido"} com sucesso.`,
      usuario: {
        id: usuarioAtualizado.id,
        nome: usuarioAtualizado.nome,
        email: usuarioAtualizado.email,
        status: usuarioAtualizado.status,
      },
    });
  } catch (error) {
    console.error("Erro ao banir usuário:", error);
    res
      .status(500)
      .json({ mensagem: "Erro interno. Tente novamente mais tarde." });
    return;
  }
};
