// Podemos utiliar o objeto literal ou o construtor
// Utilizando o construtor do Objeto

const pessoa1 = new Object;
pessoa1.nome = 'Jhow';
pessoa1.sobrenome = 'Marangone';                                                               //  12:30
pessoa1.idade = 30;
// Podemos usar metodos 
// Neste caso, o "this" apontará para "pessoa1"
pessoa1.falaNome = function(){
    return(`${this.nome} está falando seu nome.`);
}

pessoa1.getData = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}


console.log(pessoa1.nome, pessoa1.sobrenome);
console.log(' ');

console.log(pessoa1.falaNome());
console.log(' ');

console.log(pessoa1.getData());


// Vendo as chaves do objeto utilizando o for
for(let chave in pessoa1){
    console.log(chave);
    console.log(' ');
}

// Vendo o valor das chaves do objeto utilizando o for
for(let chave in pessoa1){
    console.log(pessoa1[chave]);
}


// Deletando um valor
delete pessoa1.nome;

//console.log(pessoa1);
console.log(' ');

