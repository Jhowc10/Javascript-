const falar = {
    falar(){
        console.log(`${this.nome} está falando`);
    }
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo`);
    }
}
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo`);
    }
}



// Podemos jogar no prototype assim ou 
const pessoaPrototype = {...falar, ...comer, ...beber};
// Desta maneira
const pesPrototype = Object.assign({}, falar, comer, beber);



function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Luis', 'Otávio');
const p2 = criaPessoa('Maria', 'Fernanda');
console.log(p1);
console.log(p2);