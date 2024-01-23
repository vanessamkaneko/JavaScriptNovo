// Map - assim como no filter, também recebe um função de callback como parâmetro, como parâmetros recebe: valor/obj, índice e array
// não altera os valores do array original (mas se quiser, tem como) - retorna um array com novos valores baseados nos valores originais (mas sempre um array com o mesmo número de elementos)

//EXEMPLO 1: Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

//EXEMPLO 2: Para cada elemento:

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];


// - Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(obj => obj.nome);

// - Remova apenas a chave "nome" do objeto
const idades = pessoas.map(obj => ({ idade: obj.idade}));
//OU: const idades = pessoas.map(obj => delete obj.nome);

// - Adicione uma chave id em cada objeto
const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
});

//foi necessário usar o spread operator para que o objeto original não fosse alterado; da forma abaixo ocorreria essa alteração:

//const comIds = pessoas.map(function(obj, indice) {
//    obj.id = indice;
//    return obj;
//});  

console.log(comIds)

