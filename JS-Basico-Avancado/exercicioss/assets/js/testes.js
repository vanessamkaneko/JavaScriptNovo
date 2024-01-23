
function chirp( n ) {
    if( n < 1 || isNaN( n ) ) return;
    return n < 2 ? 'chirp' : chirp( n - 1 ) + '-chirp';
  }

  console.log(chirp(1))

  //////////
  class Aluno {
    constructor(nome, curso, semestre){
        this.nome = nome,
        this.curso = curso,
        this.semestre = semestre
    }
    get nomeAluno(){
        return this.nome
    }
    set nomeAluno(nomeAluno) {
        this.nome = nomeAluno
    }
}

let aluno = new Aluno('Lucas', 'Engenharia', 5)
console.log(aluno.nomeAluno) // get
aluno.nomeAluno = 'Andre' // set
console.log(aluno.nome) 