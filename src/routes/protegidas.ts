// src/routes/protegidas.ts

import { Router } from "express";
import { autenticador } from "../middleware/autenticador.middleware";

const router = Router();

// Rota protegida por JWT
router.get("/rota-protegida", autenticador, (req, res) => {
  res.json({ mensagem: "Acesso liberado! Token válido." });
});

// Rota protegida apenas para administradores
router.get("/backoffice/dashboard", autenticador, (req, res) => {
  res.json({ mensagem: "Área administrativa acessada com sucesso!" });
});

export default router;
