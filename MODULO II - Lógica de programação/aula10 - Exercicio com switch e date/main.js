// Selecionando o <h1> dentro da <section>
// . é a classe container é o nome da classe

const h1 = document.querySelector('.container h1');
const data = new Date();
//h1.innerHTML = 'Só pra vc ver';   Chamando o h1, no HTML irá mostrar esta frase.
h1.innerHTML = data.toString();


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana){
        case 0:
            return diaSemanaTexto = 'domingo';   
        case 1:
            return diaSemanaTexto = 'segunda - feira';
        case 2:
            return diaSemanaTexto = 'terça - feira';  
        case 3:
            return diaSemanaTexto = 'quarta - feira';
        case 4:
            return diaSemanaTexto = 'quinta - feira'; 
        case 5:
            return diaSemanaTexto = 'sexta - feira'; 
        case 6:
            return diaSemanaTexto = 'sabado'; 
        default:
            diaSemanaTexto = '';
        }
    }

    function getNomeMes (numeroMes) {
        let nomeMES;
    
        switch (numeroMes){
            case 0:
                return numeroMes = 'janeiro';
            case 1:
                return numeroMes = 'fevereiro';
            case 2:
                return numeroMes = 'março';  
            case 3:
                return numeroMes = 'abril'; 
            case 4:
                return numeroMes = 'maio'; 
            case 5:
                return numeroMes = 'junho'; 
            case 6:
                return numeroMes = 'julho'; 
            case 7:
                return numeroMes = 'agosto'; 
            case 8:
                return numeroMes = 'setembro'; 
            case 9:
                return numeroMes = 'outubro'; 
            case 10:
                return numeroMes = 'novembro'; 
            case 11:
                return numeroMes = 'dezembro';  
            default:
                return numeroMes = '';
            }
        }

    function zeraAesquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function criaDate(data) {
        const diaSemana = data.getDay();
        const numeroMes = data.getMonth();

        const nomeDia = getDiaSemanaTexto(diaSemana);
        const nomeMes = getNomeMes(numeroMes);

        //No return, se querer quebrar a linha, pode usar () e o + , se não tiver () não pode quebrar a linha
        return (`${nomeDia}, ${data.getDate()} de ${nomeMes}` +
                ` de ${data.getFullYear()} ${zeraAesquerda(data.getHours())} :` +
                 `${zeraAesquerda(data.getMinutes())} : ${zeraAesquerda(data.getSeconds())}`);   
    }
    h1.innerHTML = criaDate(data);





    
    //Outro jeito de fazer, jeito resumido
    const h2 = document.querySelector('.container h2');
    const data1 = new Date();

    h2.innerHTML = data1.toLocaleDateString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});







    //Terceiro jeito, utilizando ARRAY
    function getDiaSemanaTexto(diaSemana) {
        const diasSemanas = ['domingo', 'segunda - feira', 'terça - feira', 'quarta - feira', 'quinta - feira', 'sexta - feira', 'domingo'];
        return diasSemanas[1];
    }

    function getNomeMes(numeroMes) {
        const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        return meses[1];
    }
