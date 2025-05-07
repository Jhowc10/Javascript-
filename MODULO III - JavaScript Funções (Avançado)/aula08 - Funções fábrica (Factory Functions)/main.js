//Funções fabricas são funções retornam objetos

function criaPessoa(nome, sobrenome) {
    return{
        nome, sobrenome
    };
}
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1);








function criaFrase(nom, sobre) {
    return{
        nom, 
        sobre,

        fala: function(assunto){
            return `${nom} está ${assunto}.`;
        }
    };
}
const p2 = criaFrase('Amanda', 'Pereira');
console.log(p2.fala('falando de JS'));



//this = Serve para acessar elementos dentro de uma função, objeto, etc. Dentro do escopo, ela consegue acessar qualquer elemento, mesmo sem parametro.

function cria(nome1, sobre1, altura, peso) {
    return{
        nome1, 
        sobre1,

        fala: function(assunto){
            return `${nome1} está ${assunto}.`;
        },

        altura: altura,
        peso: peso,

        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);         // Manter o resultado só com duas casas
        }
    };
}
const p3 = cria('Cleide', 'Pereira', 1.5, 55);
console.log(p3.nome1, p3.imc());
const p4 = cria('Maria', 'Joaquina', 1.6, 70);
console.log(p2.fala('falando de JS'));



//A palavra "get" faz uma função paracer um atributo

function cria1(nome2, sobre2, altura2, peso2) {
    return{
        nome2, 
        sobre2,

        //Getter
        get nomeCompleto(){                          // Neste caso, acessamos ela assim: console.log(p1.nomeCompleto) ao inves de 
            return `${this.nome2} ${this.sobre2}`;   // console.log(p1.nomeCompleto())
        },

        //Setter
        set nomeCompleto(valor){               //set = serve para pegar um valor digitado pelo usuario ou dev e atribuir ela na função
            valor = valor.split(' ');         //split() vai pegar o nome e dividir ela nos espaços, por isso os ' ', fara um vetor/array
            this.nome2 = valor.shift();       //shift() vai gravar o primeiro nome do array no objeto nome2 e apagar ela deste array
            this.sobre2 = valor.join(' '); //join() adicionou o sobre nome na variavel sobre2
            console.log(valor);
        },

        fala: function(assunto){
            return `${nome2} está ${assunto}.`;
        },

        altura: altura2,
        peso: peso2,

        imc1(){   
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);         // Manter o resultado só com duas casas
        }
    };
}
const p5 = cria1('Miguel', 'Miranda', 1.90, 90);

//Get 
console.log(p5.nomeCompleto, p5.imc1());   // Neste caso temos duas funções, porem a nomeCompleto foi transformada em atributo
                                           // sendo assim não podemos chamar ela com () no final, como o imc1 que continua uma 
                                           // função

//set
p5.nomeCompleto = 'Jonathas Correia Marangone';   // Neste caso estou adicionando este valor na função nomeCompleto
console.log(p5.nome2);
console.log(p5.sobre2);

//E depois da função feita, basta só ir criando as variáveis e mudando os valores.
