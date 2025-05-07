// FOR OF

const nome = ['Luiz', 'Otávio', 'Henrique'];

//Exemplo com o for classico
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);  // Pegando cada letra da String
}

//Exemplo com for in
for (let i in nome){
    console.log(nome[i]);
}

//Agora com o for of
for (let valor of nome){
    console.log(valor);
}

//forEach
nome.forEach(function(valor, indice) {
    console.log(valor, indice);
});