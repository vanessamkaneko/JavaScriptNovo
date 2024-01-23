//Concatenando arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

//const a3 = a1.concat(a2, [7, 8, 9], 'Ana')

//forma mais usada -> spread operator (...)
const a3 = [...a1, ...a2, 'Ana', ...[7, 8, 9]]; //p/ pegar o valor literal do array usa-se o spread tbm
console.log(a3)