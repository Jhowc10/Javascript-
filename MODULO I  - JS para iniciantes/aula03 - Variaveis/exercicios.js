/* Coloque variáveis nos nomes, peso, idade e numero de IMC na frase abaixo 
*/

let nome          = 'Luiz Otávio';
const SOBRENOME = 'Miranda';
let idade         = 30;
let peso          = 84;
let altura        = 1.8;
let imc           = peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(nome, SOBRENOME, 'tem', idade, 'anos, pesa', peso, 'Kg, tem', altura, 'altura e seu IMC é de', imc);
console.log(`${nome} nasceu em ${anoNascimento}`);