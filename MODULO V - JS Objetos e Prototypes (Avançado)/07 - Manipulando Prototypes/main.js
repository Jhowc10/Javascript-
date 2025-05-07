// new Object -> Object.propotype
const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'A'
};

// Configurando o prototype do Objeto, neste caso, o prototype do objeto B sera o objeto A
Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);

// Acessando um __PROTO__ de um objeto, neste caso, do objeto A
Object.getPrototypeOf(objA)



////////////////////////////////////
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

// Metodos
// Aplicando desconto ou aumentando, utilizando o porcentual
Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.aumento(100);
console.log(p1);


// Atribuindo outros valores ao objeto
const p2 = {
    nome: 'Caneca',
    preco: 15
};

// Para usar as mesmas funções do método p1, setamos/fazemos o protoype do p2 ser o do p1
//Neste caso, não poderiamos ter os metodos desconto e aumento no p2, pelo prototype conseguimos utilizar sem ter que refazer
 Object.setPrototypeOf(p2, Produto.prototype);
 p2.aumento(10);
 console.log(p2);

 //Criando/Passando diretamente pela variavel
 const p3 = Object.create(Produto.prototype,{
 // Cria a chave]
    preco: { 
        writable: true,
        configurable: true,
        enumerable: true,
        value: 113
    },

    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
 });
 p3.aumento(20);
 console.log(p3);

