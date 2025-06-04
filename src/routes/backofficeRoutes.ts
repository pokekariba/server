import { Router } from "express";
import {
  adicionarItem,
  editarItem,
  listarItens,
} from "../controllers/itemController";
import { banirUsuario, listarUsuarios } from "../controllers/usuarioController";
import multer from "multer";
import { adicionarImagemItem } from "../controllers/imageController";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/loja", listarItens);
router.post("/banir-usuario", banirUsuario);
router.post("/adicionar-item", adicionarItem);
router.put("/editar-item", editarItem);
router.post(
  "/adicionar-imagem-item",
  upload.array("imagens", 10),
  adicionarImagemItem
);
router.post("/usuarios", listarUsuarios);

export default router;
