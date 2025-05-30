import { Request, Response } from "express";
import { uploadParaCloudinary } from "../config/cloudinary.config";
import { prisma } from "../config/prisma.config";
import { gerarNomeImagem, sanitizarImagem } from "../utils/imageUtil";
import cloudinary from "../config/cloudinary.config";

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

export const visualizarItem = async (req: Request, res: Response): Promise<void> => {
  const { itemId } = req.body;

  if (typeof itemId !== "number") {
    res.status(400).json({ mensagem: "itemId inválido" });
    return;
  }

  try {
    const resultado = await cloudinary.search
      .expression(`public_id:itens/${itemId}/item_${itemId}*`)
      .sort_by("created_at", "desc")
      .max_results(30)
      .execute();

    const urlsItem = resultado.resources.map((img: any) => img.secure_url);

    res.status(200).json({ urlsItem });
  } catch (error) {
    console.error("Erro ao buscar imagens no Cloudinary:", error);
    res.status(500).json({ mensagem: "Erro interno tente novamente mais tarde." });
  }
};