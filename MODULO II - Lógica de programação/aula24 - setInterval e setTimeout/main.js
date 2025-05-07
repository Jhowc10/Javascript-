function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDOintervalo() {
    console.log(mostraHora());
}


const time = setInterval(funcaoDOintervalo, 1000);

setTimeout(function() {
    clearInterval(time);
}, 3000);        // Atrasamos o tempo da setInterval

setTimeout(function() {
    console.log('Ola Mundo');
}, 5000);   //Em 5s ele vai imprimir esta frase e parar