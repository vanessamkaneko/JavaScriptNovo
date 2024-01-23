function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(100)
console.log(p1)

//Objeto literal (sem ser com o construtor)
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype) /*por ser um objeto literal, não tinha como reaproveitar as funções do protótipo da função construtora, para isso
é necessário o uso do setPrototypeOf */

/* const p3 = Object.create(Produto.prototype) //cria o objeto e já seta o protótipo
p3.preco = 113;
p3.aumento(10)
console.log(p3) */

/*criando o objeto com o protótipo e suas configurações: */ 
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },

    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
});

p3.aumento(10)
console.log(p3)

