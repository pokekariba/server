// src/controllers/backoffice/listarUsuarios.ts
import { Request, Response } from "express";
import { prisma } from "../../prisma/client";

export const listarUsuariosController = async (req: Request, res: Response) => {
  try {
    const { email = "", nome = "" } = req.body;

    if (typeof email !== "string") {
      return res
        .status(400)
        .json({ message: "Campo EMAIL invalido, tente novamente." });
    }

    if (typeof nome !== "string") {
      return res
        .status(400)
        .json({ message: "Campo NOME invalido, tente novamente." });
    }

    const usuarios = await prisma.usuario.findMany({
      where: {
        nome: { contains: nome, mode: "insensitive" },
        email: { contains: email, mode: "insensitive" },
      },
      select: {
        id: true,
        nome: true,
        email: true,
        status: true,
      },
    });

    return res.status(200).json({ usuarios });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro interno, tente novamente mais tarde." });
  }
};
