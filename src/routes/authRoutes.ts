import { Router } from "express";
import {
  login,
  cadastro,
  recuperarSenha,
  redefinirSenha,
  loginBackoffice,
} from "../controllers/authController";

const authRoutes = Router();

authRoutes.post("/login", login);
authRoutes.post("/login-backoffice", loginBackoffice);
authRoutes.post("/cadastro", cadastro);
authRoutes.post("/recuperar-senha", recuperarSenha);
authRoutes.put("/redefinir-senha", redefinirSenha);

export default authRoutes;
