// Superclass
// Função construtora para conta poupança
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// Métodos
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo Insuficiente, seu saldo é de R$${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Ag/CC: ${this.agencia} / ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.depositar(10);
conta1.sacar(30);
// console.log(conta1);
console.log();




////////////////////////////////////////////////////////
// Função construtora para conta Corrente
function ContaCorrente (agencia, conta, valor, limite){
    Conta.call(this, agencia, conta, valor);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);  // Acessa o prototype da função conta
ContaCorrente.prototype.constructor = ContaCorrente;       // Atribui a ContaCorrente o prototype de Conta

// Metodos
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo Insuficiente, seu saldo é de R$${this.saldo.toFixed(2)}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};



///////////////////////////////////////////////
// Função construtora para conta Poupança
function ContaPoupanca(agencia, conta, valor){
    Conta.call(this, agencia, conta, valor);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);  // Acessa o prototype da função conta
ContaPoupanca.prototype.constructor = ContaPoupanca;       // Atribui a ContaCorrente o prototype de Conta

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);
console.log();



const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);
