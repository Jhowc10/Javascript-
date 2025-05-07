// Funções geradoras  - Meio que pausam o código no local determinado
// Utiliza-se o * na depois da palavra "function"
// Cada vez que é chamada, retornará um valor. Ex.: 1 chamada = valor 1 - Segunda chamada = Valor 2.....

function* geradora (){
    // Código qualquer .....
    yield 'Valor 1';           // "yield" = return, porém, na função geradora o return tem outra propósito, então usamos o yield.

    // Código qualquer
    yield 'Valor 2';

    // Código Qualquer
    yield 'Valor 3';
}

const g1 = geradora();
console.log(g1);

// Para poder acessar os valor da função geradora, se concatena com a função, ex.: g1.next(); 
console.log(g1.next());   


// Para poder acessar o conteudo da função geradora, se concatena com a função, ex.: g1.next().value;
console.log(g1.next().value);  

// Chamando novamente, ele acessará o proximo valor, e não o mesmo
console.log(g1.next().value); 

//value = valor, conteudo    -    done: false = ainda tem mais valores     -    done: true = acabou os valores
console.log(g1.next()); 




////////////////////////////////////////////////////////////////////////////////////////




function* geradora1 (){
    // Código qualquer .....
    yield 'Valor 1';           // "yield" = return, porém, na função geradora o return tem outra propósito, então usamos o yield.

    // Código qualquer
    yield 'Valor 2';

    // Código Qualquer
    yield 'Valor 3';
}

// O "for" já sabe automáticamente quando a função terminará.
const g2 = geradora1();

for (let valor of g2){
    console.log(valor);
}



////////////////////////////////////////////////



// Utilizando para loops infnitos, neste caso dará um numero sequencial a cada chamada

function* geradora2 (){
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}
const g3 = geradora2();
console.log(g3.next(). value); // Neste caso ira dar o numero conforme chama
console.log(g3.next(). value);
console.log(g3.next(). value);
console.log(g3.next(). value);
console.log(g3.next(). value);
console.log(g3.next(). value);
console.log(g3.next(). value);
console.log(g3.next(). value);
console.log(g3.next(). value);



/////////////////////////////////////////////////////


// Geradora que delega para outra geradora
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    // Colocando o * na frente de "yield", se chgama a função de um geradora a outra
    // Assim a geradora4 dará continuação na geradora 5
    yield* geradora3();  
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for(let valor of g4){
    console.log(valor);
}


/////////////////////////////////////////////



//Outro jeito, chamando funções
// Se trocar mos o yield pelo return, o que estiver abaixo do código return não será executado, ele finaliza a operação nele mesmo
function* geradora6 (){
    yield function(){
        console.log('Vim do y1');
    }

    yield function(){
        console.log('Vim do y2');
    }
}
const g6 = geradora6();
const func1 = g6.next().value; 
const func2 = g6.next().value; 
func1();
func2();