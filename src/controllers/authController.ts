import { Request, Response } from "express";
import {
  gerarAccessToken,
  gerarPasswordResetToken,
  verificarToken,
} from "../utils/jwt";
import { compararString, criptografarString } from "../utils/criptografia";
import nodemailer from "nodemailer";
import { StatusUsuario, CargoUsuario } from "../@types/usuarioTypes";
import { prisma } from "../config/prisma.config";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { usuario, senha } = req.body;

    const user = await prisma.usuario.findFirst({
      where: { nome: usuario },
    });

    if (!user) {
      res
        .status(404)
        .json({ mensagem: "Usuário inexistente ou credenciais incorretas." });
      return;
    }

    const senhaValida = await compararString(senha, user.senha);

    if (!senhaValida) {
      res
        .status(404)
        .json({ mensagem: "Usuário inexistente ou credenciais incorretas." });
      return;
    }

    if (user.status === StatusUsuario.banido) {
      res.status(403).json({ mensagem: "Usuário banido." });
      return;
    }

    const token = gerarAccessToken(user.id.toString());
    res.setHeader("Access-Control-Expose-Headers", "Authorization");
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
      baralhoAtivo: user.deck_ativo,
    });
  } catch (erro) {
    console.error("Erro no login:", erro);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};

export const loginBackoffice = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { usuario, senha } = req.body;

    const user = await prisma.usuario.findFirst({
      where: { nome: usuario },
    });

    if (!user) {
      res
        .status(404)
        .json({ mensagem: "Usuário inexistente ou credenciais incorretas." });
      return;
    }

    // Verifica se é administrador
    if (user.cargo !== "adm") {
      res.status(401).json({ mensagem: "Usuário não autorizado." });
      return;
    }

    // Verifica a senha com o hash do usuário já carregado
    const senhaValida = await compararString(senha, user.senha);
    if (!senhaValida) {
      res
        .status(404)
        .json({ mensagem: "Usuário inexistente ou credenciais incorretas." });
      return;
    }

    // Verifica se está banido
    if (user.status === "banido") {
      res.status(403).json({ mensagem: "Usuário banido." });
      return;
    }

    // Gera token JWT
    const token = gerarAccessToken(user.id.toString());

    // Configura o header da resposta
    res.setHeader("Access-Control-Expose-Headers", "Authorization");
    res.setHeader("Authorization", `Bearer ${token}`);
    res.sendStatus(200);
  } catch (erro) {
    console.error("Erro no login backoffice:", erro);
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

    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@.]+$/;

    if (!emailRegex.test(email)) {
      res.status(400).json({ mensagem: "E-mail ou usuário inválido." });
      return;
    }

    const senhaForteRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!senhaForteRegex.test(senha)) {
      res.status(400).json({
        mensagem:
          "Senha fraca, deve ter pelo menos 8 caracteres, tendo números e letras",
      });
      return;
    }

    const usuarioExistente = await prisma.usuario.findFirst({
      where: {
        OR: [{ nome: usuario }, { email: email }],
      },
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
        cargo: CargoUsuario.jogador,
      },
    });

    res.sendStatus(200);
  } catch (erro) {
    console.error("Erro no cadastro:", erro);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};
export const recuperarSenha = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { usuario, email } = req.body;

    if (!usuario || !email) {
      res.status(400).json({ mensagem: "Usuário e e-mail são obrigatórios." });
      return;
    }

    const user = await prisma.usuario.findFirst({
      where: { nome: usuario, email: email },
    });

    if (!user) {
      res.status(404).json({ mensagem: "Usuário inexistente." });
      return;
    }

    const token = gerarPasswordResetToken(user.id.toString());

    const link = `http://localhost:8080/redefinir-senha?token=${token}`;

    const transporter = nodemailer.createTransport({
      host: "smtp.seuprovedor.com", // configure seu servidor SMTP aqui
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: '"POKARIBA" <no-reply@seuapp.com>',
      to: email,
      subject: "Recuperação de Senha",
      html: `
        <h2>Recuperação de Senha</h2>
        <p>Clique no link abaixo para redefinir sua senha:</p>
        <a href="${link}">${link}</a>
        <p>Este link expira em 20 minutos.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ mensagem: "E-mail de recuperação enviado com sucesso." });
  } catch (erro) {
    console.error("Erro ao enviar e-mail de recuperação:", erro);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};

export const redefinirSenha = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tokenHeader = req.headers.authorization;

    if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
      res.status(403).json({ mensagem: "Token inválido ou expirado." });
      return;
    }

    const token = tokenHeader.split(" ")[1];

    let payload;
    try {
      payload = verificarToken(token);
    } catch (erro) {
      res.status(403).json({ mensagem: "Token inválido ou expirado." });
      return;
    }

    if (payload.tipo !== "reset") {
      res.status(403).json({ mensagem: "Token inválido ou expirado." });
      return;
    }

    const { usuario, novaSenha } = req.body;

    if (!usuario || !novaSenha) {
      res
        .status(400)
        .json({ mensagem: "Usuário e nova senha são obrigatórios." });
      return;
    }

    const senhaForteRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (!senhaForteRegex.test(novaSenha)) {
      res.status(400).json({
        mensagem:
          "Senha fraca, deve ter pelo menos 8 caracteres, tendo números e letras",
      });
      return;
    }

    const user = await prisma.usuario.findFirst({
      where: { nome: usuario },
    });

    if (!user) {
      res.status(404).json({ mensagem: "Usuário inexistente." });
      return;
    }

    const senhaCriptografada = await criptografarString(novaSenha);

    await prisma.usuario.update({
      where: { id: user.id },
      data: { senha: senhaCriptografada },
    });

    res.sendStatus(200);
  } catch (erro) {
    console.error("Erro ao redefinir senha:", erro);
    res
      .status(500)
      .json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};
