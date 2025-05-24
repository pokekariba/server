import helloRoutes from "./routes/hello";
import express from "express";
import cors from "cors";
import protegidas from "./routes/protegidas";
import { autenticador } from "./middleware/autenticador.middleware";
import authRoutes from "./routes/authRoutes";
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // responde o preflight diretamente
  }

  next();
});
app.use(express.json());
app.use(helloRoutes);
app.use('/jogo',autenticador,protegidas);
app.use(authRoutes);
export default app;
