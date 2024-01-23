let varA = 'A';
let varB = 'B';
let varC = 'C';

// O valor de A = B, valor de B = C e o valor de C = A;
// Assim, a sequência deve ser B C A;

varA = varB;
varB = varC;
varC = 'A';

// Forma mais moderna é trabalhar com arrays:
// [varA, varB, varC] = [varB, varC, varA]


console.log(varA, varB, varC)