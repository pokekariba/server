import { Router } from "express";
import listarRoutes from "./listarRoutes";
import { adicionarItem } from "../controllers/itemController";

const router = Router();

router.use(listarRoutes);
router.post('/adicionar-item',adicionarItem);

export default router;
