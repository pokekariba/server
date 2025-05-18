import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { gerarAccessToken } from "../utils/jwt";
import { compararString, criptografarString } from "../utils/criptografia";

enum StatusUsuario {
  online = "online",
  em_partida = "em_partida",
  offline = "offline",
  banido = "banido",
}

enum CargoUsuario {
  adm = "adm",
  jogador = "jogador",
}

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { usuario, senha } = req.body;

    const user = await prisma.usuario.findFirst({
      where: { nome: usuario }
    });

    if (!user) {
      res.status(404).json({ mensagem: "Usuário inexistente ou credenciais incorretas." });
      return;
    }

    const senhaValida = await compararString(senha, user.senha);

    if (!senhaValida) {
      res.status(404).json({ mensagem: "Usuário inexistente ou credenciais incorretas." });
      return;
    }

    if (user.status === StatusUsuario.banido) {
      res.status(403).json({ mensagem: "Usuário banido." });
      return;
    }

    const token = gerarAccessToken(user.id.toString());

    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json({
      email: user.email,
      nome: user.nome,
      moedas: user.moedas,
      dataCriacao: user.data_criacao.toLocaleDateString("pt-BR"),
      partidasGanhas: user.partidas_ganhas,
      partidasTotais: user.partidas_totais,
      avatarAtivo: user.avatar_ativo,
      fundoAtivo: user.fundo_ativo,
      baralhoAtivo: user.deck_ativo
    });

  } catch (erro) {
    console.error("Erro no login:", erro);
    res.status(500).json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};

export const cadastro = async (req: Request, res: Response): Promise<void> => {
  try {
    const { usuario, email, senha } = req.body;

    if (!usuario || !email || !senha) {
      res.status(400).json({ mensagem: "Todos os campos são obrigatórios." });
      return;
    }

    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!usernameRegex.test(usuario)) {
      res.status(400).json({ mensagem: "E-mail ou usuário inválido." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ mensagem: "E-mail ou usuário inválido." });
      return;
    }

    const senhaForteRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!senhaForteRegex.test(senha)) {
      res.status(400).json({
        mensagem: "Senha fraca, deve ter pelo menos 8 caracteres, tendo números e letras",
      });
      return;
    }

    const usuarioExistente = await prisma.usuario.findFirst({
      where: {
        OR: [
          { nome: usuario },
          { email: email }
        ]
      }
    });

    if (usuarioExistente) {
      res.status(400).json({ mensagem: "E-mail ou usuário já cadastrado." });
      return;
    }

    const senhaCriptografada = await criptografarString(senha);

    const novoUsuario = await prisma.usuario.create({
      data: {
        email,
        nome: usuario,
        senha: senhaCriptografada,
        moedas: 0,
        partidas_ganhas: 0,
        partidas_totais: 0,
        avatar_ativo: 0,
        fundo_ativo: 0,
        deck_ativo: 0,
        status: StatusUsuario.offline,
        cargo: CargoUsuario.jogador
      }
    });

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso.",
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      dataCriacao: novoUsuario.data_criacao.toLocaleDateString("pt-BR")
    });

  } catch (erro) {
    console.error("Erro no cadastro:", erro);
    res.status(500).json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};
