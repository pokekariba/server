import { CargoUsuario, StatusUsuario, Usuario } from "@prisma/client";
import prisma from "../config/prisma.config";
import { Socket } from "socket.io";

const usuarioService = {
  mudarStatusUsuario: async (
    status: StatusUsuario,
    id: number,
    socket?: Socket
  ): Promise<Usuario> => {
    const usuario = await prisma.usuario.update({
      where: { id },
      data: { status },
    });
    if (socket) {
      socket.data.usuario = usuario;
    }
    return usuario;
  },
  buscarUsuario: async ({
    id,
    nome,
    email,
    operador = "and",
  }: {
    id?: number;
    nome?: string;
    email?: string;
    operador?: "and" | "or";
  }): Promise<Usuario | null> => {
    const conditions = [];

    if (id !== undefined) {
      conditions.push({ id });
    }

    if (nome) {
      conditions.push({ nome });
    }

    if (email) {
      conditions.push({ email });
    }

    if (conditions.length === 0) {
      return null;
    }

    const where = operador === "or" ? { OR: conditions } : { AND: conditions };

    return await prisma.usuario.findFirst({ where });
  },
  criarUsuario: async (
    email: string,
    nome: string,
    senha: string
  ): Promise<Usuario> => {
    return await prisma.usuario.create({
      data: {
        email,
        nome,
        senha,
        moedas: 0,
        partidas_ganhas: 0,
        partidas_totais: 0,
        avatar_ativo: 0,
        fundo_ativo: 0,
        avatar_variante: 0,
        deck_ativo: 0,
        status: StatusUsuario.offline,
        cargo: CargoUsuario.jogador,
      },
    });
  },
  atualizarSenha: async (id: number, senha: string) => {
    return await prisma.usuario.update({
      where: { id },
      data: { senha },
    });
  },
  listarUsuarios: async (nome: string, email: string) => {
    return await prisma.usuario.findMany({
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
  },
};

export default usuarioService;
