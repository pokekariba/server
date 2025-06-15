import sharp from "sharp";

export const gerarNomeImagem = (itemId: number, nome: string): string => {
  return `item_${itemId}_${nome}`;
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
