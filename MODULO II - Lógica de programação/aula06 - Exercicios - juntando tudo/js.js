// Capturar o evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso   = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    console.log(inputPeso, inputAltura);

    const peso   = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso inválido!', false);
        return;   // Se deixar assim, o codigo para aqui, usado quando a condição é invalida
    }

    if(!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);


    console.log(imc, nivelImc);
});

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade de grau 1', 'Obesidade de grau 2', 'Obesidade de grau 3'];
    
    if (imc >= 39.9) {
        return nivel[5];

    }else if(imc >= 34.9){
        return nivel[4];

    }else if(imc >= 29.9){
        return nivel[3];

    }else if(imc >= 24.9){
        return nivel[2];

    }else if(imc >= 18.5){
        return nivel[1];

    }else if(imc < 18.5){
        return nivel[0]
    }

    /*

    Pelo fato do JS sempe parar no return, não é necessário fazer a cadeia completa do else if, por ser um bloco só, não é necessário usar as chave, podemos resumi-la

    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9){ return nivel[2]; }
    if(imc >= 18.5){ return nivel[1]; }
    if(imc < 18.5) { return nivel[0]; }

    */
}

function criaP() {
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) {   // Aqui adiciona uma cor diferenta para se der true ou false. A cor esta no CSS
        p.classList.add('paragrafo');
    }else{
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
} 