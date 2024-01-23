//For each - outra maneira de iterar em arrays (apenas disponível para arrays)

var numeros = [10, 20, 30, 40];
var total = 0;

function somar(item, indice) {
    total += item; 
    numeros[indice] = total;
}

numeros.forEach(somar);
console.log(numeros); 

//primeiro loop - total = 10 [i = 0]
//segundo - total = 30 [i = 1]
//terceiro - total = 60 [i = 2]
// quarto - total = 100 [i = 3]

function somar(item, indice) {
    total += 10; 
    numeros[0] = 10;
}

function somar(item, indice) {
    total += 30; 
    numeros[1] = 30;
}

function somar(item, indice) {
    total += 60; 
    numeros[2] = 60;
}

function somar(item, indice) {
    total += 100; 
    numeros[3] = 100;
}

// -------------------------------------------------------

var marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
var marcasIniciadasComF = [];
var novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") === 0) { //verifica se o index 0 da String é um F
        marcasIniciadasComF[novoIndice] = marcas[indice];
        novoIndice++;
    }
}

//novoIndice = 0
//marcas[indice] = Fiat (index 0 do array)
//Entrou no if pois supre a condição, ocorrendo incremento do novoIndice
//marcasIniciadasComF[0] = marcas[0] -> Fiat

//novoIndice = 1
//marcas[indice] = Chevrolet (index 1 do array)
//Não entra no if pois não supre a condição; não ocorre o incremento do novoIndice

//novoIndice = 1
//marcas[indice] = Ford (index 2 do array)
//Entrou no if pois supre a condição, ocorrendo incremento do novoIndice
//marcasIniciadasComF[1] = marcas[2] -> Ford

//novoIndice = 2

// ------------------------------------------------------

// *** primeiro loop ***
// if (marcas[0].indexOf("F") === 0) { 
//marcasIniciadasComF[0] = marcas[0];          //Fiat supre a condição, então o novoIndice é incrementado, indo para o array vazio
//novoIndice++; 
//}

// *** segundo loop ***
// if (marcas[1].indexOf("F") === 0) { 
//marcasIniciadasComF[1] = marcas[1];          //Chevrolet não supre a condição, então o novoIndice não é incrementado, continuando com apenas um índice 
//novoIndice++; 
//}

// *** terceiro loop ***
// if (marcas[2].indexOf("F") === 0) { 
//marcasIniciadasComF[1] = marcas[2];          //Ford supre a condição, então o novoIndice é incrementado
//novoIndice++; 
//}



marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);