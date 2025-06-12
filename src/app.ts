import express from "express";
import cors from "cors";
import path from "path";
import { AppDataSource } from "./config/db.datasource";
import { usuarioRotas } from "./routes/usuario.routes";
import { permissaoRotas } from "./routes/permissao.route";


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', usuarioRotas);
app.use('/api', permissaoRotas);


app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

AppDataSource.initialize()
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((error) => {
    console.error("Erro ao conectar no banco de dados:", error);
  });

export default app;