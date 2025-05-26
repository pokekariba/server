// src/routes/protegidas.ts

import { Router } from "express";
import { autenticador } from "../middleware/autenticador.middleware";
import backofficeRoutes from './backofficeRoutes';
import comprarRoutes from "./comprarRoutes";
import listarRoutes from "./listarRoutes";
import lojaRoutes from './lojaRoutes';
const router = Router();

router.use('/backoffice',backofficeRoutes);
router.use(comprarRoutes);
router.use("/loja", lojaRoutes);

router.use("/backoffice", autenticador, backofficeRoutes);

export default router;
