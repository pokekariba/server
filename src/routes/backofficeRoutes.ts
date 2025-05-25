import { Router } from "express";
import listarRoutes from "./listarRoutes";
import { editarItemLoja } from "../controllers/editarController";

const router = Router();
router.get('/exemplo',(req,resp) => {
    resp.send('Você entrou no Backoffice');
});

router.use(listarRoutes);

router.put("/editar-item", editarItemLoja);

export default router;