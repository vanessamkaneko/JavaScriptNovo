const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //índice 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'section', texto: 'Frase 3'}, // 2
    {tag: 'footer', texto: 'Frase 4'}, // 3
];

const container = document.querySelector('.container');
const bloco = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; //elementos[i] dá o valor de cada índice (da tag e texto)
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    //tagCriada.innerText = texto;

    tagCriada.appendChild(textoCriado);
    bloco.appendChild(tagCriada);
}

container.appendChild(bloco);