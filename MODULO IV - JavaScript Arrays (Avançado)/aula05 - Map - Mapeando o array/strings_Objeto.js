// Quando é objeto, substituimos o valor pelo obj
// Sempre que mexemos no array, alteramos a sua forma original, se não quiser mos mexer no original, copiamos ele e mexemos na cópia


const pessoas = [
    {nome: 'Luiz'   , idade: 62},
    {nome: 'Maria'  , idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana' , idade: 32},
    {nome: 'Wallace', idade: 47},
];


// Copinado um ARRAY ou Objeto
const novoObj = {...pessoas}; 
console.log(novoObj);
console.log(' ');





// Para não mexer no array original, fazemos uma cópia.
// Sempre escolha este modo de "copiar" antes de mexer, para não modificar o original, como no ex. a baixo
const comID = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = (indice + 1) * 1000;
    return newObj;
});

console.log(comID);
console.log(' ');





// Adicione uma chave id em cada objeto
// No caso de não querer começar com o "0" faça " obj.id = indice + 1; "
// No caso de querer começar com o "1000" faça " obj.id = (indice + 1) * 1000; "
const id = pessoas.map(function(obj, indice){
    obj.id = indice;
    return obj;
});

console.log(id)
console.log(' ');





// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);

console.log(nomes);
console.log(' ');



// Remova apenas a chave "nome" do objeto
// Ha duas mandeiras de se fazer
// 1ª
const idades = pessoas.map(function(obj){
    delete obj.nome;
    return obj;
});

console.log(idades);
console.log(' ');

// 2ª
const soIdade = pessoas.map(function(obj){
    return {idade: obj.idade};
});

console.log(soIdade);
console.log(' ');




