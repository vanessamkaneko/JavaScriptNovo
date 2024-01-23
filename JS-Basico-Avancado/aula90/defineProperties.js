//Object.defineProperties() - para mexer com várias chaves

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave - no caso, faz com que o 'estoque' seja exibido ao dar um print no objeto/ao chamar o objeto/ao fazer um for in, por ex. mesmo não sendo uma variável pública como nome e sobrenome (o nome, por ex., pode ser acessado de fora do objeto com a notação de ponto)
        value: estoque, //define o valor - recebe o valor que está sendo mandado para o atributo estoque
        writable: false, //define se o valor pode ser alterado ou não 
        configurable: false //define se a chave pode ser configurável ou apagável
    }),

    Object.defineProperties(this, {
        nome: {
        enumerable: true,
        value: nome, 
        writable: false, 
        configurable: true
        },

        preco: {
        enumerable: true,
        value: preco, 
        writable: false, 
        configurable: true
        }
    })
}

const produto1 = new Produto('Camiseta', 20, 3)
produto1.estoque = 10; //não muda nada devido ao writable: false
console.log(produto1.estoque)