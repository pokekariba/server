import { Router } from "express";
import { visualizarItem } from "../controllers/imageController";
import { moedas } from "../controllers/moedasController";
import { comprarItem } from "../controllers/comprarController";

const lojaRoutes = Router();

lojaRoutes.post("/comprar-item", comprarItem);
lojaRoutes.post("/comprar-moedas", moedas);
lojaRoutes.post("/visualizar-item", visualizarItem);

export default lojaRoutes;