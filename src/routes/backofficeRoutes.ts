import { Router } from "express";

const router = Router();
router.get('/exemplo',(req,resp) => {
    resp.send('Você entrou no Backoffice');
});
export default router;
