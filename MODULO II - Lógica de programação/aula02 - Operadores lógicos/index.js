// OPERADORES LÓGICOS 

// && -> AND = E
// As duas expreções tem que ser verdadeiras para retornar verdadeiro
// Só é verdadeira se todas forem verdadeira, se uma for falsa, o resultado será falso.
console.log(true && true);          // true
console.log(true && false);         // false  
console.log(true && true && true);  // true

// || -> OR  = OU
// Só é falsa se todas forem falsa, se uma for verdadeira, o resultado será verdadeiro.
const oor= true  || false;  // true
const orr= false || false; // false

//Exemplo &&
const usuario = 'Luiz';
const senha   = '1234';

const login = usuario === 'Luiz' && senha === '1234';

// !  -> NOT = NÃO 
// Transforma o true em false e o false em true
console.log(!false); // true
console.log(!true);  // false

// Duas negaçções retorna para o valor original
console.log(!!false); // false
console.log(!!true);  // true
