/*
    JavaScript é baseado em protótipos para passar propriedades e métodos de um objeto para o outro.

    Definição de protótipo:
    Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções.

    Todos os objetos tem uma referência interna para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada para cria-lo. Quando tentamos acessar um menbro do objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) o tal membro.
*/

// Função construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.estouAqui = "hahahaha";

//Intância
const pessoa1 = new Pessoa('Luiz' , 'O.');    // Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria' , 'A.');   // Pessoa = Função construtora
const data    = new Date();                   // Date   = Função construtora

console.dir(pessoa1);
console.dir(data);

// É apresentado no console do navegador


