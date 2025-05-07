//Promise.race - Entrega a primeira promessa que resolver

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        if(typeof msg !== 'string') reject(false);

        setTimeout(() =>{
            resolve(msg);
        }, tempo);
    });
}

// promise.race
const promises = [
    esperaAi('Promise 01', rand(1, 5)),
    esperaAi('Promise 02', rand(1, 5)),
    esperaAi('Promise 03', rand(1, 5)),
];

Promise.race(promises)
.then(function(valor){
    console.log(valor);
})
.catch(function(erro){
    console.log(erro);
});