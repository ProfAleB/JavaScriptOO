// Definindo a classe Aluno
class Aluno {
    #matricula;
    constructor(nome, matricula, notas) {
        this.nome = nome;
        this.#matricula = matricula;
        this.notas = notas; // Esperamos um array de números
    }

    get matricula(){
        return this.#matricula;
    }

    set matricula(novaMatricula) {
        if (novaMatricula.length > 0) {
            this.#matricula = novaMatricula;
            console.log(`Matrícula de ${this.nome} atualizada com sucesso!`);
        } else {
            console.error("Erro: A matrícula não pode ser vazia.");
        }
    }

        // Método para calcular a média do aluno
    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }

    // Método para verificar a situação acadêmica
    obterStatus() {
        const media = this.calcularMedia();

        if (media >= 7) {
            return "Aprovado(a) ✅";
        } else if (media >= 5) {
            return "Em Recuperação ⚠️";
        } else {
            return "Reprovado(a) ❌";
        }
    }

    // Método para exibir informações formatadas
    exibirRelatorio() {
        console.log(`--- Relatório do Aluno: ${this.nome} ---`);
        console.log(`Matrícula: ${this.#matricula}`);
        console.log(`Média Final: ${this.calcularMedia().toFixed(2)}`);
        console.log(`Status: ${this.obterStatus()}`);
        console.log('-------------------------------\n');
    }
}

// --- Interagindo com os objetos ---

// 1. Criando uma lista (Array) de alunos
const turma = [
    new Aluno("Ana Silva", "DS001", [8.5, 9.0, 7.5]),
    new Aluno("Bruno Souza", "DS002", [5.0, 6.0, 4.5]),
    new Aluno("Carla Dias", "DS003", [3.0, 4.0, 2.5])
];


turma[1].matricula = "DS0009"

console.log(turma[1].matricula);

for (let i = 0; i < turma.length; i++) {
//     // Chamando os métodos do objeto atual
    turma[i].exibirRelatorio();
}