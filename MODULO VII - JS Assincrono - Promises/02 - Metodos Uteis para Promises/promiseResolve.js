// Retorna uma promessa já resolvida

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

function baixarPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache');
    }else{
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixarPagina()
.then(dadoPagina =>{
    console.log(dadoPagina);
})
.catch(e => console.log('ERRO', e));