let num1 = 9.54578;

//Arredondar o numero pra baixo
let num2 = Math.floor(num1);
console.log(num2);

//Arredondando para cima
let num3 = Math.ceil(num1);
console.log(num3);

//Arredondando, o software que determina se arredonda para cima ou para baixo
let num4 = Math.round(num1);
console.log(num1);

//Pegando o maior numero de uma sequência
console.log(Math.max(1, 2, 3, 4, 5, 10, -10, 50, 1500, 9, -8, 6,));

//Pegando o menor numero
console.log(Math.min(1, 2, 3, 4, 5, 10, -10, 50, 1500, 9, -8, 6));

const ALEATORIO = Math.random() * (10 - 5) + 5;
console.log(ALEATORIO);

//Valor de PI
console.log(Math.PI);

//Potencialização
console.log(Math.pow(2, 10));
console.log(2 ** 10);  // Jeito sem o Math

//Obtendo raiz quadrada
let num5 = 9;
console.log(num5 ** 0.5); // Podemos pegar a raiz quadrada de qualquer numero utilizando o 0.5

//Em JS podemos dividir por 0
console.log(100 / 0); // Da valor infinit, é avaliado como true

