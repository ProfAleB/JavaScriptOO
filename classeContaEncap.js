class ContaBancaria {
  #saldo = 0;

  constructor(titular) {
    this.titular = titular;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor} realizado.`);
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor} confirmado.`);
    } else {
      console.log("Saldo insuficiente ou valor inválido.");
    }
  }

  exibirSaldo() {
    return `Olá ${this.titular}, seu saldo atual é R$${this.#saldo}.`;
  }
}

const minhaConta = new ContaBancaria("João Silva");
minhaConta.depositar(1000);
minhaConta.sacar(350);

console.log(minhaConta.exibirSaldo());
// minhaConta.#saldo = 1000000; // Erro: Tentar burlar o sistema não funciona aqui!