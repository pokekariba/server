import { Router } from "express";
import { adicionarItem } from "../controllers/itemController";
import { banirUsuario } from "../controllers/usuarioController";

const router = Router();

router.get('/exemplo', (req, resp) => {
  resp.send('Você entrou no Backoffice');
});


router.post('/adicionar-item',adicionarItem);
router.post('/banir-usuario', banirUsuario);

export default router;
