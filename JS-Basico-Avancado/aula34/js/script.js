//EXERCÍCIO: CAPTAR AS INFORMAÇÕES ENVIADAS NO FORMULÁRIO E ADICIONÁ-LOS EM UM ARRAY EM FORMATO DE OBJETO

function meuEscopo() {
    const formulario = document.querySelector('.form'); // o elemento com a classe .form foi selecionado
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();  // o comportamento de atualizar a page sempre que houver o envio do formulário será evitado 
        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
        const idade = formulario.querySelector('.idade');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
            idade: idade.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` + `${peso.value} ${altura.value} ${idade.value}</p>`;

    };

    formulario.addEventListener('submit', recebeEventoForm); // é adicionado um "escutador de evento" no elemento selecionado -> no caso,
}                                                           // ...sempre que houver o envio do formulário, a função recebeEventoForm é executada | essa é a forma mais moderna
meuEscopo();






//formulario.onsubmit = function (evento) {
//    evento.preventDefault();                       // o comportamento de atualizar a page sempre que houver o envio do formulário será evitado (forma antiga)
//    alert(1)
// };
