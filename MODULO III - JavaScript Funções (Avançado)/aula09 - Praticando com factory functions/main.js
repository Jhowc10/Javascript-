//Sempre usamos a global "this" paraacessar metodos fora de uma função, bloco, conjunto....

//Criando a função calculadora
function criaCalculadora(){
    return{
        //Atributos
        display:  document.querySelector('.display'),   // Captura a classe "display" no HTML










        //Metodos
        inicia(){                   // Função resumida
            this.cliqueBotes();     // Chamando o metodo cliqueBotões, para podeder ter acesso a ele,usamos a global 
            this.pressionaEnter();
        },

        // Função para habilitar a tecla enter
        pressionaEnter(){
            this.display.addEventListener('keyup', e => {  //Usamos "=>" para não perder o "this"
                if(e.keyCode === 13){  // Se a tecla do techado for = a 13, que é o numero do "ENTER"
                    this.realizaConta();
                }
            })
        },

        clearDisplay(){
                this.display.value = '';  // Se o "btn-clean" for acionado, o valor sera "vazio"
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);  // Vai pegar o valor do display e tirar o ultimo
        },

        realizaConta(){ 
            let conta = this.display.value;

            try{
                conta = eval(conta);  // NÃO É ACONSELHAVEL USAR ESTA FUNÇÃO. Neste caso ele pegará o que tem no display e tentará realizar a conta

                if(!conta){
                    alert('Conta Invalida');
                    return;
                }

                this.display.value = String(conta);

            }catch(e){ //Tentará executar o comando acima, se não conseguir, executará o comando abaixo
                alert('Conta Invalida');
                return;
            }
        },




        cliqueBotes(){
            document.addEventListener('click', function(e){ //Adiciona um evento ao clicar como está "document", o evento é aplicavel a todo o que for clicadono HTML, o "e" é de evento.
            const el = e.target;  //Armazenamos nesta variável tudo o quefoi clicado

            //Aqui selecionamos o que queremos que foi clicado e aplicamoso evento nele, sem aplicar nos demais também
            //contains() = contem - Se na variavel "el" "contains()" = contem a "classList" = classe "btn-num", faça...
                if(el.classList.contains('btn-num')){  
                    this.btnParaDisplay(el.innerText); //innerText vai pegar o valor dele, o texto da classe btn-num, no caso os numeros
                }

                if(el.classList.contains('btn-clear')){ // Se o "btn-clear" for acionado, vai executar o metodo "clearDisplay()"
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){  // Se o "btn-del" for acionado, executa o método apagaUm() 
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }


            }.bind(this));  //Até aqui o this era a "inicial()", ao chgar no metodo "cliqueBotoes" o this passou a ser o "document", pois ele é maisque a variavel "inicial()", usamos ".bind(this)" para manter o this como "inicial()" ao inves de "document" para saber que é o this faça "console.log()"
        },


        btnParaDisplay(valor){
            this.display.value += valor;  //Vai concatenaro valor no display, para mostrar mais de um numero
        }




    };
}

const calculadora = criaCalculadora();
calculadora.inicia();