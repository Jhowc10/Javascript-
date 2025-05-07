//Praticamente faz a mesma coisa que o if else

//Exemplo com if
// Mostrando os nomes da semana

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
let diaSemanaTexto;


if (diaSemana === 0){
    diaSemanaTexto = 'Domingo';

} else if (diaSemana === 1){
    diaSemanaTexto = 'Segunda'

} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça'

} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta'

} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta'

} else if (diaSemana === 5){
    diaSemanaTexto = 'Sexta'

} else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado'
} else{
    diaSemanaTexto = '';
}


//EXEMPLO COM SWITCH

switch (diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break
    case 2:
        diaSemanaTexto = 'Terça';
        break;  
    case 3:
        diaSemanaTexto = 'Quarta';
        break; 
    case 4:
        diaSemanaTexto = 'Quinta';
        break; 
    case 5:
        diaSemanaTexto = 'Sexta';
        break; 
    case 6:
        diaSemanaTexto = 'Sabado';
        break; 
    default:
        diaSemanaTexto = '';
        break;
}

//Podemos usar dentro de uma função, o que dispensa o uso do "break"

function dias(diaSemana) {
    let = diaTexto;

    switch (diaSemana){
        case 0:
            diaTexto = 'Domingo';
            return diaTexto;
        case 1:
            diaTexto = 'Segunda';
            return diaTexto;
        case 2:
            diaTexto = 'Terça';
            return diaTexto;  
        case 3:
            diaTexto = 'Quarta';
            return diaTexto; 
        case 4:
            diaTexto = 'Quinta';
            return diaTexto; 
        case 5:
            diaTexto = 'Sexta';
            return diaTexto; 
        case 6:
            diaTexto = 'Sabado';
            return diaTexto; 
        default:
            diaTexto = '';
            return diaTexto;
    }
}
const semana = dias(diaSemana);
console.log(diaSemana, diaSemanaTexto);
