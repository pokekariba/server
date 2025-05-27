export interface TokenPayload {
  id: string;
  tipo: "access" | "reset";
  exp?: number;
  iat?: number;
}
