function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaBackspace();

        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        pressionaBackspace() {
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 8) {
                    this.clearDisplay();
                }
            })
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta); 

                if(conta === '' || Number.isNaN(conta) || typeof conta !== 'number') {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);

            } catch(e) {
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); //tamanho da string menos 1
        },


      
        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.addNumDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
                
                this.display.focus();
            });
        },

        addNumDisplay(valor) {
            this.display.value += valor; //o valor é o innerText do elemento que está sendo clicado, que será concatenado ao valor que estiver no display
        }
    };
}

const calculadora = criaCalculadora();
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