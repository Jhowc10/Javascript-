// Promisses = Promessas, elas funcionam em paralelo com o código.

/*
    As promisses tem tês estados: 
    - Pendente estado inicial
    - Fullfiled já resolvida
    - Reject foi rejeotada
*/


// Criando uma promisse
// resolve = para resolver se der certo   /   reject = usado se não ouver retorno

// No resolve e no reject podemos usar apenas um parâmentro
function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== 'string') reject ("Bad code");
            resolve(msg);
        }, tempo);
    });
}

function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}



esperaAi('Conexão com o BD', rand(1, 3))
.then(resposta =>{                  // Sempre que usar parâmetro no resolve, para chamr se usa a função ".then()"
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));      // Pode chamar novamente ou fazer outra função, mas para funcionar temos que colocar outro ".then()"
})
.then(resposta =>{
    console.log(resposta);
    return esperaAi('Tratando os dados da BASE', rand(1, 4));
})
.then(resposta =>{
    console.log(resposta);
    return esperaAi(5898, 1, 2);
})
.then(resposta =>{
    console.log(resposta);
})
.catch(e =>{
    console.log('ERRO: ', e);
});                           // Sempre que usar parâmetro no resolve, para chamr se usa a função ".then()"

console.log("Esta frase será exibida antes de qualquer promisses");