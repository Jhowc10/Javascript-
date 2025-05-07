// Podemos renomear as variáveis exportadas
// Para importar um default, colocamos o nome que queremos dar antes das {} e depois ,
import defau, {nome as nome1, sobrenome, idade, soma, Pessoa} from './export.js';

/*
    Ou podemos importar todos os dados de uma ves e renoar se quiser

    import * from './export.js';
    import * as todosDados from './export.js';
*/

const nome = 'João';
console.log(nome1, sobrenome, idade);
console.log(nome);
console.log(soma(5, 5));

const p1 = new Pessoa('Luiz', 'Otávio');
console.log(p1);

console.log(defau(5, 5));
