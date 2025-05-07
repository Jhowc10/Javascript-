/*
    Parâmetros
    São passados dentro dos () e são separados por virgula e depois reproduzidos dentro dos () que chama a função.
    Se colocamos paramentros onde chamamos a função sem colocar argumentos na função ele exibira o resultado, mas não os argumentos. Porém,
    o JS guardará estes argumentos em uma variavél chamada "arguments"
    O contrário, mais parametros que argumentos, o resultado será "undefined"
*/


function funcao() {    //Função sem argumento
    console.log(arguments[0]);     //Os parametros da chamda da função ficarão armazenadas aqui, colocamos entre [] o indice que quer apresentar
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9); // Onde exibe o resultado tem argumento




// Função com mais argumentos que parâmentros
function arPa(a, b, c) {
    let param = 0;
    for (let argu of arguments){
        param += argu;
    }
    console.log(param, a, b, c);
}
arPa (1, 2, 3, 4, 5, 6, 7);  // O 1, 2 e 3 são argumentos dos parametros a, b e c, já o resto não tem paramentros, logo estaram na variável "arguments"





//Utilizando a variável "arguments" com um for
function numeros(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total);
}
numeros(1, 2, 3, 4, 5, 6, 7);

// Obs.: Os exemplos acima só funcionam com function, com arrow function NÃO


// Funções com parâmetros, mas programadas para enviar valor se não tiver argumento, a dois jeitos, nos paramentros ou na declaração da função
// No caso de tirver 3 paramentros e vo quiser que o do meio assume o valor atribuido, temos que digitar "undefined" para ele aceitar
function progra(a = 2, b, c=4) {  // Terá o mesmo resultado abaixo
    b = b || 0;              // Ao fazer isso, dizemos que se não tiver argumento, ele será zero ou outro valor que desejar
    console.log(a + b + c);
}
progra(2, undefined, 6)

// Atribuição via destruturação com OBJETO
function destru({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade);
}
destru({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});

//Podemos jogar em uma variavel e chamar a função com o nome da variavel.
let atrib = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20};
destru(atrib);



// Atribuição via destruturação com ARRAY
function arrr([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
arrr(['Luiz Otávio', 'Miranda', 20]);


function conta(operador, acumulador, ...numeros) {   // Os três pontinhos(rest) pegará o resto (O que vem depois do acumulador), ele sempre deverá ser o ultimo parâmetro
    for(let numero of numeros){                      // Obs.: "of" volta os numeros "in" volta os indices
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);



// Rest opereitor - Tem a mesma função do rest, mas de forma reduzida e funciona no arrow function, aliás, funciona em todos os tipos de funções.
const rest = (...args) => {  //Volta todos os argumentos, sem os ... volta apenas o primeiro argumento
    console.log(args);
};
rest('+', 1, 20, 30, 40, 50);





///////////////////////////////
const cont = function conta(operador, acumulador, ...numeros) { //Quando fazems uma função express, temos que colocar ; no final das {}
    console.log(arguments);
    console.log(operador, acumulador, numeros);
};
cont('+', 1, 20, 30, 40, 50);