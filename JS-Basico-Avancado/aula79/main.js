//Funções recursivas

function chirp( n ) {
    if( n < 1 || isNaN( n ) ) return;
    return n < 2 ? 'chirp' : chirp( n - 1 ) + '-chirp';
  }


//                           Valor de n	                    Retorno da função
// Invocação da função (fora)	3	      n é menor 2? Não. Então invoca a função de novo e aguarda o resultado para concatenar com -chirp.
//Primeira invocação recursiva	2	      n é menor que 2? Não. Então invoca a função de novo e aguarda o resultado 
                                         //para concatenar com -chirp de agora, e o -chirp anterior.
// Segunda invocação recursiva	1	      n é menor que 2? Sim. Então, retorna chirp e volta com esse resultado para concatenar com os resultados
                                         // anteriores que haviam ficado aguardando. Pega esse último chirp, concatena com o penúltimo -chirp, e então, 
                                         //concatena isso com o primeiro -chirp. Resultado final: chirp-chirp-chirp.

function recursiva(max) {
    console.log(max);
    if(max >= 50) return;
    max++;
    recursiva(max);
}

recursiva(5)