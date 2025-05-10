import bcrypt from "bcrypt";

const SALT_ROUNDS = 12;

export async function criptografarString(senha: string): Promise<string> {
  return await bcrypt.hash(senha, SALT_ROUNDS);
}

export async function compararString(
  senha: string,
  hash: string
): Promise<boolean> {
  return await bcrypt.compare(senha, hash);
}
