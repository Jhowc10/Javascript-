axios('pessoas.json')
    .then(resposta => carregaPagina(resposta.data));


function carregaPagina(json){
    const table = document.createElement('table');  // Cria uma tabela, só usa se precisar

    for(let pessoa of json){
        const tr = document.createElement('tr');    // Referente a tabela
        
        let td1 = document.createElement('td');    // Referente a tabela
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');    // Referente a tabela
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');    // Referente a tabela
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}