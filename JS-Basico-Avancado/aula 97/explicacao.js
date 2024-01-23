//Exercício de validação de CPF - explicação do algoritmo do CPF

/* 705.484.450-52    070.987.720-03

1. Pegar primeiros 9 dígitos do CPF e multiplicar cada um por um sequência regressiva (de 10 a 2) para gerar o primeiro dígito após o traço (-)

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237 (soma total)

11 - (237 % 11) = 5 (Primeiro dígito) -> caso for > 9, será considerado 0
      resto da divisão entre o total e 11

2. Pegar novamente os primeiros 9 dígitos juntamente com o dígito encontrado e multiplicá-los novamente, mas começando de 11 e indo até 2
7x  0x  5x  4x  8x  4x  4x  5x  0x 5x (primeiro dígito (5) incluso)
11  10  9   8   7   6   5   4   3  2
77  0   45  32  56  24  20  20  0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito) -> caso for > 9, será considerado 0

*/

let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '') //expressão regular que substitui TUDO que não for número -> no caso, será substituído por nada/vazio. lembrar que o retorno continua sendo STRING
console.log(cpfLimpo)