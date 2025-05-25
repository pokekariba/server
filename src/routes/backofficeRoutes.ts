import { Router } from "express";
import { adicionarItem } from "../controllers/itemController";
import { banirUsuario } from "../controllers/usuarioController";
import { loginBackoffice } from "../controllers/authController";

const router = Router();

router.get('/exemplo', (req, resp) => {
  resp.send('Você entrou no Backoffice');
});


router.post('/adicionar-item',adicionarItem);
router.post('/banir-usuario', banirUsuario);
router.post('/login-backoffice', loginBackoffice);

export default router;
