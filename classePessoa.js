// Definindo a classe
class Pessoa {
  // O constructor é chamado automaticamente quando criamos um novo objeto
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  // Um método (comportamento da classe)
  saudar() {
    console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`);
  }

  fazerAniversario() {
    this.idade += 1;
    console.log(`Parabéns! ${this.nome} agora tem ${this.idade} anos.`);
  }
}

// Criando uma "instância" (um objeto real baseado na planta da classe)
const aluno1 = new Pessoa("Carlos", 20, "Estudante de TI");
aluno1.saudar();
aluno1.fazerAniversario();