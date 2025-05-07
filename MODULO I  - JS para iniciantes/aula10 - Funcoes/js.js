//Criando uma função
//Função sem parâmetro
function saudacao(){
    console.log('Bom dia!!');
}

//Chamando a função
saudacao();


//Função com parâmetro
function saud(nome){
    console.log(`Bom dia ${nome}!`);
}

//Chamando a função
saud('Luis');
saud('Ana');


//Podemos armazenar a função em uma variável
//Para poder retornar em uma variavel, temos que usar o return, pela variavel só volta o return 
function teste(nome){
    return `Bom dia ${nome}, 'Está chegando o ano Novo`;
}

//Armazenando e chamando a função em uma variável
const func = teste('Tati');
console.log(func);

//Outros exemplos
function soma(x, y) {
    let resultado = x + y;
    return resultado
}

console.log(soma(2, 2));
console.log(soma(2, 12));
console.log(soma(22, 47));

function novo(x, y) {
    let resultado = x + y;
    return resultado
}

console.log(novo('Jhow ', 'Jhonny'));

//Se quiser que se não tiver nenhum valor a colocar no parâmetro, pode deixar um valor para a função executar
function conta(x = 1, y = 1) {
    let resultado = x + y;
    return resultado
}

console.log(conta());




//Criando uma função anonima
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(25));


//Chamando função com aerofunction
const rai = (n) => {
    return n ** 0.5;
};
//ou
const raiw = (n) => n ** 0.5;


console.log(raiw(6));