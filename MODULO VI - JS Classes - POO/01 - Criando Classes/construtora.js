function Pessoa1 (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa1.prototype.falar = function (){
    console.log(`${this.nome} está falando`);
}

const p2 = new Pessoa1('Luiz', 'Miranda');
console.log(p2);