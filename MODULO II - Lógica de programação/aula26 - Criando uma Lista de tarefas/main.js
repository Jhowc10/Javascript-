const inputTarefa = document.querySelector('.inputTarefa');    // Selecionando o input
const btnTarefa   = document.querySelector('.btnTarefa'  );    // Selecionando o botão
const tarefas     = document.querySelector('.tarefas'     );    // Selecionando o lista/<ul>




function criaLi() {
    const li = document.createElement('li');  //Cria o elemento 'li' dentro da 'ul'
    return li; //Retorna no li 
}


//Ativando a tecla 'enter' para enviar
inputTarefa.addEventListener('keypress', function(e){ //keypress = evento de tecla precionado
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;  // Evitar enviar se o input estiver vazio.
        criaTarefa(inputTarefa.value); 
    }
});


//Função para limpar o input assim que enviar
function limpaInput() {
    inputTarefa.value = '';  //Manterá o input vazio assim que for enviado
    inputTarefa.focus();     // Mantem o cursor piscando dentro do input
}


//criando um botão de apagar
function criaBotaoApagar(li) {   //'li' é o lugar que o botao irá ser adicionado
    li.innerText += ' ';         //Para dar um espaço entre o texto no 'li' e o botão 
    const botaoApagar = document.createElement('button');  // Cria um botão
    botaoApagar.innerText = 'Apagar';  //Coloca o nome no botão
    //botaoApagar.classList.add('apagar'); //Podemos fazer assim para por uma classe ou
    botaoApagar.setAttribute('class', 'apagar');  //Adicionamos uma classe, esta é a melhor maneira
    li.appendChild(botaoApagar);   //Adicionamos o botão  - appendChild adicio o elemento no HTML
}


//Capturando o evento dquando clicar no botão, com função anonima, isso é padrão. e = event
btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return;  // Evitar enviar se o input estiver vazio.
    criaTarefa(inputTarefa.value);   // Captura o que estiver no input ao clicar no botão e envia para esta função
});


function criaTarefa(textoInput) {  //Função que exibira o que é capturado no input
    const li = criaLi();  //Coloca o que foi capturado no 'input' dentro do 'li'
    li.innerText = textoInput;  //Imprime o 'li' junto com o que está dentro dele, o 'input'
    tarefas.appendChild(li);  //Exibira o resultado dentro da 'ul' no HTML
    limpaInput();   // Assim que terminar a tarefa, esta função limpará o input
    criaBotaoApagar(li);   //Adicionamos o botão criado ao lado do 'li'
    salvarTarefa();  //Salva os dados
}

//Adicionando a funcionalidade apagar no botão criado na função criaBotaoApagar
document.addEventListener('click', function(e){ //Captura o evento ao clicar
    const el = e.target;    
    if(el.classList.contains('apagar')){  //Checa se realmente é o botão apagar que estásendo acionado
        el.parentElement.remove(); //Remove o li inteiro
        salvarTarefa(); //Ao adicionar a função salvarTarefa aqui, podemos apagar no 'local storage' também.
    }
});


function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li'); //tarefa = Pega tudo que está dentro da 'ul'. querySelectorAll = Seleciona todas as classes
    const listaDEtarefas = [];  //Criamos um ARRAY

    for(let tarefa of liTarefas){  // Percorre o ARRAY
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '');  //Renomeando o botão apagar para ele não aparecer
        listaDEtarefas.push(tarefaTexto);  //Joga este texto dentro da lista de tarefas, jogando no ARRAY
    }
    const tarefasJSON = JSON.stringify(listaDEtarefas); //Transforma o ARRAY em Strings, 
    localStorage.setItem('tarefas', tarefasJSON);  //Serve para salvar dados, entre os () se coloca o que deseja salvar e recuperarnovamente, só se pode salvar Strings, salva no Local storage . setItem = Salva
}

//Vai ler as tarefas e joga-las novamente no HTML quando sair e entrar novamente no pagina
function tarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');  //getItem = recupera os dados
    const listaDEtarefas = JSON.parse(tarefas);   //Retorna as Strings para ARRAY

    for(let tarefa of listaDEtarefas){
        criaTarefa(tarefa)
    }
}
tarefasSalvas();








