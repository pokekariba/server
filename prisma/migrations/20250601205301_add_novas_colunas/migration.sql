/*
  Warnings:

  - You are about to drop the column `quantidade` on the `Carta` table. All the data in the column will be lost.
  - Added the required column `posicao` to the `Carta` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tipo` on the `Carta` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `criador_id` to the `Partida` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoCarta" AS ENUM ('mao', 'mesa', 'baralho', 'capturado');

-- AlterTable
ALTER TABLE "Carta" DROP COLUMN "quantidade",
ADD COLUMN     "posicao" INTEGER NOT NULL,
DROP COLUMN "tipo",
ADD COLUMN     "tipo" "TipoCarta" NOT NULL;

-- AlterTable
ALTER TABLE "Partida" ADD COLUMN     "criador_id" INTEGER NOT NULL,
ADD COLUMN     "ganhador_id" INTEGER,
ALTER COLUMN "data_fim" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_criador_id_fkey" FOREIGN KEY ("criador_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Partida" ADD CONSTRAINT "Partida_ganhador_id_fkey" FOREIGN KEY ("ganhador_id") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
