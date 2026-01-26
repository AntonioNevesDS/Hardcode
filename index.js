import path from "path";

import express from "express";
import mysql from "mysql2/promise";

const app = express();
const PORT = 3000;

app.use(express.json());

// CONEXÃO COM O BANCO
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "tarefas_db",
});

app.use(express.static("public"));

// ROTAS
app.get("/tarefas", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM tarefas");
  res.json(rows);
});

app.post("/tarefas", async (req, res) => {
  const { titulo } = req.body;

  if (!titulo) {
    return res.status(400).json({ mensagem: "Título é obrigatório" });
  }

  const [result] = await pool.query("INSERT INTO tarefas (titulo) VALUES (?)", [
    titulo,
  ]);

  res.status(201).json({
    id: result.insertId,
    titulo,
  });
});

app.put("/tarefas/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { titulo } = req.body;

  const [result] = await pool.query(
    "UPDATE tarefas SET titulo = ? WHERE id = ?",
    [titulo, id],
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({ mensagem: "Tarefa não encontrada" });
  }

  res.json({ id, titulo });
});

app.delete("/tarefas/:id", async (req, res) => {
  const id = Number(req.params.id);

  const [result] = await pool.query("DELETE FROM tarefas WHERE id = ?", [id]);

  res.json({ mensagem: "Tarefa removida com sucesso" });
});

// INICIA O SERVIDOR
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
