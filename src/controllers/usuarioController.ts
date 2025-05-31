import { Request, Response } from "express";
import { StatusUsuario } from "@prisma/client";
import usuarioService from "../services/usuario.service";

export const banirUsuario = async (req: Request, res: Response) => {
  const { idUsuario } = req.body;

  try {
    // Busca o usuário que será banido
    const usuario = await usuarioService.buscarUsuario({id: Number(idUsuario)});

    if (!usuario) {
      res.status(404).json({ mensagem: "Usuário não encontrado." });
      return;
    }

    // Alterna o status entre "banido" e "offline"
    const novoStatus =
      usuario.status === StatusUsuario.banido
        ? StatusUsuario.offline
        : StatusUsuario.banido;

    const usuarioAtualizado = await usuarioService.mudarStatusUsuario(novoStatus, usuario.id);

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

export const listarUsuarios = async (req: Request, res: Response) => {
  try {
    const { email, nome } = req.body;

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

    const usuarios = await usuarioService.listarUsuarios(nome, email);

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
