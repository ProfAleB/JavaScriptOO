// Classe base (Pai)
class Automovel {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}

// Classe filha (Herança)
class Carro extends Automovel {
    constructor(marca, modelo, ano, portas) {
        // 'super' chama o construtor da classe pai
        super(marca, modelo, ano); 
        this.portas = portas;
    }

    exibirDetalhes() {
        // Sobrescrita de método: aproveita o pai e adiciona algo novo
        return `${super.exibirDetalhes()}, Portas: ${this.portas}`;
    }
}

// Classe filha (Herança)
class Moto extends Automovel {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }
}

// Testando o código
const meuCarro = new Carro("Toyota", "Corolla", 2024, 4);
const minhaMoto = new Moto("Honda", "CB 500", 2023, 500);

console.log(meuCarro.exibirDetalhes()); // Toyota Corolla, Ano: 2024, Portas: 4
console.log(minhaMoto.exibirDetalhes()); // Honda CB 500, Ano: 2023