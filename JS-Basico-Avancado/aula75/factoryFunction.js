function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, 
        sobrenome,

        //Getter - finge ser um atributo qndo na verdade é um método - serve para OBTER valores - o get encapsula valores, impedindo que sejam alterados!
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
            //return `${nome} ${sobrenome}`; //como já são atributos da função, não precisa do this
        },

        //Setter 
        set nomeCompleto(valor) {
            valor = valor.split(' ') //a cada espaço do nome, ele será dividido e retornará um array/vetor -> [ 'Ana',  'Julia',  'Ribeiro' ]
            this.nome = valor.shift(); //remove o primeiro valor do array e retorna o primeiro valor -> aqui o valor irá retornar Ana Kaneko
            this.sobrenome = valor.join(' '); //pega os outros valores que sobraram ([ 'Julia',  'Ribeiro' ]) e separa por um espaço 
        },


        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },

        altura: altura, 
        peso: peso,

        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }

    }
}

const pessoa1 = criaPessoa('Vanessa', 'Kaneko', 1.54, 55);
console.log(pessoa1.imc());
//const pessoa2 = criaPessoa('Ana', 'Silva', 1.70, 67);
//console.log(pessoa2.imc());
pessoa1.nomeCompleto = 'Ana Julia Ribeiro'; //valor que está indo para o setter

console.log(pessoa1.nomeCompleto); //se não fosse um getter: pessoa1.nomeCompleto()
//por causa do setter, o nome completo pôde ser alterado de Vanessa Kaneko para Ana Julia Ribeiro

console.log(pessoa1.nome) //printa Ana
console.log(pessoa1.sobrenome) //printa Julia Ribeiro
console.log(pessoa1.imc())