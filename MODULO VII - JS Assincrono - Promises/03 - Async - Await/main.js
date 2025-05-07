// Promosse veio para solucionar problemas de Calback

function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject('Cai no erro');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    })
}

// esperaAi('Fase 1', rand())
// .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
// })
// .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand());
// })
// .then(fase => {
//     console.log(fase);
// })
// .then(fase => {
//     console.log('Terminamos na fase: ', fase);
// })
// .catch(e => console.log(e));



// ASYNC
// Agora vamos resumir o código acima
// "await" só podemos usar este comando dentro de uma função com "async"
async function executa(){
    try{
        const fase1 = await esperaAi('Fase 100', rand());
        console.log(fase1);

        const fase2 = await esperaAi('Fase 200', rand());
        console.log(fase2);

        const fase3 = await esperaAi(2, rand());
        console.log(fase3);

        console.log('Terminamos na fase: ', fase3);

    }catch(e){
        console.log(e);
    } 
}

executa();
