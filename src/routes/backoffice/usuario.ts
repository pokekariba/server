import { Router } from "express";
import { listarUsuariosController } from "../../controllers/backoffice/listarUsuarios";

const router = Router();

router.post("/backoffice/usuarios", listarUsuariosController);

export default router;
