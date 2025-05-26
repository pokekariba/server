import { Router } from "express";
import { listarItensLoja } from "../controllers/listarController";

const router = Router();
router.post("/loja", listarItensLoja);

export default router;
