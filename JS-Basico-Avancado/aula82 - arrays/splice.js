//Método Splice - faz o que pop, push, shift e unshift faz (e mais...)
//Altera o array original (assim como pop e push)
//Também retorna o elemento removido, mas em forma de array (pois pode ser removido mais de 1 elemento)

// Estrutura do splice -> variável.splice(índice atual que inicia, quantos elementos quero remover, addElemento1, addElemento2) ...

//                -5      -4       -3        -2         -1
//                0       1         2         3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
console.log(nomes, removidos)

// ------ SIMULANDO O POP (remove último índice/elemento do array) -------
//const removidos = nomes.splice(4, 1); //remove Júlia
//const removidos = nomes.splice(-1, 1) //usando números negativos: continua removendo Júlia

// ------ SIMULANDO O PUSH (adiciona o elemento no final do array) -------
//nomes.splice(nomes.length, 0, 'Jorge') -> mais fácil usar o push em si

// ------ SIMULANDO O SHIFT (remove o primeiro índice/elemento do array) ------
// const removidos = nome.splice(0, 1) //remove Maria

// ------ SIMULANDO O UNSHIFT (adiciona o elemento no ínicio do array) ------
//nomes.splice(0, 0, 'Paulo', 'Pedro')


//--------------------------------------------------------------------
//const removidos = nomes.splice(3, 2); //remove Gabriel e Júlia
//const removidos = nomes.splice(-2, 2); //usando números negativos: remove Gabriel e Júlia

//Number.MAX_VALUE - remove até o último elemento 
//const removidos = nomes.splice(-3, Number.MAX_VALUE) //inicia no -3 e remove até o final - remove Eduardo, Gabriel e Júlia]

//const removidos = nomes.splice(3, 0, 'Luiz') //no índice 3 é adicionado Luiz, sendo Gabriel índice 4 e Júlia, 5
//const removidos = nomes.splice(3, 1, 'Luiz') //aqui o Gabriel é removido e é adicionado Luiz em seu lugar
//const removidos = nomes.splice(3, 2, 'Ana', 'Liz') //Gabriel e Júlia são removidos e são adicionadas Ana e Liz no lugar


