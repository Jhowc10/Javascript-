
// Indice        0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Valor

// Impressão (Jeito 1) 
console.log(numeros[0]);  // console.log(valor[indice]);

//Impressão (Jeito 2)
const priNumero = numeros[1];
console.log(priNumero);

//Atribuição via destruturação
const [primeiroNumero, segundoNumero] = numeros;
console.log(primeiroNumero, segundoNumero);


/*
    Operador ... tem duas funções
    Quando usado para pegar o resto se chama "rest"
    Quando usado para espalhar/distribuir se chama "spread"
*/


const num = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
// Especificando dois valore e pegando o resto
const [um, dois, tres, ...resto] = num;  // A primeira variavel pega o indice 1, a segundo o indive 2 e a ultima pega todo o resto.
console.log(um, dois, tres);
console.log(resto);

//Pegando valores fora de seguencia, para pular valores de um array, deixe o espaço em branco
const [umm, , tress, , cinco, , sete, , nove] = num;
console.log(umm, cinco, nove);



//Array dentro de array

//Indice array      0          1          2            Cada array recebe vira um indice
//Indice valores 0  1  2    0  1  2    0  1  2
const juntos = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//Acessando 0 numero 6
console.log(juntos[1][2]);

//* Atribuição via destruturação - Acessando o numero 6 
const [ , [ , , seis]] = juntos;
console.log(seis);


//Acessando só o indice dos arrays
const [arr1, arr2, arr3] = juntos;
console.log(arr3);

console.log(arr2[0]);  // Este jeito é mais facil que o jeito com *
