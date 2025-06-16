/*
  Warnings:

  - You are about to drop the `Carta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Carta" DROP CONSTRAINT "Carta_jogador_partida_id_fkey";

-- DropForeignKey
ALTER TABLE "Carta" DROP CONSTRAINT "Carta_partida_id_fkey";

-- DropTable
DROP TABLE "Carta";

-- DropEnum
DROP TYPE "TipoCarta";
