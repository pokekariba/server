import http from "http";
import app from "./app";
import { env } from "./config/env";
import { setupSocketIO } from "./socket";
const server = http.createServer(app);

setupSocketIO(server);

server.listen(env.port, () => {
  console.log(`Servidor rodando na porta ${env.port}`);
});
