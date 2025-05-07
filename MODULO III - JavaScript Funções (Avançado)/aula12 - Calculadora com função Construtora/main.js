function Calculadora(){
    this.display = document.querySelector('.display');  //Seleciona a classe "display" no HTML

    this.capturaCliques = () => {                       // Arrow function para capturar evento click      -   (Passo 2.1)  - Executará conforme o btn clicado
        document.addEventListener('click', evento => {  // Tudo o que for clicado no HTML e vai registrar
            const el = evento.target;                   // A varialvel "el" vai armazenar todos os locais clicados

            if (el.classList.contains('btn-num')){      // Se na lista de cliques que está em "el" tiver o batão classe "btn-num", execute o comando
                this.adicionaNumero(el);                
            }
            
            if(el.classList.contains('btn-clear')) this.clear(el); // Mesmo if acima, poré de forma reduzida
            if(el.classList.contains('btn-de'   )) this.del(el);
            if(el.classList.contains('btn-eq'   )) this.realizaConta(el);
        });
    };

    this.inicia = () => {         // (Passo 1.1)
        this.capturaCliques();    // (Passo 2)
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {  // Captura as teclas do teclado
            if(e.keyCode === 13) {           // Se na lista tiver o nume 13 que é "Enter" executará a conta
            this.realizaConta();
            }
        })
    }

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);  // Captura o que está no display e faz a conta se for válido

            if(!conta){
                alert('Conta invalida');
                return;
            }

            this.display.value = conta;

        }catch(e){
            alert('Conta invalida');
            return;    // Garante que se tiver mais codigo abaixo, não execute, termina no return
        }
    };

    // Metodo 
    this.clear = function(el){
        this.display.value = '';     // Vai limpar o display
    }

    this.adicionaNumero = (el) => {  //"el" vem como elemento na arrow function     /    Com arrow function       -      (Passo 3)
        this.display.value += el.innerText; // Paga o valor que está no display "value" e soma com o novo valor "innerText"
        this.display.focus();               // Tira o focp das outras teclas
    }


    this.del =() => this.display.value = this.display.value.slice(0, -1); // Apaga o ultimo numero

    
    
}

const calculadora = new Calculadora; // Chama a função Calculadora
calculadora.inicia();   // Como o JS lê     -    (Passo 1)
