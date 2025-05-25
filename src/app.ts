import helloRoutes from "./routes/hello";
import express from "express";
import cors from "cors";
import protegidas from "./routes/protegidas";
import { autenticador } from "./middleware/autenticador.middleware";
import authRoutes from "./routes/authRoutes";


const app = express();
app.use(cors());
app.use(express.json());
app.use(helloRoutes);
app.use('/jogo',autenticador,protegidas);
app.use(authRoutes);

export default app;
