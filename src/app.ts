import express from "express";
import protegidas from "./routes/protegidas";
import { autenticador } from "./middleware/autenticador.middleware";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }

  next();
});
app.use(express.json());
app.use("/logged", autenticador, protegidas);
app.use(authRoutes);

export default app;
