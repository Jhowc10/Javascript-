// Classes fazem a mesma coisa que a função construtora
// Sempre o nome começa com letra maiúscula

class Pessoa{

    // Metodo especial construtor
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

    falar(){
        console.log(`${this.nome} está falando`);
    }

    comer(){
        console.log(`${this.nome} está comendo`);
    }

    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}

// Instsanciando a classe.
// Instanciar é criar um objeto a partir da classe
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Maria', 'Miranda');
const p3 = new Pessoa('Joana', 'Miranda');
const p4 = new Pessoa('João', 'Miranda');


p1.falar();
p1.comer();
p1.beber();
console.log(p1);

console.log(p2);
p2.falar();

console.log(p3);
p3.beber();

console.log(p4);
p4.comer();

