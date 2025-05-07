// Factory Function
function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {
        falar(){
            console.log(`${this.nome} está falando`);
        },

        comer(){
            console.log(`${this.nome} está comendo`);
        },

        beber(){
            console.log(`${this.nome} está bebendo`);
        },
    };

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });

    return{
        nome,
        sobrenome,

        
    };
}

const p1 = criaPessoa('Luis', 'Otávio');
const p2 = criaPessoa('Maria', 'Fernanda');
console.log(p1);
console.log(p2);