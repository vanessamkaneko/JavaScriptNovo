const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) { //o keycode do Enter é 13
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar'); //botaoApagar receberá classe chamada apagar
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
};

btnTarefa.addEventListener('click', function() {
    if(!inputTarefa.value) return; //evita que se o campo estiver em branco, seja enviado - pela lógica, poderia ser inputTarefa.value === '', mas isso avalia como false - dessa forma que foi feita, lê-se "se for diferente do valor do input, ou seja, se receber algum valor que não seja em branco, retorne este valor"
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
     const el = e.target; //captura elemento clicado

     if(el.classList.contains('apagar')) {
        el.parentElement.remove(); //se el clicado tiver classe apagar, será removido o elemento pai (o li criado)
        salvarTarefas() // faz com que os dados do localStorage sejam atualizados qndo um item for apagado (não constando mais na lista o item apagado)
     }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    listaDeTarefas = []; 

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //para ser capturado apenas o texto colocado no input, sem o Apagar do botão e o trim é p/ retirar os espaços que sobram (no Inpsecionar do navegador)
        listaDeTarefas.push(tarefaTexto); //joga no array os valores do li
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas) //transforma um elemento JS em uma string no formato JSON
    localStorage.setItem('tarefas', tarefasJSON); //primeiro valor é o nome utilizado para recuperar os dados na memória, segundo valor é o que será salvo (e só salva se estiver em string)
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); //recupera da memória do navegador os dados salvos com a chave 'tarefas'
    const listaDeTarefas = JSON.parse(tarefas); //converte novamente para um elemento JS (no caso, um array)

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();

//localStorage é como se fosse uma base de dados do navegador