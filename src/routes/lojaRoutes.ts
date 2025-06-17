import { Router } from "express";
import { visualizarItem } from "../controllers/imageController";
import { moedas } from "../controllers/moedasController";
import { comprarItemLoja, listaItemLoja } from "../controllers/lojaController";
import { equiparItem } from "../controllers/itemController";

const lojaRoutes = Router();

lojaRoutes.post("/comprar-item", comprarItemLoja);
lojaRoutes.post("/comprar-moedas", moedas);
lojaRoutes.post("/selecionar-item", equiparItem);
lojaRoutes.post("/visualizar-item", visualizarItem);
lojaRoutes.get("/loja", listaItemLoja);

export default lojaRoutes;
