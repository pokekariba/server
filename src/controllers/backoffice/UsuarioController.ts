import { Request, Response } from "express";
import { prisma } from "../../prisma/client";

export const listarUsuarios = async (req: Request, res: Response) => {
  try {
    const { email = "", nome = "" } = req.body;

    if (typeof email !== "string") {
      res
        .status(400)
        .json({ message: "Campo EMAIL invalido, tente novamente." });
      return;
    }

    if (typeof nome !== "string") {
      res
        .status(400)
        .json({ message: "Campo NOME invalido, tente novamente." });
      return;
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

    res.status(200).json({ usuarios });
    return;
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Erro interno, tente novamente mais tarde." });
    return;
  }
};
