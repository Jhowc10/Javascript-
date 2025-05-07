/*
Return
Retorna um valor   -    Termina a função 
*/

function soma(a, b) {
    return a + b;
}
console.log(soma(5, 5));  // Chama/retorna a função


// Podemos atribuir o valor da função a uma variável, e executar através dela
const som = soma(7, 7);   //Retorna a função
console.log(som);         //Outro jeito de retornar a função




/******************************************************************/




//Função que muda a cor de fundo do body, pode ser usada para mudar outro elemento
document.addEventListener('click', function(){
    document.body.style.background = 'red';          //Retorna um evento
});



/**********************************************************************/




function criaPessoa(nome, sobrenome) {   //Retorna objeto
    return{ nome, sobrenome}             //É a mesma coisa que {nome: nome, sobrenome: sobrenome}         
}                                        //Se o atributo é igual a variável, não é necessário escrever o atributo

const p1 = criaPessoa('Luis', 'Otávio'); //Neste caso, não precisamos criar varias variaveis com objetos, criamos uma função e apenas trocamos os parametros



/************************************************************************/




//Utilizando função para frases
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;             //Retorno da segunda função
    }
    return falaResto;
}
const fala = falaFrase('Olá');
const resto = falaResto('mundo!')
console.log(resto);




/***************************************************************************/




//Varias funções
function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

//Outro jeito
function criaMultiplicador(multiplicador) { // Função 1
    return function(n){                     // Função 2
        return n * multiplicador;           // Função com retorno, função 3 
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));  // Duplica, triplica e quadriplica são as constantes
console.log(triplica(2));
console.log(quadriplica(2));