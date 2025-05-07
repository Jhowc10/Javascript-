class Dispositivo{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + 'já ligado');
            return;
        }
    }

    desligar(){
        if(! this.ligado){
            console.log(this.nome + 'lá desligado');
            return;
        }

        this.ligado = false;
    }
}

const d1 = new Dispositivo('Telefone');
d1.ligar();

console.log(d1);