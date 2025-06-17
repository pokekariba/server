import { Request, Response } from "express";
import prisma from "../config/prisma.config";
import { gerarNomeImagem, sanitizarImagem } from "../utils/imageUtil";
import path from "path";
import fs from "fs/promises";
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
    const folderPath = path.join(
      __dirname,
      "../public/images/itens",
      idItem.toString()
    );

    await fs.mkdir(folderPath, { recursive: true });

    await Promise.all(
      files.map(async (file) => {
        const bufferSanitizado = await sanitizarImagem(file.buffer);
        const nome = gerarNomeImagem(idItem, file.originalname);
        const filePath = path.join(folderPath, nome);
        await fs.writeFile(filePath, bufferSanitizado);
      })
    );
    res.status(201).json({ message: "Imagens salvas com sucesso!" });
  } catch (err) {
    console.error("Erro ao salvar arquivos:", err);
    res.status(500).json({ message: "Erro ao salvar imagens." });
  }
};

// export const visualizarItem = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { itemId } = req.body;

//   if (typeof itemId !== "number") {
//     res.status(400).json({ mensagem: "itemId inválido" });
//     return;
//   }

//   try {
//     const folderPath = path.join(
//       __dirname,
//       "../public/images/itens",
//       itemId.toString()
//     );

//     try {
//       await fs.access(folderPath);
//     } catch {
//       res.status(200).json({ urlsItem: [] });
//       return;
//     }

//     const files = await fs.readdir(folderPath);

//     const baseUrl = `${req.protocol}://${req.get("host")}`;
//     const urlsItem = files.map(
//       (fileName) => `${baseUrl}/images/itens/${itemId}/${fileName}`
//     );

//     res.status(200).json({ urlsItem });
//   } catch (error) {
//     console.error("Erro ao buscar imagens localmente:", error);
//     res
//       .status(500)
//       .json({ mensagem: "Erro interno tente novamente mais tarde." });
//   }
// };

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