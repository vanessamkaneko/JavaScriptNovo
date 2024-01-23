const nome = 'Vanessa';
const sobrenome = 'Kaneko';
const idade = 25;
const peso = 55;
const altura = 1.54;
const anoAtual = 2023;
let imc;imc = peso / (altura * altura);
let anoDeNascimento;


anoDeNascimento = anoAtual - idade



console.log(imc)
console.log(anoDeNascimento)
console.log(nome + ' ' + sobrenome +' tem ' + idade + ' anos, ' + altura + ' de altura, ' + imc + ' de IMC e nasceu no ano de ' + anoDeNascimento +'.')
console.log(`${nome} ${sobrenome} tem ${idade} anos, ${altura} de altura, ${imc} de IMC e nasceu no ano de ${anoDeNascimento}.`) //Template Strings (mais legível, fácil e simples!!!)