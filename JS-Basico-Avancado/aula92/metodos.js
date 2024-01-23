//Método úteis para objetos

// --- COPIANDO OBJETOS ---
//Spread operator (...) -> forma mais intuitiva na hora de se copiar informações (mexer na cópia não altera o original)
const produto = { nome: 'Caneca', preco: 1.8 };
const outroProduto = { ...produto, material: 'porcelana'};

outroProduto.nome = 'Prato'
outroProduto.preco = 2.3

console.log(produto)
console.log(outroProduto)

//Object.assign - um novo objeto (representado pelo {}) será criado com o objeto que está sendo mandado (no caso, produto)
const talheres = Object.assign({}, produto, { material: 'inox'})
talheres.nome = 'Talheres';
talheres.preco = 1.5;
console.log(talheres)

// pegando propriedades específicas do objeto
const guardanapo = {nome: produto.nome, preco: produto.preco}
console.log(guardanapo)

//Object.getOwnPropertyDescriptor(objeto, 'propriedade') - retorna as propriedades enumerable, value, writable e configurable
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

//Object.values(objeto) - retorna os valores das chaves do objeto
//Object.keys(objeto) - retorna as chaves do objeto
//Object.entries(objeto) - retorna as chaves do objeto juntamente com os valores num array
console.log(Object.values(produto))
console.log(Object.keys(produto))
console.log(Object.entries(produto))

//Object.entries(objeto) permite a iteração
for(let entry of Object.entries(produto)) {
    console.log(entry)
} //como retorna um array com dois elementos, pode-se fazer desestruturação:

for(let[chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}