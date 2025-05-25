import { Request, Response } from "express";
import { PrismaClient, StatusUsuario } from "@prisma/client";

const prisma = new PrismaClient();

export const banirUsuario = async (req: Request, res: Response) => {
  const { idUsuario } = req.body;

  try {
    // Verifica se o usuário existe
    const usuario = await prisma.usuario.findUnique({
      where: { id: Number(idUsuario) },
    });

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado." });
    }

    // Alterna o status entre "banido" e "offline"
    const novoStatus =
      usuario.status === StatusUsuario.banido
        ? StatusUsuario.offline
        : StatusUsuario.banido;

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: Number(idUsuario) },
      data: { status: novoStatus },
    });

    return res.status(200).json({
      usuarios: [
        {
          id: usuarioAtualizado.id,
          email: usuarioAtualizado.email,
          nome: usuarioAtualizado.nome,
          status: usuarioAtualizado.status,
        },
      ],
    });
  } catch (error) {
    console.error("Erro ao banir usuário:", error);
    return res
      .status(500)
      .json({ mensagem: "Erro interno, tente novamente mais tarde." });
  }
};
