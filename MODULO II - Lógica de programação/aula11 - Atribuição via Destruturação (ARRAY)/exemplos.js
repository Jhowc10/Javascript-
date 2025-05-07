//ARRAYS

let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

[a, b, c] = [1, 2, 3]; // Reatribuindo um array - Isso é uma destruturação

const numeros = [1, 2, 3];
[a, b, c] = numeros;        //Mesma coisa que o exemplo acima.

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);
