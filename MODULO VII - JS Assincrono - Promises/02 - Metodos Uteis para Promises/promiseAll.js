// Alguns métodos que podem ajudar a trabalhar com promisses

/*
Promise.all      - Entrega apenas uma promessa com valores dentro de um array
Promise.race     - Entrega a primeira promessa que resolver
Promise.resolve
Promise.reject  - Entrega uma promessa já rejeitada
*/

// Função que gera numros aleatórios
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string'){
            reject(false);
            return;
        }
        
        setTimeout(() =>{
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}

// promise.all
const promises = [
    'Primeiro valor',
    esperaAi('Promise 01', 3000),
    esperaAi('Promise 02', 500),
    esperaAi('Promise 04', 1000),
    'Outro valor'
];

Promise.all(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});