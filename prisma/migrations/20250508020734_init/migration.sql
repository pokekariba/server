-- CreateEnum
CREATE TYPE "StatusUsuario" AS ENUM ('online', 'em_partida', 'offline', 'banido');

-- CreateEnum
CREATE TYPE "CargoUsuario" AS ENUM ('adm', 'jogador');

-- CreateEnum
CREATE TYPE "StatusPartida" AS ENUM ('em_espera', 'em_andamento', 'finalizado');

-- CreateEnum
CREATE TYPE "TipoItemLoja" AS ENUM ('deck', 'avatar', 'fundo');

-- CreateEnum
CREATE TYPE "DisponibilidadeItem" AS ENUM ('disponivel', 'indisponivel');

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "moedas" INTEGER NOT NULL DEFAULT 0,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "partidas_ganhas" INTEGER NOT NULL DEFAULT 0,
    "partidas_totais" INTEGER NOT NULL DEFAULT 0,
    "avatar_ativo" INTEGER NOT NULL,
    "fundo_ativo" INTEGER NOT NULL,
    "deck_ativo" INTEGER NOT NULL,
    "status" "StatusUsuario" NOT NULL,
    "cargo" "CargoUsuario" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partida" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "status" "StatusPartida" NOT NULL,
    "vagas" INTEGER NOT NULL DEFAULT 1,
    "senha" TEXT,

    CONSTRAINT "Partida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JogadorPartida" (
    "id" SERIAL NOT NULL,
    "partida_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "ordem_jogada" INTEGER NOT NULL,
    "pontuacao" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "JogadorPartida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carta" (
    "id" SERIAL NOT NULL,
    "partida_id" INTEGER NOT NULL,
    "jogador_partida_id" INTEGER,
    "valor" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "Carta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemLoja" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" "TipoItemLoja" NOT NULL,
    "disponibilidade" "DisponibilidadeItem" NOT NULL,
    "preco" INTEGER NOT NULL,

    CONSTRAINT "ItemLoja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemUsuario" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "item_loja_id" INTEGER NOT NULL,

    CONSTRAINT "ItemUsuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "JogadorPartida" ADD CONSTRAINT "JogadorPartida_partida_id_fkey" FOREIGN KEY ("partida_id") REFERENCES "Partida"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JogadorPartida" ADD CONSTRAINT "JogadorPartida_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carta" ADD CONSTRAINT "Carta_partida_id_fkey" FOREIGN KEY ("partida_id") REFERENCES "Partida"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carta" ADD CONSTRAINT "Carta_jogador_partida_id_fkey" FOREIGN KEY ("jogador_partida_id") REFERENCES "JogadorPartida"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemUsuario" ADD CONSTRAINT "ItemUsuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemUsuario" ADD CONSTRAINT "ItemUsuario_item_loja_id_fkey" FOREIGN KEY ("item_loja_id") REFERENCES "ItemLoja"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
