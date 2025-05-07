class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    };

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    };

    set nomeCompleto(valor){
        valor = valor.split(' ');        // Adiciona espaço
        this.nome = valor.shift(' ');       // Adiciona no nome
        this.sobrenome = valor.join(' ');   // Adiciona no sobrenome, os '' entre os () tira a ,
    };
}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1.nomeCompleto);
console.log();

p1.nomeCompleto = "Jonathas Correia Marangone";

console.log(p1.nome);
console.log(p1.sobrenome);
console.log();
console.log(p1.nomeCompleto);