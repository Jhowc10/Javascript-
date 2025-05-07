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


//Jeito resumido de código
document.addEventListener('click', function(e){
    const el = e.target;    // e = evento  target = vai capturar onde estamos clicando e realizar o evento

    if(el.classList.contains('zerar')){ 
        clearInterval(timer);                
        relogio.innerHTML = '00:00:00'; 
        relogio.classList.remove('pausado');    
        segundos = 0; 
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer); 
        relogio.classList.add('pausado');  
    }

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pausado');  //Quando o relogio for iniciado, o vermelho vai ser removido      remove = remove
        clearInterval(timer);   // Tem que colocar aqui também, para garantir que pause e ao iniciar novamente não duplique o relogio.
        iniciarRelogio();
    }
});