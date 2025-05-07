// Factory functions  

function criaPessoa(nome, sobrenome){     
    return{
        nome,
        sobrenome,
        get nomeCompleto(){     // Pode fazer sem o get, apenas deixar o nomeCompleto
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');  // Preenche o objeto/cria
console.log(p1.nomeCompleto);             // Chamando o get
console.log(' ');


//////////////////////////
//  Constructor functions  /  Classes
// Começamos o nome com a primeira letra maiuscula
function Pessoa(nome1, sobrenome1){
    this.nome1 = nome1;
    this. sobrenome1 = sobrenome1;
}


// A palavra "new" cria um novo objeto e atrela a palavra "this" a este objeto
const p2 = new Pessoa('Luiz', 'Miranda');    // Preencheu o objeto
console.log(p2);                             // Chama a função  
console.log(' ');

p2.nome1 = 'Jhow';                           // Muda o valor do objeto
console.log(p2.nome1);
console.log(' ');
 
const p3 = new Pessoa('Maria', 'Leitão'); 
Object.freeze(p3);                          // Trava o objeto p3, deixando ele inalteravel, nada o modificará
Object.freeze(this);                        // Trava todos os objetos, nenhum poderá ser modificado
console.log(p3.nome1);