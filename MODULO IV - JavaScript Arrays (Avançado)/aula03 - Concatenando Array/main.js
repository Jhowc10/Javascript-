// Juntando dois arrays
// Funciona também com objetos

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];

console.log(num1);
console.log(num2);
console.log(' ');

// Contatenando
// Para isso utilizamos o "concat()"
const concate = num1.concat(num2);
console.log(concate);
console.log(' ');

// utilizando o "concat()", também podemos adicionar arrays literais e indice
const concate1 = num1.concat(num2, [11, 12, 13], 'Jonathas');
console.log(concate1);
console.log(' ');


// Concatenando com spread "..."
const num3 = [...num1, ...num2]; 
console.log(num3);
console.log(' ');

// Adicionado valores
const num4 = [...num1, 11, 12, 13, ...num2, 'Jonathas', ...[1, 4, 5]];
console.log(num4);

