class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + 'Dispositivo já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(this.ligado){
            console.log(this.nome + 'Dispositivo já desligado');
            return;
        }
        this.ligado = false;

    }
}


// Fazendo uma classe filho da classe DispositivoEletronico
// "extends" faz uma extensão, coloca os atributos da classe mãe na classe filha
class Smartphone extends DispositivoEletronico{
// Para chamar atrivutos da classe mãe, escrevemos "super()" e escrevemos todos os que queremos usar, separando por ","
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor(nome, wifi){
        super(nome);
        this.wifi = wifi;
    }

    // Sobrescreve o metodo ligar da classe mãe
    ligar(){
        console.log('Olha, você alterou o método ligar.');
    }

    falaOi(){
        console.log('Oi');
    }
}


const d1 = new DispositivoEletronico('Smatphone ');
// d1.ligar();
d1.desligar();
console.log(d1);
console.log();

const s1 = new Smartphone('Samsung', 'Preto', 'Galax S10');
s1.ligar();
console.log(s1);
console.log();

const t1 = new Tablet('iPad', true);
console.log(t1.ligado);
t1.ligar();
t1.falaOi();
console.log(t1.wifi);