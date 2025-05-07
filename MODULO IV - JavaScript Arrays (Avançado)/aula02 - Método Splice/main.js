// Método Splice - Mexe no array

// Indice -      -5       -4       -3         -2        -1    
// Indice +       0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
console.log(nomes);
console.log(' ');

// No primeiro argumento colocamos de qual indice começaremos a alterar, se colocar o, começara do 0, se colocar dois, mexerá do indice 3 em diante
// No segundo parametro, colocamos quantos indices queremos remover, pode ser de 0 a quantidade desejada
// No terceiro paramentro colocamos quantos elementos iremos adicionar

// Estrutura: nomes.splice(indice inicial, delete, elemto a adicionar1, elemto a adicionar2, elemto a adicionar3)

// Retirando o ultimo elemento do array - seria o shift, remove do inicio
const removidos = nomes.splice(3, 1);
console.log(nomes);
console.log(' ');

// Mostrando o elemento excluido, porem esta função, retorna em forma de array
console.log(removidos);
console.log(' ');

// Mostrando o array e o removido
console.log(nomes, removidos);
console.log(' ');

// Com indice negativo - seria o pop, remove do final
const nome = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
const removido = nomes.splice(-2, 1);

console.log(' ');
console.log(nome, removido);
console.log(' ');

// Removendo varios elementos de uma vez
// "Number.MAX_VALUE" e o maior numero que o JS aceita
console.log(Number.MAX_VALUE);
console.log(' ');

const remov = nome.splice(2, Number.MAX_VALUE);
console.log(nome);
console.log(nome, remov);
console.log(' ');

// Adicionando elementos
nome.splice(2, 0, 'Luiz', 'Jonathas');
console.log(nome);
