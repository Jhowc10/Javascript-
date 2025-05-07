//Break e Continue

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Ele chega no numero 2 vai pula ele continuar do proximo, sempre é importante colocar antes da ação que esta executando.
//Pode ter quantos continues quiser

for(let numero of numeros){
    

    if(numero === 2){
        console.log('Pulei o numero 2');
        continue;
    }
    

    if (numero === 7){
        console.log('Numero 7 encontrado');
        break;
    }
    
}

