import app from "./app";

console.log("[LOG] Servidor iniciado");

const PORT = process.env.PORT || 3000;

const port = Number(process.env.PORT) || 5000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor rodando na porta ${port}`);
});