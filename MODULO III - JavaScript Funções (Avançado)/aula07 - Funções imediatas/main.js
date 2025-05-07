// Funções imediatas ou funções auto invocadas
//IIFE - Imediately Invoke Function Expression é uma função sem nome, não tem escopo global

//Tudo o que é feito nela não afeta o resto do codigo, fica só dentro dela

(function(){
    const nome = 'Luiz';

    console.log(nome);
})();

const nome = 'Pedro';
console.log(nome);

//Podemos criar codigos inteiros

// Função imediata com parâmetro
(function(idade, peso, altura){
    //const nome = 'João';
    const sobrenome = 'Roberto';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Jose'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.70);    // E aqui no final colocamos os elementos



