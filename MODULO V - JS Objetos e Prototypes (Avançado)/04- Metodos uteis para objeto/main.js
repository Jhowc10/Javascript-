/*
    Object.keys                                       = Retorna as chaves do objeto
    Object.values                                     = Ao contrário do "keys" ele mostra só os valores
    Object.entries                                    = Lê os dois, chaves e valores
    Object.assing(des, any)                           = Copia objeto
    ... (spread)                                      = Copia objeto - Melhor jeito
    Object.freeze()                                   = Congela o objeto, impede que ele seja alterado/modificado, deletar/apagar....
    Object.defineProperties                           = Define várias propriedades
    Object.defineProperty                             = Define uma propriedade
    Object.getownPropertyDescriptor (o, 'prop')       = Descreve a propriedade, nos diz o que a chave é
*/



// ... (spread)
// Copia o objeto, sendo assim ao modificar o objeto não estaemos mudando a variavel que copiou, ou vice versa
// Alem de copiar também acrescentar, basta colocar o valor apos o objeto copiado separando-os por " , "
const produto = {nome: 'Caneca', preco: 1.8};
Object.freeze(produto);                         // Impede de modificar o objeto
const copia   = {...produto};
const caneca  = {...produto, material: 'Porcelana'};


console.log(caneca);
console.log(' ');



///////////////////////////
// Object.assing(des, any)
// Outro mode de copiar um objeto
// Alem de copiar também acrescentar, basta colocar o valor apos o objeto copiado separando-os por " , " e entre "{}"
const copia1  = Object.assign({}, produto);
const caneca1 = Object.assign({}, produto, {material: 'Metal'})
console.log(copia1);
console.log(' ');

console.log(caneca1);
console.log(' ');





//////////////////////////////////////////////
// Object.getownPropertyDescriptor (o, 'prop')
// Descreve a propriedade
console.log(Object.getOwnPropertyDescriptors(produto, 'nome'));
console.log(' ');





/////////////////
// Object.values
console.log(Object.values(produto));
console.log(' ');





///////////////////
// Object.entries  
console.log(Object.entries(produto));
console.log(' ');

for(let [chave, valor] of Object.entries(produto)){
    console.log(chave, valor);
}