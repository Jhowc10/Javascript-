// Produto/Abstração = Camiseta, caneca     /    Ter aumento e desconto

// Função construtora
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

// Metodos
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

// Criando uma função construtora para o produto camiseta
// O call() tem a mesma função que o new, porem o new é no index ou fora da função.
// O this dentro dos () de call linka os dois metodos na função construtora Camiseta permitindo o aceso
function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
}
// Linkando a função construtora com o objeto produto, e se o produto for modificado não afetará a função
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

//Sobrescrevendo o valor de aumento()
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10);
console.log(camiseta);




///////////////////////////////////////
// Mesmo exemplo de Camiseta
// Também é possivel aumentar os produtos
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof calor !== 'number') return;  // Se for number, não funcionara
            estoque = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
console.log(caneca);