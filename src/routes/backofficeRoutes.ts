import { Router } from "express";
import { adicionarItem } from "../controllers/itemController";
import { autenticador } from "../middleware/autenticador.middleware";  // importa o middleware

const router = Router();

router.get('/exemplo', (req, resp) => {
  resp.send('Você entrou no Backoffice');
});

// Rota protegida: o middleware autenticador vai executar antes do controlador
router.post('/adicionar-item', autenticador, adicionarItem);

export default router;
