// Utilizando Number() e envolvendo o prompt, convertemos ele para String
const numero = Number(prompt('Digite o seu número')); 

//Convertendo String para Number, pois tudo que é digitado no prompt é String
//se em vez de const tivesse let, poderiamos fazer:
//--------numero = Number(numero)------//



const numeroTitulo =  document.getElementById("numero");
const texto =  document.getElementById("texto");


//Para tirar o plaholder, ou adicione numeroTitulo.innerHTML = " "; ou não colocar o + antes do igual no próximo comando
//Sempre usar += para concatenar
numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML  = `<p>A raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casa decimais ${numero.toFixed(2)}.</p>`;


