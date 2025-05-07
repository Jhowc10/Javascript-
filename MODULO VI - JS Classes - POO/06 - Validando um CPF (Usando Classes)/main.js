// CPF: 705.484.450-52  ----  070.987.720-03

class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,        // Não pode escrever nela
            enumerable: true,      // Não vai aparecer
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    sequencia(){
        // vai colocar o "0" e repetir a sequencia até o tamanho do "length" ou até o numero desejado
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo; 
    }                                                                

    geraNovoCpf(){
        const cpfSemDigito = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCpf.geraDigito(cpfSemDigito);
        const digito2 = ValidaCpf.geraDigito(cpfSemDigito + digito1);
        this.novoCpf = cpfSemDigito + digito1 + digito2;
    }

    // M´todos estáticos não se usa o "this"
    static geraDigito(cpfSemDigito){
        let total = 0;
        let reverso = cpfSemDigito.length + 1;

        for(let stringNumerica of cpfSemDigito){
            total += reverso * Number(stringNumerica);
            reverso --;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false; 
        if(this.sequencia()) return false;
        this.geraNovoCpf();

        return this.novoCpf === this.cpfLimpo;
    }
}

const validaCpf = new ValidaCpf('070.987.720-03');

if(validaCpf.valida()){
    console.log('CPF válido');
}else{
    console.log('CPF invalido');
}