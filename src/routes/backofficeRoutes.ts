import { Router } from "express";
import listarRoutes from "./listarRoutes";
import { editarItemLoja } from "../controllers/editarController";
import { adicionarItem } from "../controllers/itemController";
import { banirUsuario } from "../controllers/usuarioController";
import { loginBackoffice } from "../controllers/authController";

const router = Router();

router.use(listarRoutes);
router.post('/banir-usuario', banirUsuario);
router.post('/adicionar-item',adicionarItem);
router.put("/editar-item", editarItemLoja);

export default router;
