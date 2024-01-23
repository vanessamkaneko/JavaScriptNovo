//Setter - usado para definir/alterar o valor de um atributo do objeto
// - vantagens: pode-se determinar validações para o valor do atributo; permite determinar o valor de um atributo sem necessariamente atribuir o valor diretamente no atributo

//Getter - usado para obter o valor de um atributo do objeto

/*Funções setter tem a finalidade de modificar, ou definir (set), o valor de uma variável privada de um objeto baseado no valor passado 
dentro da função setter. Essa mudança poderia envolver cálculos, ou até sobrescrever completamente o valor anterior. */

/* Funções getter tem a finalidade de simplesmente retornar (get) o valor de uma variável privada de um objeto para o usuário sem que o usuário 
acesse diretamente a variável privada. */

/*Getters e Setters ajudam no encapsulamento das propriedades de uma classe. 
Quando é necessário implementar uma regra para mudar ou pegar o valor de uma propriedade, 
utilizamos os getters e setters que basicamente serão funções que intermediarão o acesso à propriedade*/

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: false,

        get: function() {
            return estoquePrivado;
        },

        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Valor inválido')
            }

            estoquePrivado = valor;
        }
    });
}

const produto1 = new Produto('Camiseta', 20, 3);
produto1.estoque = 4;
console.log(produto1.estoque)