import { Request, Response } from "express";
import { listarUsuarios } from "../../mocks/usuarioMock"; // usando mock!

export const listarUsuariosController = async (req: Request, res: Response) => {
  try {
    const { email = "", nome = "" } = req.body;

    // Validações:
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

    const usuarios = await listarUsuarios(nome, email);

    return res.status(200).json({ usuarios });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro interno, tente novamente mais tarde." });
  }
};
