/*
 Operador ternário  "? :"
 condição ? 'Valor true' : 'Valor false';

 Em alguns casos, podemos subistituir os if else por este operador

 */

 const pontuacaoUsuario = 999;

 // Ao invés disso
 if(pontuacaoUsuario >= 1000){
    console.log('Usuário VIP');
 }else{
    console.log('Usuário Normal');
 }

 //Resumimos assim
const pontuacao = 1000;
const nivelUsuario = pontuacao >= 1000 ? 'Usuário VIP!' : 'Usuário Normal!';
console.log(nivelUsuario);


// Cetando uma variável
const corUsuario = null;
const corPadrao  = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
