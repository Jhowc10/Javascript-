// defineProperty -> Getter = mostra e Setter = configura

function Produtos(nome, preco, estoque){
    this.nome    = nome   ;
    this.preco   = preco  ;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque',{

        // Quando se usa 'get' e 'set', não é necessário usar "writable" e "value"
        enumerable: true,        
        configurable: true, 
        get: function(){
            return estoquePrivado;
        },

        set: function(valor){
            if(typeof valor !== 'number'){
            console.log('Valor incorreto');
            return;
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produtos('Camiseta', 20, 3);
console.log(p1);
console.log(' ');

//  Vendo o valor do "get"
console.log(p1.estoque);
console.log(' ');

// Configurando o "set"
p1.estoque = 50;
console.log(' ');

console.log(p1.estoque);
console.log(' ');




///////////////////////////////////////////////
function criaProduto(nom){
    return{
        get nom(){
            return nom;
        },

        set nom(val){
            val = val.replace('coisa', '');    // Dentro do "replace" podemos modificar resultados, neste caso a palavra coisa mudará para ''
            nom = val;
        }

    }
}

const p2 = criaProduto('Tenis');
console.log(p2.nom);
console.log(' ');

p2.nom = 'Qulaquer coisa';  
console.log(p2.nom); 