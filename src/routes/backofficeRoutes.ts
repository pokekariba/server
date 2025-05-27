import { Router } from "express";
import { editarItemLoja } from "../controllers/editarController";
import { adicionarItem } from "../controllers/itemController";
import { banirUsuario, listarUsuarios } from "../controllers/usuarioController";
import { listarItensLoja } from "../controllers/listarController";
import multer from "multer";
import { adicionarImagemItem } from "../controllers/imageController";

const router = Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/loja", listarItensLoja);
router.post("/banir-usuario", banirUsuario);
router.post("/adicionar-item", adicionarItem);
router.put("/editar-item", editarItemLoja);
router.post(
  "/adicionar-imagem-item",
  upload.array("imagens", 10),
  adicionarImagemItem
);
router.post("/usuarios", listarUsuarios);

export default router;
