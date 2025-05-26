import sharp from "sharp";

export const gerarNomeImagem = (itemId: number, index: number): string => {
  return `item_${itemId}_${Date.now()}_${index}`;
};

export const sanitizarImagem = async (buffer: Buffer): Promise<Buffer> => {
  return await sharp(buffer)
    .rotate()
    .webp({
      quality: 100,
      alphaQuality: 100,
      lossless: true,
    })
    .toBuffer();
};
