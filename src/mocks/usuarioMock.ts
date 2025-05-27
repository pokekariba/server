interface Usuario {
  id: number;
  email: string;
  nome: string;
  status: string;
}

const usuariosMock: Usuario[] = [
  { id: 1, email: "joao@example.com", nome: "João", status: "ativo" },
  { id: 2, email: "maria@example.com", nome: "Maria", status: "inativo" },
  { id: 3, email: "jose@example.com", nome: "José", status: "ativo" },
];

export const listarUsuarios = async (
  nome: string,
  email: string
): Promise<Usuario[]> => {
  return usuariosMock.filter(
    (usuario) =>
      usuario.nome.toLowerCase().includes(nome.toLowerCase()) &&
      usuario.email.toLowerCase().includes(email.toLowerCase())
  );
};
