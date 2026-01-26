let alunos = [];//armazena os nomes

function adicionarAluno(nome) {
  alunos.push(nome);
  console.log("Aluno " + nome + "adicionado com sucesso!");//adiciona o nome ao array
}

function listarAlunos() {
  console.log("Lista de Alunos: ");//exibe a lista de nomes

  if (alunos.length === 0) {
    console.log("Nenhum aluno cadastrado.");
    return;//verifica se o array está vazio
 }
}

for (let i = 0; i < listarAlunos.length; i++) {
  console.log((i + 1) + "" + alunos[i]);
 }//exibe a lista de nomes da lista seguindo a ordem do array

//teste
adicionarAluno("Mariana");
adicionarAluno("João");
adicionarAluno("Alice");

listarAlunos();