import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { gerarAccessToken } from "../utils/jwt";
import { compararString } from "../utils/criptografia";

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
    res.setHeader('Access-Control-Expose-Headers', 'Authorization');
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

export const loginBackoffice = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = res.locals.usuario;
    const { senha } = req.body;

    if (!user) {
      res.status(404).json({ mensagem: "Usuário inexistente ou credenciais incorretas." });
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
      res.status(404).json({ mensagem: "Usuário inexistente ou credenciais incorretas." });
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
    res.setHeader('Access-Control-Expose-Headers', 'Authorization');
    res.setHeader("Authorization", `Bearer ${token}`);

    
    res.sendStatus(200);

  } catch (erro) {
    console.error("Erro no login backoffice:", erro);
    res.status(500).json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};
