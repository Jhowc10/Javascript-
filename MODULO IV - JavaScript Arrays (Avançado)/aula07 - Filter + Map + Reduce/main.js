// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Não é necessario escrever "acululador, valor, indice ou array" por extenso, pode reduzir, "ac, va, in e ar"
const pares = numeros.filter(function(va){
    return va % 2 === 0;
}).map(function(va){               // Podemos adicionar uma função no fina, como uma continuação, assim não criamos varias variaveis e funções
    return va * 2;
}).reduce(function(ac, va){
    return ac + va;
});

console.log(pares);
console.log(' ');

// Mesma função assima, mas com arrow function
const par = numeros.filter(va => va % 2 === 0)
                   .map   (va => va * 2)
                   .reduce((ac, va) => ac + va);     // Como tem dois paramentros, deixamos dois (), quando a apenas um return/uma linha, não é necessário colocar

console.log(par);


// Resultados
// [50,   80, 2,  8, 22] -> pares
// [100, 160, 4, 16, 44] -> dobro 
// 324