
//try

try{
    //Executado quando não há erros
}catch(e){
    //Executado quando há erros
}finally{
    //Sempre será executado, mas podemos omiti-lo
}

/////////////////////////////////////////////////////////////////

try{
    console.log(naoExito);       
}catch(erro){
    console.log('naoExisto não existe');
    console.log(erro);           
}






//throw
function soma(x, y) {
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números.');
    }
    return x + y;
}

//Capturando o erro
try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}catch(erro){
    console.log('ERRO');
}




function retornaHora(data) {
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }
    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',    // Deixa sempre com dois digitos
        minute: '2-digit',
        seconds: '2-digit',
        hour12: false    //Isso deixa a hora no formato de 24h
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(); //Se aqui estiver errado, o TypeError enviará a mensagem
    console.log(hora);
}catch(erro){
    console.log('Erro');
}finally{
    console.log('Tenha um bom dia');
}