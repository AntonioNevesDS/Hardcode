//array
let frutas = ["maçã", "banana", "laranja", "uva"];
console.log(frutas[0]);

//objeto
let pessoa = {
  nome: "Carlos",
  idade: 22,
  ativo: true,
};
console.log(pessoa.nome);
console.log(typeof pessoa.idade);

let num1 = 10;
let num2 = 10.0;

//teste operadores relacionais
if (num1 === num2) {
  console.log("Números iguais");
} else {
  console.log("Números diferentes");
}

//Estruturas condicionais
let idade = 12;

if (idade >= 18) {
  console.log("maior de idade");
} else if (idade >= 12) {
  console.log("adolescente");
} else {
  console.log("criança");
}

//teste swicth
let diaSemana = 3;
switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}

//laços de repetição
//for
for (let i = 1; i <= 5; i++) {
  console.log("Contagem: " + i);
}

//while
let contador = 1;
while (contador <= 5) {
  console.log("Contagem while : " + contador);
  contador++;
}

//for...of
var frutas2 = ["manga", "abacaxi", "morango"];
for (var frutas2 of frutas2) {
  console.log(frutas2);
}

//for...each
var frutas3 = ["kiwi", "pêssego", "cereja"];
frutas3.forEach(function (frutas3) {
  console.log(frutas3);
});

//função
function saudacaoo(nome) {
  console.log("Olá, seja bem-vindo!");
}

saudacaoo();

//parametros e retorno
function soma(a, b) {
  return a + b;
}

let resultado = soma(5, 3);
console.log(resultado);

/*
//metodos de array

//mutuadores
//métodos que alteram o array original
let frutas = ["Maçã", "Banana"];

// push: Adiciona ao final
frutas.push("Morango"); // ["Maçã", "Banana", "Morango"]

// pop: Remove o último elemento e o retorna
let ultimo = frutas.pop(); // ["Maçã", "Banana"]

// unshift: Adiciona ao início
frutas.unshift("Uva"); // ["Uva", "Maçã", "Banana"]

// shift: Remove o primeiro elemento
frutas.shift(); // ["Maçã", "Banana"]

// splice: Remove ou substitui elementos em qualquer posição
// (índice inicial, quantos remover, o que adicionar)
frutas.splice(1, 1, "Pêra"); // Remove 1 no índice 1 e

//busca e verificação
let numeros = [10, 20, 30, 40, 50];

// indexOf: Retorna a posição de um item (ou -1 se não existir)
console.log(numeros.indexOf(30)); // 2

// includes: Verifica se o item existe (retorna true/false)
console.log(numeros.includes(20)); // true

// find: Retorna o PRIMEIRO item que satisfaz a condição
let maiorQue25 = numeros.find((n) => n > 25); // 30

// findIndex: Retorna o índice do primeiro item que satisfaz a condição
let indexMaiorQue25 = numeros.findIndex((n) => n > 25); // 2

// some: Verifica se PELO MENOS UM item satisfaz a condição
let temNegativo = numeros.some((n) => n < 0); // false

// every: Verifica se TODOS os itens satisfazem a condição
let todosPositivos = numeros.every((n) => n > 0); // true

//tranformação e iteração
let nums = [1, 2, 3, 4, 5];

// forEach: Apenas percorre a lista (não retorna nada)
nums.forEach((n) => console.log(`Número: ${n}`));

// map: Cria um novo array transformando cada item
let dobrados = nums.map((n) => n * 2); // [2, 4, 6, 8, 10]

// filter: Cria um novo array apenas com itens que passam no teste
let pares = nums.filter((n) => n % 2 === 0); // [2, 4]

// reduce: "Reduz" o array a um único valor (ex: soma total)
// (acumulador, valorAtual)
let somaTotal = nums.reduce((acc, n) => acc + n, 0); // 15

//métodos de organização e ultilitários
let letras = ["b", "a", "d", "c"];

// sort: Ordena os itens (cuidado: converte para string por padrão!)
letras.sort(); // ["a", "b", "c", "d"]

// reverse: Inverte a ordem do array
letras.reverse(); // ["d", "c", "b", "a"]

// join: Junta tudo em uma string com um separador
let frase = letras.join("-"); // "d-c-b-a"

// slice: Corta uma fatia do array sem alterar o original
// (início, fim - não incluso)
let fatia = letras.slice(0, 2); // ["d", "c"]

// flat: "Achata" arrays dentro de arrays
let aninhado = [1, [2, 3], [4, [5]]];
console.log(aninhado.flat(2)); // [1, 2, 3, 4, 5]

//manipulação de string
let texto = "Olá Mundo";
console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.replace("Mundo", "JavaScript"));
console.log(texto.split(" "));
//manipulação de número
let numero = 15.6789;
console.log(numero.toFixed(2));
console.log(Math.round(numero));
console.log(Math.sqrt(64));
console.log(Math.random());
//data e hora
let dataAtual = new Date();
console.log(dataAtual.toDateString());
console.log(dataAtual.getFullYear());
console.log(dataAtual.getMonth() + 1);
console.log(dataAtual.getDate());
*/