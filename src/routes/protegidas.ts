// src/routes/protegidas.ts

import { Router } from "express";
import { autenticador } from "../middleware/autenticador.middleware";
import backofficeRoutes from './backofficeRoutes';
import lojaRoutes from './lojaRoutes';
const router = Router();

// Rota protegida por JWT
router.get("/rota-protegida", autenticador, (req, res) => {
  res.json({ mensagem: "Acesso liberado! Token válido." });
});

// Rota protegida apenas para administradores
router.use('/backoffice',backofficeRoutes);

//Rota protegida loja
router.use("/loja", lojaRoutes);

export default router;
