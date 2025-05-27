import { Request, Response } from "express";
import { uploadParaCloudinary } from "../config/cloudinary.config";
import { PrismaClient } from "@prisma/client";
import { gerarNomeImagem, sanitizarImagem } from "../utils/imageUtil";

const prisma = new PrismaClient();

export const adicionarImagemItem = async (req: Request, res: Response) => {
  const { idItem } = req.body;
  const files = req.files as Express.Multer.File[];

  if (!files || files.length === 0) {
    res.status(400).json({ message: "Nenhuma imagem enviada." });
    return;
  }

  const item = await prisma.itemLoja.findUnique({
    where: { id: +idItem },
  });

  if (!item) {
    res.status(404).json({ message: "Item não encontrado." });
    return;
  }

  try {
    const uploadPromises = files.map(async (file, index) => {
      const bufferSanitizado = await sanitizarImagem(file.buffer);
      const nome = gerarNomeImagem(idItem, index);
      const folder = "itens/" + idItem;
      return uploadParaCloudinary(bufferSanitizado, folder, nome);
    });

    const imageUrls = await Promise.all(uploadPromises);

    res.status(201).json({ imagens: imageUrls });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao processar imagens" });
  }
};
