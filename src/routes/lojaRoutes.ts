import { Router } from "express";
import { moedas } from "../controllers/moedasController";
import { comprarItem } from "../controllers/comprarController";

const lojaRoutes = Router();

lojaRoutes.post("/comprar-item", comprarItem);

lojaRoutes.post("/comprar-moedas", moedas);

export default lojaRoutes;
