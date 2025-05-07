function retornaFuncao(){
    const nome = 'Luiz';
    return function () {
        return nome;
    };
}
const funcao = retornaFuncao();
console.dir(funcao);     // Mostra que a função é anonima




/****************************************************/




function retornaFuncao1(nome){
    return function(){
        return nome;
    };
}
const funcao1 = retornaFuncao1('Luiz');
const funcao2 = retornaFuncao1('João');
console.dir(funcao1);
console.dir(funcao2);