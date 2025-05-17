import { Request, Response } from "express";
import { PrismaClient } from "../generated/prisma";
import { gerarAccessToken } from "../utils/jwt";
import { compararString } from "../utils/criptografia";
import { criptografarString } from "../utils/criptografia";
import { StatusUsuario, CargoUsuario } from "../generated/prisma";


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

    if (user.status === "banido") {
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

    // Validar nome de usuário: sem espaços ou caracteres especiais
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    if (!usernameRegex.test(usuario)) {
      res.status(400).json({ mensagem: "E-mail ou usuário inválido." });
      return;
    }

    //  Validar e-mail com regex básica
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ mensagem: "E-mail ou usuário inválido." });
      return;
    }

    //  Validar senha forte: mínimo 8 caracteres com números e letras
    const senhaForteRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!senhaForteRegex.test(senha)) {
      res.status(400).json({
        mensagem: "Senha fraca, deve ter pelo menos 8 caracteres, tendo números e letras",
      });
      return;
    }

    //  Verifica se já existe nome ou e-mail
    const usuarioExistente = await prisma.usuario.findFirst({
      where: {
        OR: [
          { nome: usuario },
          { email: email }
        ]
      }
    });

    if (usuarioExistente) {
      res.status(400).json({ mensagem: "E-mail ou usuário inválido." });
      return;
    }

    //  Criptografa a senha
    const senhaCriptografada = await criptografarString(senha);

    //  Cria o usuário com valores padrão
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


    //  Responde com sucesso (sem retornar a senha)
    res.status(200).json({
      mensagem: "Usuário cadastrado com sucesso.",
      nome: novoUsuario.nome,
      email: novoUsuario.email,
      dataCriacao: novoUsuario.data_criacao.toLocaleDateString("pt-BR")
    });

  } catch (erro) {
    console.error("Erro no cadastro:", erro);
    res.status(500).json({ mensagem: "Erro interno tente novamente mais tarde.", erro });
  }
};

