
// Função para validar CPF
function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;   // Se o CPF for diferente, não funcionara
    if(this.cpfLimpo.length !== 11) return false;            // Se o CPF for menor ou maior que 11 não funcionara
    if(this.isSequencia()) return false;                     // Se o CPF for sequencial, retorna false

    const cpfParcial = this.cpfLimpo.slice(0, -2);           // Pega o CPF, menos os digitos, por isso -2
    const digito1 = this.criaDigito(cpfParcial);             // Pega o primeiro digito
    const digito2 = this.criaDigito(cpfParcial + digito1);   // Pega o segundo digito
    const novoCpf = cpfParcial + digito1 + digito2;          // Confere um novo CPF
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = Array.from(cpfParcial);

    let regressivo = cpfArray.length + 1;       // Varialvel de contador regressivo, pega o indice do array e acrescenta + 1 para dar 10
    let total = cpfArray.reduce((ac, val) => {  // val propriedade do typeof e ele é uma string
        //console.log(regressivo, typeof val, regressivo * val);
        ac += (regressivo * Number(val));                 // Como val é string, temos que passar para Number
        regressivo--;
        return ac;
    }, 0);     // Este 0 garante que  sempre começara com o 0

    let digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;
}

ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}


const cpf = new ValidaCPF('705.484.450-52');

if(cpf.valida()){
    console.log('CPF valido');
}else{
    console.log('CPF invalido');
}
