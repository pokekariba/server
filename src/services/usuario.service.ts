import { StatusUsuario, Usuario } from "@prisma/client";
import prisma from "../config/prisma.config";

const usuarioService = {
  mudarStatusUsuario: async (
    idUsuario: string,
    status: StatusUsuario
  ): Promise<Usuario> => {
    const usuario = await prisma.usuario.update({
      where: { id: Number(idUsuario) },
      data: { status },
    });

    return usuario;
  },
};

export default usuarioService;
