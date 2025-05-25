import { Router } from "express";
import { adicionarItem } from "../controllers/itemController";

const router = Router();

router.get('/exemplo', (req, resp) => {
  resp.send('Você entrou no Backoffice');
});

// Rota protegida: o middleware autenticador vai executar antes do controlador
router.post('/adicionar-item',adicionarItem);

export default router;
