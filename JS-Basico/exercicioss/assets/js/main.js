// número é divisível por 3 = Fizz
// número é divisível por 5 = Buzz
// número é divisível por 3 e 5 = FizzBuzz
// número não divisível por 3 e 5 = retorna o próprio número
// checar se o número realmente é um número = retorna o próprio número
// use a função com númeeros de 0 a 100

function fizzBuzz (num) {
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
   
    return num;
}

console.log('a', fizzBuzz('a'))


for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}