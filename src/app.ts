import helloRoutes from "./routes/hello";
import protegidasRoutes from "./routes/protegidas"; // protegidas
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use(helloRoutes);
app.use("/api", protegidasRoutes); // protegidas
export default app;
import imagemItemRoutes from "./routes/backoffice/imagemItem";
app.use(imagemItemRoutes);
import usuarioRoutes from "./routes/backoffice/usuario";

app.use(usuarioRoutes);
