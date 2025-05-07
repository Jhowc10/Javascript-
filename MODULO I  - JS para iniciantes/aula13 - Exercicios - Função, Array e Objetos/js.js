// Tirando a atualização automática da pagina
// Jeito 1 

function meuEscopo(){

    const form = document.querySelector('.form'); 

    // form.onsubmit = function(evento){
    //     evento.preventDefaul();
    //     alert(1);
       
    // };
    // form.addEventListener('submit');


// Jeito 2
    function recebeEventoForm(evento) {
        evento.preventDefault();
    }

    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();

