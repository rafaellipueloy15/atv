
//classe
class Animal {
    constructor(nome) { this.nome = nome; }
}
//objetos
const cachorro = new Animal("Rex");
console.log(cachorro.nome); // Saída: Rex
//atributos
class Carro {
    constructor() { this.cor = "vermelho"; }
}
const meuCarro = new Carro();
console.log(meuCarro.cor); // Saída: vermelho
//metodos
class Pessoa {
    falar() { console.log("adoro serie "); }
}
const pessoa1 = new Pessoa();
pessoa1.falar(); // Saída: adoro serie
//heranca
class Animal { 
    constructor() { this.nome = "Animal"; }
}
class Cachorro extends Animal {}
const dog = new Cachorro();
console.log(dog.nome); // Saída: Animal
//polimorfismo
class Animal {
    fazerSom() { console.log("Som"); }
}
class Gato extends Animal {
    fazerSom() { console.log("Mia!"); }
}
new Gato().fazerSom(); // Saída: Mia!