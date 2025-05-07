// Criando um ARRAY
const ALUNOS = ['Luiz', 'Maria', 'João'];

//Acessando um ARRAY
console.log(ALUNOS);

//Acesando um indice de um ARRAY
console.log(ALUNOS[1]);
console.log(ALUNOS[0]);

//Editando um ARRAY
ALUNOS[0] = 'Eduardo';
console.log(ALUNOS);

//Adicionando - Para adicionar, temos que colocar um indice que não tem.
ALUNOS[3] = 'Luiza';
console.log(ALUNOS);
//Outro jeito, já sabendo o indice
ALUNOS[ALUNOS.length] = 'Fábio';
ALUNOS[ALUNOS.length] = 'Luana';
console.log(ALUNOS);
//Um jeito mais prátioco, já adiciona no final do ARRAY
ALUNOS.push('Otávio');

//Descobrindo o tamanho do ARRAY
console.log(ALUNOS.length);

//Adicionando no começo, para isso é necessário mover os outros ARRAY, há uma função para isso
ALUNOS.unshift('Pedro');
console.log(ALUNOS);

//Apagando elementos do fianl de um ARRAY
ALUNOS.pop();
console.log(ALUNOS);

//É possivel uardar o elemento removido em uma variável
let removido = ALUNOS.pop();
console.log(removido);

//Removendo do começo, e podemos também armazenar um uma variável
ALUNOS.shift();
console.log(ALUNOS);

//Podemos apagar um elemento sem alterar o indice, porém, este indice ficará com o valor de vazio
delete ALUNOS[2];
console.log(ALUNOS);

//Pegando alguns elementos do ARRAY
console.log(ALUNOS.slice(0, 3));
console.log(ALUNOS.slice(0, -1));

//Descobrindo se é um ARRAY ou OBJETO
console.log(ALUNOS instanceof Array);
