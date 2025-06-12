import express from "express";
import cors from "cors";
import path from "path";
import { AppDataSource } from "./config/db.datasource";
import { usuarioRotas } from "./routes/usuario.routes";
import { permissaoRotas } from "./routes/permissao.routes";
import { enderecoRotas } from "./routes/endereco.routes";
import { produtoRotas } from "./routes/produto.routes";
import { adicionalRotas } from "./routes/adicional.routes";
import { statusPedidoRotas } from "./routes/statuspedido.routes";
import { metodoPagamentoRotas } from "./routes/metodopagamento.routes";
import { cupomRotas } from "./routes/cupom.routes";
import { pedidoRotas } from "./routes/pedido.routes";
import { pedidoItemRotas } from "./routes/pedidoitem.routes";
import { pedidoItemAdicionalRotas } from "./routes/pedidoitemadicional.routes";


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', usuarioRotas);
app.use('/api', permissaoRotas);
app.use('/api', enderecoRotas);
app.use('/api', produtoRotas);
app.use('/api', adicionalRotas);
app.use('/api', statusPedidoRotas);
app.use('/api', metodoPagamentoRotas);
app.use('/api', cupomRotas);
app.use('/api', pedidoRotas);
app.use('/api', pedidoItemRotas);
app.use('/api', pedidoItemAdicionalRotas);


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