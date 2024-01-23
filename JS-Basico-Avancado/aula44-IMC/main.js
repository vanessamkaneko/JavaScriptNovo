function pegaFormulario () {
    const formulario = document.querySelector('.form');
    formulario.addEventListener('submit', valorInputs)
}



function valorInputs (evento) {
    evento.preventDefault();
    const formulario = document.querySelector('.form');
    const peso = formulario.querySelector('#peso');
    const altura = formulario.querySelector('#altura');
    const imc = calculoImc (peso.value, altura.value/100)
    const infoImc = resultadoDoImc(imc);
    const resultado = document.querySelector('.resultado-escondido');
    resultado.innerHTML = `Seu imc é ${imc}. ${infoImc}`
    resultado.style.display = `block`
}

function calculoImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

function resultadoDoImc (imc) {
    if (imc < 18.5) {
        return `Abaixo do peso`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        return `Peso normal`;
    } else if (imc >= 25 && imc <= 29.9) {
        return `Sobrepeso`;
    } else if (imc >= 30 && imc <= 34.9) {
        return `Obesidade grau 1`; 
    } else if (imc >= 35 && imc <= 39.9) {
        return `Obesidade grau 2`;
    } else {
        return `Obesidade grau 3`;
    }
}

pegaFormulario()