// Retorne a pessoa mais velha
// Se não jagar um valor no final da função, o acumulador s4rá o indice 0 e o valor o indice 1, o resto será undefined ->
// se cololcar o valor no final, ex. 0, o primeiro será zero, e o valor se´ra o primeiro
// O acumulador retorna o objeto inteiro

const pessoas = [
    {nome: 'Luiz'   , idade: 62},
    {nome: 'Maria'  , idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana' , idade: 64},
    {nome: 'Wallace', idade: 47},
];

const velha = pessoas.reduce(function(acumulador, valor){  // O acumulador é o primeniro "Luiz" e o valor é o segundo "Maria"
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(velha);

// Neste caso o acumulador sempre será o "Luiz", apenas o valor irá mudando conforme ele vai fazendo o laço, quando ele encontrar um maior, neste caso a "Rosana", o acumulador passará a ser a Rosana, e o valor continuará mudando a cada laço

