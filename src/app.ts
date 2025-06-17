import express from "express";
import protegidas from "./routes/protegidas";
import { autenticador } from "./middleware/autenticador.middleware";
import authRoutes from "./routes/authRoutes";
import path from "path";
import cors from "cors";

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
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use("/logged", autenticador, protegidas);
app.use(authRoutes);

export default app;
