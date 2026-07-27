//1. Usando var (forma mais antiga)
var idade = 25;
var nome = "Maria";
var estudante = true;

//2. Usando let (Introduzindo no ES6)
let idade = 25;
let nome = "Maria";
let estudante = true;

//3. Usando const (para valores constantes)
const PI = 3.14159;
const NOME_EMPRESA = "TechSolutions";

//Tipos de dados em JavaScript//

//1. Tipos Primitivos
Number (Número)
Representa tanto números inteiros quanto decimais.
let idade = 25; //Numero inteiro
let altura = 1.75; //Numero decimal
let temperatura = - 5; //Numero negativo

String (Texto)
//Representa sequência de caractéres (textos).
let nome = "João";
let sobrenome = "Silva";
let endereco = "Rua Belterra, 291"; //Template string (ES6).

Boolean (Booleano)
//Representa  valores lógicos; verdadeiro (true) ou falo (false).
let estudante = true;
let aprovado = false;

Undefined
//Representa uma variável que foi declarada, mas não recebeu um valor.
let cidade; //Valor é Undefined.
Null 
//Representa a ausência intencional de um valor.
let telefone = null //Explicitamente sem valor.

//2. TIpos Complexos
//Array (Vetor)
//Coleção ordenada de valores.
let frutas = ["maçã", "banana", "laranja"];
let numeros = [1, 2, 3, 4, 5];
let misturado = [1, "dois", true, null]

//Object (Objeto)
//Coleção de pares de chave-valor.
let pessoa = {
nome = "Bill",
idade = 56,
profissao: "Técnico de Futebol"
};


Verificando o Tipo de una  Variável

let idade = 25
console.log (typeof idade); 

let nome = "Bill"; 
console.log(typeof nome);

let ativo = true
console.log(typeof ativo);

//Conversão entre tipos

let numeroTexto = "42";
let numero = Number(numeroTexto);
console.log(typeof numero); //number

let numero1 = parseint(numeroTexto); //Para inteiros
let numero2 = parsefloat(numeroTexto); // Para decimais

//De Number para String
let numero = 42
let texto = String(numero); //"42" (texto)
//Alternativa 
let texto2 = numero.toString(); // "42" (texto)
//Para Boolean
let valor = 1;
let booleano = Booleano(valor); //true
//Valores que convertem para false;
//0, "", undefined, NaN, false

//Exemplo Prático; Calculadora de Idade

//declaração de variáveis
const anoAtual = 2026;
let anoNascimento = 2010;
//calculando a idade
let idade = anoAtual - anoNascimento;
//exibindo o resultado
console.log("Você tem " + idade + " anos."); 

console.log(`Você tem ${idade} anos.`)

//Exemplo Prático
let nota1 = 8.5
let nota2 = 7.0
let nota3 = 9.5

let media = (nota1 + nota2 + nota3)
console.log(`A média das notas é: ${media.toFixed(1)}`);

//Operação de Atribuidores combinados
let pontos = 100;
console.log(`Pontuação inicial: ${pontos}`);
//O jogador ganhou 50 pontos
pontos += 50; //Adiciona 50 pontos
console.log(`Pontuação após ganhar 50 pontos: ${pontos}`);
//O jogador perdeu 30 pontos
pontos -= 30; //subtrai 30 pontos
console.log(`Pontuação após perder 30 pontos: ${pontos}`);