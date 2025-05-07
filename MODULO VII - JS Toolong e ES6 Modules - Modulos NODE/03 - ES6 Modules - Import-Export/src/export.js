// Podemos exportar direto da variável
export const nome = 'Luiz';
export const sobrenome = 'Miranda';
export const idade = 30;
// Se as variaveis não tiver export ela fica privada no modulo
const priv = 'váriavel privada';


// Podemos ter um default por modulo, pode colocar qualquer nome que ela funciona
export default(x, y) => x*y;



export function soma(x, y){
    return x + y;
}

// Podemos exportar redeclarando o nome
// export{nome, sobrenome as sobrenome1, idade, soma, teste};

export class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// Exportando constantes como default
// export {nome as default, sobrenome, idade, soma};
