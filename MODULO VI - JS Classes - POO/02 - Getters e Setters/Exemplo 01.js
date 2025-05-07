// Symbol() = Serve para criar uma chave privada dentro do objeto, para não ser modificado, sempre que é chamado ele cria um "id" diferente, um Symbol nuca é igual a outro.

const _velocidade = Symbol('velocidade'); // Privando a [_velocidade], para não ser modificada  

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;    // Chamamos a variavel [_velocidade] dentro de um construtor/classe com o uso dos []
    }

    get velocidade(){   // Só dentro de um get podemos retornsar o valor da variável _velocidade
        return this[_velocidade];
    }

    set velocidade(valor){  // Permite alterar o valor da variavel provada _velocidade
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <- 0) return;
        this[_velocidade] = valor;
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;  // Coloca um limite de [_velocidade]
        this[_velocidade]++;                  // Aceleração
    }

    freiar(){
        if(this[_velocidade] <= 0) return;  // Coloca um limite de diminuição de [_velocidade]
        this[_velocidade]--;                // Diminui a aceleração
    }
}

const c1 = new Carro('Fusca');     
for(let i = 0; i <= 200; i++){  // Acelerando o fusca
    c1.acelerar();
}
console.log(c1);
console.log();

c1.velocidade = 90;  // Alterando o valor da variavel privada _velocidade
console.log(c1);
console.log();

console.log(c1.velocidade);
 