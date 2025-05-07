import http from "http";
import app from "./app";
import { env } from "./config/env";
const server = http.createServer(app);
server.listen(env.port, () => {
  console.log(`Servidor rodando na porta ${env.port}`);
});
