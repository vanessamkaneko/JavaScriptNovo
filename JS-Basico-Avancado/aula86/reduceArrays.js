// Reduce - mais utilizada para reduzir o array para um único elemento; também recebe uma função de callback
//estrutura da função callback: function(acumulador, valor, indice, array)

//********* Some todos os números (REDUCE) **********
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    acumulador += valor; //a cada iteração, adiciona ao acumulador o elemento do próximo índice (que é o valor)
    return acumulador;
}, 0); //valor inicial = 0; caso o valor inicial não for colocado, o primeiro item do array torna-se o valor inicial

// *****************************************************

//Retorne um array com os pares (funcionando como Filter - não recomendado usar o reduce com esse fim)
const numerosPares = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
console.log(numerosPares)

//Retorne um array com mo dobro dos valores (funcionando como Map - não recomendado usar o reduce com esse fim)
const numerosDobrados = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

//Retorne a pessoa mais velha (REDUCE)

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
})

//como não está sendo mandado um valor inicial, o acumulador torna-se o primeiro elemento (no caso, o Luiz) e o valor torna-se da Maria em diante
//o Luiz é o acumulador até a comparação com a Letícia, ao comparar com a Rosana, como é a mais velha, o valor é que é retornado e então o acumulador passa a ser a Rosana
//LÓGICA: quem for mais velho termina sendo o acumulador

console.log(maisVelha)
