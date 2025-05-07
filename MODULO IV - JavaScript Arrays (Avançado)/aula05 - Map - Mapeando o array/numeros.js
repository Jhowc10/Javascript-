// Map - Volta um array do mesmo tamanho do array original, mas com valores alterados, mas o array original continua
// Assim como o "filter()", a "map()" também tem como parametros "valor, indice e array", a funcionalidade é a mesma
// Ao contrário do "filter()" que temos que retornar true ou false, o "map()" retorna um valor

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(numeros);
console.log(' ');

const exemplo = numeros.map(function(valor, indice, array){
    console.log(valor, indice, array);
    console.log(' ');
    return `Luiz -> ${valor}`;
});

console.log(exemplo);
console.log(' ');


// Mudando o valor do array
const zero = numeros.map(function(valor) {
    return '0';
});

console.log(zero);
console.log(' ');

//Dobrando os numeros
const dobro = numeros.map(valor => valor*2);

console.log(dobro);
console.log(' ');

