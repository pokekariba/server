import { Router } from "express";
import listarRoutes from "./listarRoutes";

const router = Router();
router.get('/exemplo',(req,resp) => {
    resp.send('Você entrou no Backoffice');
});

router.use(listarRoutes);

export default router;