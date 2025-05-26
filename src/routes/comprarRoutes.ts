import { Router } from "express";
import { comprarItem } from "../controllers/comprarController";

const router = Router();

router.post("/comprar-item", comprarItem);

export default router;
