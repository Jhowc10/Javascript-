// Funções relacionadas a chave do objeto
// defineProperties = Define várias propriedade

function Produto(nome, preco, estoque){

    // Deixando uma propriedade protegida, inalterada
    Object.defineProperties(this, {
        nome:    {
            enumerable: true,    // Mostra a chave, se por "false" não exibirá a chave
            value: nome,         // Faz aparecer normal no console, no caso exibirá o estoque
            writable: false,     // O valor não pode ser alterado, se colocar "true" permitirá a alteração
            configurable: false, // Como "true" permite reconfigurar, apagar. Como "false" não permitirá apagar, reconfigurar
        },
        preco:   {
            enumerable: true,    
            value: preco,      
            writable: true,     
            configurable: true, 
        },
        estoque: {
            enumerable: false,    
            value: estoque,      
            writable: true,     
            configurable: false, 
        },
       
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));
console.log(' ');

for(let chave in p1){
    console.log(chave);
}
