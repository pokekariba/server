import { Router } from "express";
import listarRoutes from "./listarRoutes";
import { editarItemLoja } from "../controllers/editarController";
import { adicionarItem } from "../controllers/itemController";

const router = Router();

router.use(listarRoutes);
router.post('/adicionar-item',adicionarItem);
router.put("/editar-item", editarItemLoja);

export default router;
