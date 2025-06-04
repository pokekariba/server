import { Router } from "express";
import { visualizarItem } from "../controllers/imageController";
import { moedas } from "../controllers/moedasController";
import { comprarItemLoja, listaItemLoja } from "../controllers/lojaController";

const lojaRoutes = Router();

lojaRoutes.post("/comprar-item", comprarItemLoja);
lojaRoutes.post("/comprar-moedas", moedas);
lojaRoutes.post("/visualizar-item", visualizarItem);
lojaRoutes.get("/loja", listaItemLoja);

export default lojaRoutes;
