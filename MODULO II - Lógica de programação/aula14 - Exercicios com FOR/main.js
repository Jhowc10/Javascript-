const elementos = [
    {tag: 'p',       texto: 'Qualquer texto que você quiser'},
    {tag: 'div',     texto: 'Frase 2'},
    {tag: 'footer',  texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

//querySelector seleciona a primeira classe que encontrar, para escolher a classe, colocar a classe dentro do ().
const container = document.querySelector('.container'); 
const div = document.createElement('div'); // Cria um elemento div. 

for (let i = 0; i < elementos.length; i++) {        // Laço para exibir as frases, coloca estes elementos dentro da div
    let {tag, texto} = elementos[i];
    const tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;                    //Ou innerText
    div.appendChild(tagCriada);
};

container.appendChild(div);  //Coloca a div dentro do container, no caso, dentro da section no HTML


