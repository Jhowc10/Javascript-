// Reduz o array a um unico elemento
// No "reduce" temos os parametros "acululador, valor, iduce e array" e mais o valor incial, colocado no final da função


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Some todos os numeros (Reduce)
// Aconselhavel utilizar o "reduce" apenas para reduzir o array mesmo
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;   // Soma todos os elementos do array
    return acumulador;
}, 0);                     // Se não definir um valor, igual definimos o "0", o valor será o primenrio elemento, neste caso seria o "5"

console.log(total);
console.log(' ');



// Retorne um array com os pares (Filter)
// "Aconselhavel a fazer isso com filter, não utilize o reduce"
const pares = numeros.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);                         // Ao deixar os [] ele irá retornar o resultado como array, não esqueça a " , "    

console.log(pares);
console.log(' ');



// Retorne um array com o dobro dos valores (Map)
// "Para isso, utilize o Map"
const  dobro = numeros.reduce(function(acumulador, valor){
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(dobro);
console.log(' ');







