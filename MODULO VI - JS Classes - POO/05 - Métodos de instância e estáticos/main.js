// Métos estáticos são aquele que usamos para acessar na classe sem instancia-las

// Podemos colocar funções que estão fora da classe dentro dos metodos construtores que estão dentro da classe, basta coloca-los dentro do construtor e ao instanciar a classe a função também aparecerá

function teste(){
    console.log("Este é o meu teste.");
}


class ControleRemoto{
    constructor(tv){                // Note que o volume não está dentro dos ()
        this.tv = tv;
        this.volume = 0;
        teste();
    }

    // Método de instância
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }

    // Método estático
    static trocaPilhas(){
        console.log("Trocando pilhas");
    }

    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
console.log(controle1);
console.log();

ControleRemoto.trocaPilhas();   // Acessando o método estático
console.log();

console.log("A soma dos numeros são: " + ControleRemoto.soma(5, 5));
