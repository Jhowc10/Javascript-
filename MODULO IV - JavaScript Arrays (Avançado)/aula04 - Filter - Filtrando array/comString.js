const pessoas = [
    {nome: 'Luiz'   , idade: 62},
    {nome: 'Maria'  , idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana' , idade: 32},
    {nome: 'Wallace', idade: 47},
];

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Filter não retorna o mesmo array, retorna um novo array
// Neste caso, como é um objeto, podemos chamar pelo objeto
// "obj.nome" acessara diretamento os nomes, "length" é o indice de cada palavra
const pess = pessoas.filter( function(obj){
    console.log(obj.nome);
    console.log(' ');
    
    return obj.nome.length >= 7;
});

console.log(pess);
console.log(' ');




// Com arrow function
const pess1 = pessoas.filter(obj => obj.nome.length >= 7);
console.log(pess1);
console.log(' ');




//............................................
// Retorne as pessoas com mais de 50 anos
const maisCinco = pessoas.filter(obj => obj.idade > 50);
console.log(maisCinco);
console.log(' ');





//............................................
// Retorne as pessoas cujo o nome termina com "a"
// toLocaleLowerCase() = deixa tudo minusculo
// endsWith() = permite pegar/selecionar apenas uma ou mais letras
const soA = pessoas.filter(function(obj){
    return obj.nome.toLowerCase().endsWith('a');
});

console.log(soA);


