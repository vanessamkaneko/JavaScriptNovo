function Calculadora() {

    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.realizaConta();

        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.apagaUm();
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida');
                return;
            }

            this.display.value = String(conta);

        } catch (e) {
            alert('Conta inválida');
            return;
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clearDisplay = () => this.display.value = '';
    this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

};

const calculadora = new Calculadora();
calculadora.inicia();









// cliqueBotoes() {
//   document.addEventListener('click', function(e) {
//      const el = e.target;

//      if(el.classList.contains('btn-num')) {
//  this.btnParaDisplay(el.innerText);
//      }
// }.bind(this)); //como nesta função o this passou a referenciar o document (devido ao addEventListener) e o comportamento desejável é que o this se referencie a variável calculadora, o  bind foi utiizado para isso
//},

// o uso de arrow function não altera o elemento que é referenciado como this!