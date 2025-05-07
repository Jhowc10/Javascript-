// As funções são First-class ogjects (Objetos de primeira classe).

// Jeito 01 
// Declaração de função - está é uma função (Function Hoisting) = Que pode ser chmada antes ou depois dela
function falaOi() {
    console.log('Oi');
}
falaOi();

//Function expression - Expressão com dados
const souUmDado = function() {
    console.log('Sou um dado!');
}
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function...');
}
funcaoArrow();

// Função dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou em um objeto....');
    }
} 
obj.falar();