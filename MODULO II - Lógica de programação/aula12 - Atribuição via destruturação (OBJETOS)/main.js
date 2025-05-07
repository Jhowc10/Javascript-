//Array usamos [] e em Objetos usamos {}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av brasil',
        numero: 320
    }
};

//Visualizando o objeto inteiro
console.log(pessoa);

//Visualizando um dado
console.log(pessoa.nome);

//Armazenando em variável
const nom = pessoa.nome;
console.log(nom);



/*
//Atribuição via destruturação
//Nese caso o nome já vira uma variável

const { nome } = pessoa;
console.log(nome);
*/


/*
//Neste caso podemos pegar vários objetos
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);
*/


/*
//Podemos atribuir um valor a uma variavel que não tenha   - Funciona no Array também
const {nome, outroNome = 'Otavio', sobrenome} = pessoa;
console.log(nome, outroNome, sobrenome);
*/


/*
//Podemos mudar o nome do objeto, ex.: Luiz era chamado pela palavra nome, agora ai ser chamado pela palavra ele
const {nome: ele, sobrenome} = pessoa;
console.log(ele, sobrenome);
*/


/*
//Chamando um objeto dentro de um objeto
const {endereco} = pessoa;
console.log(endereco);
*/


/*
//Chamando valores de um objeto dentro de outro objeto
//Neste caso, usamos o nome do objeto e : e as {}
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);
*/



/*
//Chamando os objetos
const {nome, tem= 'tem', idade, com = 'e mora', endereco:{rua, numero}} = pessoa;
console.log(nome, tem, idade, com, rua, numero);
*/


//Pegando o resto
const {nome, ...resto} = pessoa;
console.log(nome, resto);