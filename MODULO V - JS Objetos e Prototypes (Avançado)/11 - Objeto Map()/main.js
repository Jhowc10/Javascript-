const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
];


// Em certos momentos, teremos que substituir o Objeto() pelo Map()
// const novasPessoas = {};
// for(const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
//     console.log(id, nome);
// }


// Então, ao invés de usar ocodigo acima, usaremos este abaixo
const novasPessoas = new Map();
for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});  // Usa-se o set
}


// Colocando em forma de array
for(const [identifier, {id, nome}] of novasPessoas){
    console.log(identifier, id, nome);
    //console.log(pessoas);
}

console.log();

for(const pessoas of novasPessoas){
    console.log(pessoas);
}

for(const pessoas of novasPessoas.keys()){  // Voltará só as chaves
    console.log(pessoas);
}

console.log();

for(const pessoas of novasPessoas.values()){  // Volta os valores
    console.log(pessoas);
}

console.log();

console.log(novasPessoas);
console.log();

console.log(novasPessoas.get(2));  // Para exibir um especifico usa-se o get
console.log();

novasPessoas.delete(2);  // Deleta a chave 2
console.log(novasPessoas);