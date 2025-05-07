/* 
Gera letras aleatórias, para saber os numeros referentes aos codigos, numeros e letras,
digite no google "Tabela ASCII"]

                                 String.fromCharCode(33, 120);   
*/

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiusc = () => String.fromCharCode(rand(65, 91)); // Pega as maiusculas da tabela ASCII
const geraMinusc = () => String.fromCharCode(rand(97, 123)); // Pega as minusculas da tabela ASCII
const geraNumero = () => String.fromCharCode(rand(48, 58)); // Pega as numeros da tabela ASCII

const simbolos = ",.;~^><;?=+-@$!";  
const geraSimbolo = () => simbolos[rand(0, simbolos.length)]; // Pega os simbolos da const pelo indice

export default function geraSenha(qtd, maiusc, minusc, numeros, simbolos){
    const senhaArray = [];

    qtd = Number(qtd);   // Convertendo para numero

    for(let i = 0; i < qtd; i++){
        maiusc && senhaArray.push(geraMaiusc());
        minusc && senhaArray.push(geraMinusc());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
    // "join" transforma em string e "slice" me da um valor min e max, no caso o max é a qtd.
}

