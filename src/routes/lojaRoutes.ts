import { Router } from "express";
import { moedas } from "../controllers/moedasController";

const lojaRoutes = Router();

lojaRoutes.post("/comprar-moedas", moedas);

export default lojaRoutes;
