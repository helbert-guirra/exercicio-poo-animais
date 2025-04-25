// ===== Classe Abstrata: Animal =====
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    dizApresentacao() {
      console.log("Este é o " + this.nome);
    }
  }
  
  // ===== Classe 1: Domestico (herda de Animal) =====
  class Domestico extends Animal {
    #valor; // campo privado
  
    constructor(nome, especie, idade, valor) {
      super(nome);
      this.especie = especie;
      this.idade = idade;
      this.#valor = valor;
    }
  
    getValor() {
      return Math.round(this.#valor);
    }
  
    setValor(novoValor) {
      if (typeof novoValor === 'number') {
        this.#valor = novoValor;
      }
    }
  
    dizIdade() {
      console.log(`${this.idade} anos`);
    }
  
    aplicarDesconto() {
      this.#valor = this.#valor / 1.1;
    }
  }
  
  // ===== Classe 2: Adocao (herda de Domestico) =====
  class Adocao extends Domestico {
    constructor(nome, especie, idade) {
      super(nome, especie, idade, 100); // valor fixo R$100
    }
  
    aplicarDesconto() {
      if (this.idade <= 2) {
        this.setValor(this.getValor() / 1.3); // Desconto maior
      } else {
        this.setValor(this.getValor() / 1.1); // Desconto menor
      }
    }
  }
  
  // ===== Instâncias =====
  const animal1 = new Domestico("Rex", "Cachorro", 3, 500);
  const animal2 = new Domestico("Luna", "Gato", 1, 350);
  const animal3 = new Adocao("Tico", "Cachorro", 5);
  const animal4 = new Adocao("Bidu", "Gato", 1);
  
  // ===== Testes =====
  animal1.aplicarDesconto();
  console.log(`${animal1.nome} valor com desconto: R$ ${animal1.getValor()}`);
  
  animal2.aplicarDesconto();
  console.log(`${animal2.nome} valor com desconto: R$ ${animal2.getValor()}`);
  
  animal3.aplicarDesconto();
  console.log(`${animal3.nome} valor com desconto: R$ ${animal3.getValor()}`);
  
  animal4.aplicarDesconto();
  console.log(`${animal4.nome} valor com desconto: R$ ${animal4.getValor()}`);
  