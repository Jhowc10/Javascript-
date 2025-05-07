//While
// Usados quando não sabemos até quando vai se repetir

let i = 0   // variavel de controle, criada fora do while

while (i <= 10){
    console.log(i);
    i++;   // Nunca esquecer de concaternar, se não o laço irá se repetir infinitamente.
}


//Numero aleatório de 0 a 50
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);

while (rand !== 10) {  // Enquanto for igual a 10 ele executa, se for diferente, termina o laço
    rand = random(min, max);
    console.log(rand);
}


console.log('---#######---');

//Do While
do{
    rand = random(min, max);
    console.log(rand);
}while (rand !== 10);