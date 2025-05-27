import { Router } from "express";
import backofficeRoutes from "./backofficeRoutes";
import lojaRoutes from "./lojaRoutes";
const router = Router();

router.use("/backoffice", backofficeRoutes);
router.use(lojaRoutes);

export default router;
