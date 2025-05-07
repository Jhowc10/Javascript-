//Selecionando as classes no HTML
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar  = document.querySelector('.pausar' );
const zerar   = document.querySelector('.zerar'  );


//Criando uma data para pegar os segundos
function horaSegundos(segundos) {
    const data = new Date(segundos * 1000); //O js tem o formato em milessimos, para pegar os segundos multiplicamos por 1000
    return data.toLocaleTimeString('pt-BR', {
        hor12: false,
        timeZone: 'UTC'   //Como a hora utilizada é de inicial de 1970, usamos 'UTC' ou 'GMT' para o relogio zerar 00:00
    });
}

let segundos = 0;  // Variável que vai inicializar o relogio com o segundo zerado.
let timer;         // Variável não declarada, que vai pausar o relógio



//Função adicionar os segundos ao relogio
function iniciarRelogio() {
    timer = setInterval(function(){    //timer foi declarada como global, 
        segundos++;    //Variavel let segundo concatenada
        relogio.innerHTML = horaSegundos(segundos);  //No HTML irá aparecer o relogio completo, da função horaSegundo e entre () esta a variavel segundo para iniciar a contagem
    }, 1000);
}

//Função para acionar o clique do botão iniciar
iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');  //Quando o relogio for iniciado, o vermelho vai ser removido      remove = remove
    clearInterval(timer);   // Tem que colocar aqui também, para garantir que pause e ao iniciar novamente não duplique o relogio.
    iniciarRelogio();
});

//Função para pausar o relogio
pausar.addEventListener('click', function(event){
    relogio.classList.add('pausado');  //Quando o relogio for pausado, o vermelho vai ser adicionado      add = adiciona - neste caso não precisa do .
    clearInterval(timer);   //Pausa o religio, a variavel global 'time' se encontra na função iniciarRelogio também
})

//Função para zerar o relogio
zerar.addEventListener('click', function(event){
    clearInterval(timer);                //Para o relogio
    relogio.innerHTML = '00:00:00';     //Imprime no HTML o relogio zerado
    segundos = 0;    //Reatribuimos o 0 a variável segundos, para o relógio retornar zerado
})