function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        }
    })
}

ValidaCPF.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2) /*pegando os 9 primeiros dígitos do cpf*/ /*cpfParcial - variável*/
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) /*cpfParcial - parâmetro*/ {
    const cpfArray = Array.from(cpfParcial); //cada dígito é transformado num elemento/índice do array criado (para ser manipulado)
    
    let regressivo = cpfArray.length + 1 //p/ determinar se a contagem iniciará no 11 ou 10 (9 elementos no array - inicia no 10, 10 elementos, inicia no 11)
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--; //conta de trás pra frente
        return ac;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito); //deixa em String para poder concatenar os 9 dígitos (cpfParcial) com o digito1 e digito2
};

ValidaCPF.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length); //pega o primeiro dígito e repete 11x
    return sequencia === this.cpfLimpo;
}

const cpf = new ValidaCPF('111.111.111-11');

if(cpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}
