// ===== Classe Abstrata: Animal =====
function Animal(nome) {
    this.nome = nome;

    this.dizApresentacao = function () {
        console.log("Este é o " + this.nome);
    };
}

// ===== Classe 1: Domestico (herda de Animal) =====
function Domestico(nome, especie, idade, valor) {
    this.especie = especie;
    this.idade = idade;

    // Valor privado
    let _valor = valor;
    let valorArredondado = Math.round(_valor);

    // Método getter do valor
    this.getValor = function () {
        return valorArredondado;
    };

    // Método setter do valor
    this.setValor = function (novoValor) {
        if (typeof novoValor === 'number') {
            _valor = novoValor;
            valorArredondado = Math.round(_valor);
        }
    };

    // Exibe a idade do animal
    this.dizIdade = function () {
        console.log(this.idade + " anos");
    };

    // Aplica desconto padrão de 10%
    this.aplicarDesconto = function () {
        const comDesconto = _valor / 1.1;
        _valor = comDesconto;
        valorArredondado = Math.round(_valor);
    };

    Animal.call(this, nome);
}

// ===== Classe 2: Adocao (herda de Domestico) =====
function Adocao(nome, especie, idade) {
    // Chama o construtor de Domestico com valor fixo R$100
    Domestico.call(this, nome, especie, idade, 100);

    // Sobrescreve o método de desconto
    this.aplicarDesconto = function () {
        if (idade <= 2) {
            // Desconto maior para animais jovens
            const comDesconto = this.getValor() / 1.3;
            this.setValor(comDesconto);
        } else {
            // Desconto menor para animais mais velhos
            const comDesconto = this.getValor() / 1.1;
            this.setValor(comDesconto);
        }
    };
}

// ===== Instâncias de objetos =====
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
