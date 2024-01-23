//Forma literal para criar um objeto
const pessoa = {
    nome: 'Vanessa', //chave nome
    sobrenome: 'Kaneko' //chave sobrenome
};

console.log(pessoa.nome) //maneira 1 de acessar o valor das chaves - notação de ponto
console.log(pessoa['nome']) //maneira 2 - notação de colchetes -> é interessante no sentido de poder utilizar valores dinâmicos:

const chave = 'nome';
console.log(pessoa[chave])

//Outra forma: com construtor
const pessoa1 = new Object();
pessoa1.nome = 'Vanessa';
pessoa1.sobrenome = 'Kaneko';

//deletar chaves:
delete pessoa1.nome;

//Constructor
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    //daqui pra cima seria possível manipular
    Object.freeze(this); 
    //isso faz com que nenhum objeto feito por essa função tenha o valor das chaves alterado, ou sejam criadas funções, por ex. só seria possível manipular essa função antes da linha do freeze - o objeto realmente fica travado, não podendo criar/deletar/alterar nada
}

const p1 = new Pessoa('Júlio', 'Cruz');
p1.nome = 'Nana' //por causa do freeze, essa alteração não ocorre
const p2 = new Pessoa('Eliane', 'Nunes');

console.log(p1)

