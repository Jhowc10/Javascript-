/*

Data 0:
new Date(0) corresponde ao marco 0 que é em 01/01/1970 - Timestamp unix ou época unix. São contadas a partir deste dia.

As horas no JS são em milissimos de segundos
60 * 60 * 3  * 1000 = 3h
60 * 60 * 24 * 1000 = 1D

Nunca coloque o valor cheio, 60h 60min 1000ms se não o JS vai arrendodar, sempre colocar 59h, 59min 999ms
Os meses começam do 0 - Jan = 0, Fev = 1, Mar = 2, Abr = 3.... Para ficar no nosso padrão, somamos + 1.
*/

/* Mostra a data atual */
const data1 = new Date();
console.log(data1.toString());

/* Mostra uma data especificada por você */
//                      ano   mês  dia  horas   minutos  segundos  milésimos   
const data2 = new Date( 2019,  3,  20,   15,      14,       27,       500);
console.log(data2.toString());

/* OUTRO JEITO DE POR DATA */
// Também podemos por data por strings

const data3 = new Date('2019-04-20 20:20:54.500');
console.log(data3.toString());

//Obtendo partes da data
console.log('Dia',        data3.getDate        ()); // Mostrará o DIA
console.log('Mês',        data3.getMonth       ()) + 1; // Mostrará o MÊS
console.log('Ano',        data3.getFullYear    ()); // Mostrará o ANO
console.log('Hora',       data3.getHours       ()); // Mostrará a HORA
console.log('Minuto',     data3.getMinutes     ()); // Mostrará os MINUTOS 
console.log('Segundo',    data3.getSeconds     ()); // Mostrará os SEGUNDOS
console.log('Milésimo',   data3.getMilliseconds()); // Mostrará os MILÉSIMOS
console.log('Dia semana', data3.getDay         ()); // Mostrará o DIA DA SEMANA

// Dias da semana, 0 é domingo e 6 é sábado

//FUNÇÃO PARA ADICIONAR UM ZERO
function zeraAesquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

//FUNÇÃO PARA FORMATAR DATA

function formataData(data) {
    const dia  = zeraAesquerda(data.getDate    ()    );
    const mes  = zeraAesquerda(data.getMonth   () + 1);
    const ano  = zeraAesquerda(data.getFullYear()    );
    const hora = zeraAesquerda(data.getHours   ()    );
    const min  = zeraAesquerda(data.getMinutes ()    );
    const seg  = zeraAesquerda(data.getSeconds ()    );

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);