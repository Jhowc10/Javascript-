// Indice          0         1        2
const nomes = ['Eduardo', 'Maria', 'Joana','Wallace', 'Rosana'];
console.log(nomes);
console.log(' ');

// Tudo o que acontecer em "nomes refletirá em "novo", funciona como um espelhamento
const novo = nomes;
console.log(novo);  
console.log(' ');   

// O que acontecer um "nomes" ou em "copia" não afetará um ou outro, só afetara o que foi mudado
// porque o uso do sfred "..." realiza um copia individual
const copia = [...nomes]; 
console.log(copia);  
console.log(' '); 
                     
// Substitui o indece 2 "Joana" para "João";
nomes[2] = 'João';     
console.log(nomes);
console.log(' ');

// Deleta um valor, e fica um elemento vaziu, o indice não altera
delete nomes[4];       
console.log(nomes);
console.log(' ');

// Deleta o ultimo elemento/indice
// pop() = deleta o ultimo elemento   -  shift() = deleta o primeiro elemento
nomes.pop();
console.log(nomes);  
console.log(' '); 

// Mostra a quantidade de indices de um array
console.log(nomes.length); 
console.log(' '); 

//Podemoa armazenar um valor removido a uma variáve
// pop() = deleta o ultimo elemento   -  shift() = deleta o primeiro elemento
const removido = nomes.shift();
console.log(nomes);
console.log(nomes, removido);
console.log(' ');

// Adicionando elementos
// push()    = adiciona elementos no final   
// unshift() = adiciona um elemento no inicio, NÃO ´´E MUITO ACONSELHAVEL, AINDA MAIS EM ARRAYS GRANDES, pois ele desloca os elementos, muda os indices deles
nomes.push('Jonathas');
nomes.unshift('Tati');
console.log(nomes);
console.log(' ');

// Fatiando um Array, pegando valores do meio
// slice() = Dentro dos () do slice, colocamos apenas os valores desejados
// Pode se também usar o negativo
const fatia = nomes.slice(1, 3);
const fatia1 = nomes.slice(1, -1);
console.log(fatia);
console.log(fatia1);
console.log(' ');

// Convertendo um Array em uma string
// join() = Transforma arrays em string, para separar, entre os () colocamos o espaço ' ', ex.: (' '), também pode se usar , (','), . ('.')
const paraString = nomes.join( ' ');
console.log(paraString);
console.log(' ');



////////////////////////////////////////////////////



// As instruções abaixo serve para String, Objetos, Funções, Números...
// A criação do Array abaixo é o mesmo criado acima, porem criado de modo difrente, é conhecido como "Array Literal"
// Utilizando construtor

const nomes1 = new Array('Eduardo', 'Maria', 'Joana');
console.log(nomes1);
console.log(' ');


//////////////////////////////////////////////////////////



//Convertendo string em um Array
const nome3 = 'Jonathas Coreia Marangone';
console.log(nome3);

// split() = transforma string em Array, entre () colocamos ' ', informando que vamos separar por espaços
// Para separar por , fazemos split(',') ou por pontos fazemos ('.')....
const nome4 = nome3.split(' ');
console.log(nome4);




