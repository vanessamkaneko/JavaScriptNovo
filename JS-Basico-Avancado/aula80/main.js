//Funções geradoras

function* geradoraUm() {
  //Código qualquer...
  yield 'Valor 1';
  //Código qualquer...
  yield 'Valor 2';
  //Código qualquer...
  yield 'Valor 3';
}

const g1 = geradoraUm();
//console.log(g1.next().value); //Retorna Valor 1
//console.log(g1.next()); //Retorna Valor 2, done: false
//console.log(g1.next()); //Retorna Valor 3, done: false
//console.log(g1.next()); //Retorna undefined, done: true

for (let valor of g1) {
  console.log(valor); //o for sabe exatamente quando não há mais valores, faz iteração até o último valor
}

//aqui é um contador infinito - retornará o número na sequência (iniciando do 0) sempre que for chamado
function* geradoraDois() {
  let i = 0;

  while(true) {
    yield i;
    i++;
  }
}
const g2 = geradoraDois();
console.log(g2.next().value); //retorna 0
console.log(g2.next().value); //retorna 1
console.log(g2.next().value); //retorna 2

//Gerador que delega a função para outro
function* geradoraTres() {
  yield 10;
  yield 11;
  yield 12;
}

function* geradoraQuatro() {
  yield* geradoraTres();
  yield 13;
  yield 14;
  yield 15;
}

const g4 = geradoraQuatro();
for(let valor of g4) {
  console.log(valor);
}

//Não precisa ser só string ou number para retornar, pode ser função, por ex
function* geradoraCinco() {
  yield function() {
    console.log('Vim do y1');
  };

  yield function() {
    console.log('Vim do y2');
  };
}

const g5 = geradoraCinco();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1() //retorna Vim do y1
func2() //retorna Vim do y2
