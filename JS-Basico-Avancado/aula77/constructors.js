function Pessoa (nome, sobrenome) {
    //Atributos ou métodos privados = disponíveis apenas no corpo da função, não podendo ser acessados de fora (ex: p1.id)
    const id = 12343;

    const metodoInterno = () => {

    };

    //Atributos ou métodos públicos = podem ser acessados de fora usando a notação de ponto(.)
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Luisa', 'Silva');
const p2 = new Pessoa('Pedro', 'Cruz');

console.log(p2.nome)
p1.metodo()