function Produto(nome, preco) { //função construtora inicial
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){ //aumento inicial
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

/*esta função funciona exatamente igual a construtora inicial, porém, como ela é filha da função Produto, além de herdar as propriedades do Produto, 
pode ser acrescentado outras propriedades além daquelas ja existentes - no caso, foi a propriedade de cor*/ 
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco) /*nessa parte está ocorrendo o link com a função construtora Produto: o this se referencia ao "produto" criado com ela, 
    e depois vem os parâmetros da função construtora inicial*/
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); /*o protótipo dos dois foi linkado, tendo como vantagem de que
a alteração do protótipo da Camiseta não altera o protótipo do Produto*/ 
Camiseta.prototype.constuctor = Camiseta; /*estabelece que a função construtora é a Camiseta, e não o produto (sem essa linha de código,
 aparecia que o construtor era o Produto - no node não tá funcionando mas no navegador sim) */

 Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco *(percentual / 100));
 }; //esta função está sobreescrevendo a função de aumento inicial

 function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
 }
 Caneca.prototype = Object.create(Produto.prototype);
 Caneca.prototype.constuctor = Caneca;

 const produto = new Produto('Genérico', 120);
 const camiseta = new Camiseta('Regata', 20, 'Preto');
 const caneca = new Caneca('Caneca', 13, 'Plástico', 5)
 caneca.estoque = 100; //set

 console.log(caneca.estoque) //get
 console.log(caneca);
 console.log(camiseta);
 console.log(produto)

 /*No trecho:

Camiseta.prototype = Object.create(Produto.prototype);
Estamos, claramente, falando que o Camiseta.prototype é um novo objeto vazio que tem como protótipo Produto.prototype.
 Dessa forma, estamos adicionando Camiseta.prototype na cadeia de protótipos de Produto. Por consequência, 
 tudo o que não existir em Camiseta nem em Camiseta.prototype será delegado para Produto.prototype 
 (e assim por diante até chegar no topo da cadeia de protótipos). Por isso vejo o termo delegação como mais adequado para este comportamento.

Novamente, vamos continuar usando o termo "Herança", mas achei que seria interessante que você soubesse disso neste momento. */


