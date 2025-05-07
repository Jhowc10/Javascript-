// Serve para buscar APIs, Conteudos da internet
// XMLHRequest = Json

/*
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'U', true);

GET = Padrão do navegador.
U   = URL
true = Assimcrono
false = Não assincrono
*/

const request = obj =>{    // AJAX

    // Usado para métodos post, se for metodo GET, deixar em branco.
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();     

     // Evento para carregar a página, e mostra o erro da página.
    xhr.addEventListener('load', () =>{
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);

        }else{
            obj.error({
                code: xhr.status,
                msg: xhr.statusText
            });
        }
    });  
};


document.addEventListener('click', e =>{  // Captura todos os lugares que foram clicados
    const el = e.target;                  // Armazena os cliques na variavel "el"   
    const tag = el.tagName.toLowerCase(); // Todos os cliques a variavel "el", selecionara as tags por nome e as deixará minusculas
                                          
    if(tag === 'a'){                      // Cheka se é a tag "a"
        e.preventDefault();               // Evita ir para o link clicado.
        carregaPagina(el);
    }
});

function carregaPagina(el){
    const href = el.getAttribute('href');  // Pega o conteudo do "href" das tags "a"
    
    const objConf ={
        method: 'GET',
        url: href,

        success(response){
            carregaResultado(response); 
        },

        error(errorText){
            console.log(errorText);
        }
    };

    request(objConf);
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}