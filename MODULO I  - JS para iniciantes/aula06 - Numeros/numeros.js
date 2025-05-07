let num1 = 1;
let num2 = 2.5;
let num3 = 10;
let num4 = 10.5879658478

//Concaternando numeros
//toString converte para String temporáriamente
console.log(num1.toString() + num2); 

//Converte definitivamente o numero para String
num1 = num1.toString();

//Convertendo para binário
//Ao colocar o numero entre ()
console.log(num3.toString(2));

//Convertendo as casas decimais, colocamos a quantidade de casas dentro dos (), ele dá uma arredondada.
console.log(num4.toFixed(2));

//Descobrindo se é numero inteiro ou não
console.log(Number.isInteger(num3));

num4 = parseFloat(num4.toFixed(2));  // Pode se usar o Number

