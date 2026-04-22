// Classe Base
class Animal {
    fazerSom() {
        console.log("O animal faz um som genérico...");
    }
}

// Subclasse 1
class Cachorro extends Animal {
    fazerSom() {
        console.log("O cachorro diz: Au Au! 🐶");
    }
}

// Subclasse 2
class Gato extends Animal {
    fazerSom() {
        console.log("O gato diz: Miau! 🐱");
    }
}

// --- O Polimorfismo em ação ---

const meusAnimais = [new Cachorro(), new Gato(), new Animal()];


for (let i = 0; i < meusAnimais.length; i++) {
//     // Chamando os métodos do objeto atual
    meusAnimais[i].fazerSom();
}


