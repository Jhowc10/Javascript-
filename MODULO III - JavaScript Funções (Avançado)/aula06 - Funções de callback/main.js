//Funções que são executadas quando uma ação ocorre/finaliza

//Função que gera numeros aleatórios entre 1000 e 3000
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1() {
    setTimeout(function () {     //setTimeout = define um tempo, a função a seguir é uma callback
        console.log('f1');
    }, 500);
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');

        if(callback) callback();    // Se existir callbqack, execute o callback, ou seja, executará primeiro as que estiverem   
    }, rand());                     // callback
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
    
        if(callback) callback();
    }, rand());
}

function f4(callback) {
    setTimeout(function () {
        console.log('f4');

        if(callback) callback();
    }, rand());
}

f1();

// Depois criamos uma função como parametro da primeira que vai executar e colocamos a sequencia que desejamos a execução
f2(function(){
    f3(function(){
        f4(function(){
            console.log('Olá Mundo');
        });
    });
});

//Outro jeito de se fazer
f2(f2callback);

function f2callback(){
    f3(f3callback);
}

function f3callback(){
    f4(f4callback);
}

function f4callback(){
    console.log('Outro jeito de se fazer');
}