// Escopo lexo = A função reconhece o que a dentro dela e ao redor dela
const nome = 'Luiz';

function falaNome() {
    console.log(nome);   //Se dentro tivesse outra variavel com nome de nome, ela chamaria a variavel de dentro em vez da de fora
}
falaNome();   // Chamada padrão

//Chamando em outra função
function usaFalaNome() {
    falaNome();
}
usaFalaNome();