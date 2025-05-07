function meuEscopo() {
    const form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado');

    //Criando um ARRAY
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('nome');
        const sobrenome = form.querySelector('sobrenome');
        const peso = form.querySelector('peso');
        const altura = form.querySelector('altura');


        //Enviando os dados para o ARRAY, e criando um objeto dentro do ARRAY
        pessoas.push({
            nome: nome.Value,
            sobrenome: sobrenome.Value,
            peso: peso.Value,
            altura: altura.Value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` + ` ${peso} ${altura}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);

}
meuEscopo();
    
