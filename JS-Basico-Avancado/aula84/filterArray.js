// Arrays - Método Filter - recebe uma função de callback como parâmetro; não altera os valores do array original; sempre retorna um array com a mesma quantidade de elementos ou menos que o array original

//EXEMPLO 1: Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

//*** REDUZINDO O CÓDIGO ****

//const numerosFiltrados = numeros.filter(function(valor) {
//   return valor > 10;
//});

//const numerosFiltrados = numeros.filter((valor) => {
//   return valor > 10;
//});

const numerosFiltrados = numeros.filter(valor => valor > 10) //quando a função tem apenas 1 linha, o return é implícito
// ------------------------------------------------------

//EXEMPLO 2: 

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// - Retorne as pessoas que tem o nome com 5 letras ou mais;
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);

//const pessoasComNomeGrande = pessoas.filter(function(obj) {
// return obj.nome.length >= 5;
//})

// - Retorne as pessoas com mais de 50 anos;
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);

// - Retorne as pessoas cujo nome termina com a letra A;
const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
})

