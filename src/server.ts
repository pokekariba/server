import http from "http";
import app from "./app";
import { env } from "./config/env";
import { setupSocketIO } from "./socket";
const server = http.createServer(app);
import prisma from "./config/prisma.config";
import { StatusPartida, StatusUsuario } from "@prisma/client";
setupSocketIO(server);

server.listen(env.port, async () => {
  const partidasParaDeletar = await prisma.partida.findMany({
    where: {
      NOT: { status: StatusPartida.finalizado },
    },
    select: { id: true },
  });

  const ids = partidasParaDeletar.map((p) => p.id);

  await prisma.$transaction([
    prisma.usuario.updateMany({
      where: {
        status: StatusUsuario.em_partida,
      },
      data: {
        status: StatusUsuario.offline,
      },
    }),
    prisma.jogadorPartida.deleteMany({
      where: {
        partida_id: { in: ids },
      },
    }),
    prisma.partida.deleteMany({
      where: {
        id: { in: ids },
      },
    }),
  ]);
  console.log(`Servidor rodando na porta ${env.port}`);
});
