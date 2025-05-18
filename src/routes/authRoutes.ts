import { Router } from "express";
import { login } from "../controllers/authController";
<<<<<<< Updated upstream

const authRoutes = Router();
authRoutes.post('/login',login);
=======
import { cadastro } from "../controllers/authController";
import { recuperarSenha  } from "../controllers/authController";

const authRoutes = Router();
authRoutes.post('/login',login);
authRoutes.post('/cadastro',cadastro);
authRoutes.post('/recuperar-senha', recuperarSenha);

>>>>>>> Stashed changes
export default authRoutes;