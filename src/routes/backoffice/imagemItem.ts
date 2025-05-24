import { Router } from "express";
import multer from "multer";
import { adicionarImagemItemController } from "../../controllers/backoffice/adicionarImagemItem";

const router = Router();
const upload = multer(); // Para lidar com FormData

router.post(
  "/backoffice/adicionar-imagem-item",
  upload.array("imagens"),
  adicionarImagemItemController
);

export default router;
