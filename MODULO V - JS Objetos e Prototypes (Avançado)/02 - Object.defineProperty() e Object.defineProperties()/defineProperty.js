// Funções relacionadas a chave do objeto
// defineProperty = Define uma propriedade

function Produto(nome, preco, estoque){
    this.nome    = nome   ;
    this.preco   = preco  ;

    // Deixando uma propriedade protegida, inalterada
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // Mostra a chave, se por "false" não exibirá a chave
        value: estoque,      // Faz aparecer normal no console, no caso exibirá o estoque
        writable: false,     // O valor não pode ser alterado, se colocar "true" permitirá a alteração
        configurable: false, // Como "true" permite reconfigurar, apagar. Como "false" não permitirá apagar, reconfigurar
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1.nome);
console.log(' ');

// Mostrando as chaves em um array
console.log(Object.keys(p1));



