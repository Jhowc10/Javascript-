//FOR OF

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

//for in - "Baseado na chave podemos pegar o valor"
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
    
}
