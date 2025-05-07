// Quando se cria um ARRAY se usa  []
// Quando se cria um objeto se usa {}

//Criando um objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25

};

const pessoa1 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 36
};

//Chamando elementos de um objeto
console.log(pessoa.nome);
console.log(pessoa.sobrenome);

//Objeto em Funções - guando tem palavras repetidas, não é necessário repetilas
function criaPessoa (nome, sobrenome, idade){                       //function criaPessoa (nome, sobrenme, idade){
    return{                                                         //  return{
        nome: nome,                                                 //      nome, sobrenome, idade
        sobrenome: sobrenome,                                       //  };
        idade: idade                                                //} 
    };
}
//Chamando a função
const pessoa2 = criaPessoa('Luiz', 'Orto', 25);
const pessoa3 = criaPessoa('João', 'Estevan', 30);
const pessoa4 = criaPessoa('Pedro', 'Billy', 50);
const pessoa5 = criaPessoa('Maria', 'Paula', 59);
const pessoa6 = criaPessoa('Bete', 'Ana', 42);
console.log(pessoa2.nome);

//Em funções criadas dentro de um objeto, não é necessário digitar a palavra função
const pessoa7 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log("Olá mundo!!");
        console.log(`A minha idade atual é ${this.idade}`);
    },
    incrementaIdade(){
        this.idade++;
    }
}
//Chamando
pessoa7.fala();
pessoa7.incrementaIdade();
pessoa7.fala();
pessoa7.incrementaIdade();