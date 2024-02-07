function verificaSeOChutePossuiUmValorValido(chute) {
        const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += ('<div>Numero inválido!</div>')
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += (`<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`)
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto} </h3>`
    }

    if (numero < numeroSecreto) {
        elementoChute.innerHTML += (`<div>O número secreto é maior <i class=”fa-solid fa-up-long”></i></div>`)
    }

    if (numero > numeroSecreto) {
        elementoChute.innerHTML +=  (`<div>O número secreto é menor <i class=”fa-solid fa-up-long”></i></div>`)
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
