import { Request, Response } from "express";
import crypto from "crypto";
import { cloudinary } from "../../mocks/cloudinaryMock"; // usar mock
import { findItemById } from "../../mocks/itemMock"; // usar mock

export const adicionarImagemItemController = async (
  req: Request,
  res: Response
) => {
  try {
    const { idItem } = req.body;
    const files = req.files as Express.Multer.File[];

    const item = await findItemById(Number(idItem));
    if (!item) {
      return res.status(404).json({ message: "Item não encontrado." });
    }

    const urls = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file.mimetype !== "image/png") {
        return res
          .status(400)
          .json({ message: "Imagens com formato inválido." });
      }

      const hash = crypto
        .createHash("md5")
        .update(`${item.tipo}-${item.id}-${i}`)
        .digest("hex");
      const filename = `${hash}.png`;

      // Simula upload no mock
      const uploadResult = await new Promise((resolve) => {
        cloudinary.uploader.upload_stream({}, (err: any, result: any) => {
          resolve({ url: `https://fake.cloudinary.com/${filename}` });
        });
      });

      urls.push((uploadResult as any).url);
    }

    return res
      .status(200)
      .json({ message: "Upload realizado com sucesso", urls });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro interno, tente novamente mais tarde." });
  }
};
