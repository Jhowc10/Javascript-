// Filter = filtra, sempre retorna um array com a mesma quantidade de elementos ou menos 
//Map = modificar, 
//Reduce = reduz o array em um unico valor

// Funciona como um "for"

const num = [5, 50, 80, 1, 2, 2, 5, 8, 7, 11, 15, 22, 27];


// Filtre apenas os valores maiores que 10

// Para isso, temos que utilizar uma função Call Back
// nos parametros: valor = os numeros dentro do array  /  indice = indice de onde esta cada valor  /  array = receberá o valor completo 
function callBackFilter(valor, indice, array){
    if(valor > 10){
        return true;
    }else{
        return false;
    }
}







// Para utilizar o filter, temos que criar um novo array, como fizemos abaixo
// Esta função só aceita valores booleanos, por isso no "if" da função callBackFilter pedimos para retornar "true" ou "false"
const numFilt = num.filter(callBackFilter);
console.log(numFilt);
console.log(' ');







// Resumindo a função

// Quando temos uma retur de true ou false não precisamos escrevelos, eles já são parametros próprios
// Se não vamos usar o indice e o array, não precimaos colocar
function callBa(valor){
    return valor > 10; 
}

const numFilt1 = num.filter(callBa);
console.log(numFilt1);
console.log(' ');








// Utilizando função anonima

const anon = num.filter(function(valor){
    return valor > 10;
});

console.log(anon);
console.log(' ');








// Com arrow function
// Quando o retorn é só uma linha, não precisa de {} ou a palavra "return"
const anonimo = num.filter(valor => valor > 10);

console.log(anonimo);
console.log(' ');










// Recebendo o valor, indice e o array
const geral = num.filter((valor, indice, array) => {
    console.log(valor, indice, array);
    console.log(' ');
    return valor > 10;
});

console.log(geral);
















const pessoa = [
    {nome: 'Luiz'   , idade: 62},
    {nome: 'Maria'  , idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana' , idade: 32},
    {nome: 'Wallace', idade: 47},
];