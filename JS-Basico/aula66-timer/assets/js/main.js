function relogio() {
    // 01/01/1970, as 00h00m00s
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000); //transformando segundos em milisegundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const element = e.target; //pega o elemento que está sendo clicado na page

        if (element.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }

        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer); //garante que não será iniciado mais de um timer (zera o atual e inicia de novo)
            iniciaRelogio();
        }

        if (element.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

    });
}
relogio();

