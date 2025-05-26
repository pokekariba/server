import { Router } from "express";
import listarRoutes from "./listarRoutes";
import { editarItemLoja } from "../controllers/editarController";
import { adicionarItem } from "../controllers/itemController";
import { banirUsuario } from "../controllers/usuarioController";

const router = Router();

router.post('/banir-usuario', banirUsuario);
router.post('/adicionar-item',adicionarItem);
router.put("/editar-item", editarItemLoja);

export default router;
