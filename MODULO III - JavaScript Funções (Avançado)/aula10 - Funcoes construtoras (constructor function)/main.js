//Função construtora - Cria objetos para executar automaticamente
// Nesta função, criamos o nome sempre com a primeira letra maiuscula
// E para chama-la, sempre usamos a palavra new, ela cria um novo objeto vazio e faz o this apontar para este objeto vazio
// Também podemos privar um dado, serve para validar um CPF, etc. Para privar, basta utilizar a palavra const ou let. Obs.: Variáveis, "const", "let", deixam privado, já o "this" deixa 


function Pessoa(nome, sobrenome){
    const ID = 123456;                   // Variável privado, não acessivel no console.log, const ou let deixa privado

    const metodoInterno = function(){    // Metodo privado, não acessivel no console.log, const ou let deixa privado

    }; // Nos métodos, sempre se fecha com ;




    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ' : sou um método.');
    };  // Nos métodos, sempre se fecha com ;
}

const p1 = new Pessoa('Luiz', 'Otávio');      // Chama a função construtora
const p2 = new Pessoa('Jonathas', 'Correia'); // Chama a função construtora

console.log(p1);
console.log(p2.nome, p2.sobrenome);
p2.metodo();