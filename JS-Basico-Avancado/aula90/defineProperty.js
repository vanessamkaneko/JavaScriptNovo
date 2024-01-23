//Object.defineProperty() - para mexer em uma chave específica

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave - no caso, faz com que o 'estoque' seja exibido ao dar um print no objeto/ao chamar o objeto/ao fazer um for in, por ex. mesmo não sendo uma variável pública como nome e sobrenome (o nome, por ex., pode ser acessado de fora do objeto com a notação de ponto)
        value: estoque, //define o valor - recebe o valor que está sendo mandado para o atributo estoque
        writable: false, //define se o valor pode ser alterado ou não 
        configurable: false //define se a chave pode ser configurável ou apagável

    //caso o configurable fosse true, poderia criar novamente o objeto para alterar/configurar o valor das chaves:
    //Object.defineProperty(this, 'estoque', {
    //   enumerable: true, 
    //   value: estoque, 
    //   writable: true, //neste caso, o valor já poderia ser alterado
    //   configurable: false 
    });
}

const produto1 = new Produto('Camiseta', 20, 3)
produto1.estoque = 10; //não muda nada devido ao writable: false
console.log(produto1)

//tanto um como outro exibe as chaves do objeto, sendo o estoque exibido também - e essa exibição é possível porque o enumerable está como true
console.log(Object.keys(produto1));
for(let chave in produto1) {
    console.log(chave)
}
