import { Router } from "express";
import { login } from "../controllers/authController";
import { cadastro } from "../controllers/authController";

const authRoutes = Router();
authRoutes.post('/login',login);
authRoutes.post('/cadastro',cadastro);
export default authRoutes;