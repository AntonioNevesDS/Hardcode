/*
O objetivo é desenvolver uma API que permita cadastrar, listar, alterar ou deletar funcionários,
usando dados armazenados em um array.

1. Listas funcionários ( GET ) que retorna todos os funcionários castrados.
2. Cadastrar funcionários ( POST ) criar uma rota que recebe um JSON e adicioná lo ao array
3. Atualizar funcionário ( PUT ) criar uma rota que permite atualizar os dados de um funcionarios
4. Remover funcionário ( DELETE ) criar uma rota para remover um funcionário do array
*/

import express from "express"; // Importa o framework Express

const app = express(); // Cria uma instância do Express

const PORT = 3000; //porta onde o servidor irá rodar

app.use(express.json());//função para interpretar o corpo das requisições como JSON

let tarefas = [
  { id: 1, titulo: "Estudar JavaScript" },
  { id: 2, titulo: "Fazer exercícios de lógica" },
];//banco de dados local

app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});//rota para listar as tarefas

app.post("/tarefas", (req, res) => {
  const novaTarefa = req.body;
  novaTarefa.id = tarefas.length + 1;
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});//insere uma nova tarefa

app.put("/tarefas/:id", (req, res) => {
  const id = parsenInt(req.paraams.id);
  const index = tarefas.findIndex((t) => t.id === id);
  if (index !== -1) {
    tarefas[index] = { id, ...req.body, id };
    res.json(tarefas[index]);
  } else {
    res.status(404).json({ mensagem: "Tarefa não encontrada" });
  }
});//atualiza uma tarefa existente

app.delete("/tarefas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tarefas = tarefas.filter((t) => t.id !== id);
  res.json({ mensagem: "Tarefa removida com sucesso" });
});//remove uma tarefa

//inicia o servidor na porta definida
app.listen(PORT, () =>
  console.log('Servidor rodando em http://localhost:${PORT}')); //callback para verificar se o servidor está rodando
