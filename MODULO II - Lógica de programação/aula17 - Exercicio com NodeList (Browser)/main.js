
//Colocando a cor do body nos p de fundo e deixando as letras brancas

const paragrafos = document.querySelector('.paragrafos');  //Selecionamos pela class a div paragrafos
const ps = paragrafos.querySelectorAll('p');               //Agora selecionamos todos os p

//Este comando getComputerStyle só funciona no Node, entre () colocamos o elemento desejado
const estilosBody = getComputedStyle(document.body); //No caso de pegar o body, digitamos document.body
const color = estilosBody.backgroundColor;
console.log(color);





for (let p of ps){ //Neste for, criamos uma variável de npme p e atribuimos a const ps nela, "of" retornará os valores
    p.style.backgroundColor = color;
    p.style.color = 'white';
}