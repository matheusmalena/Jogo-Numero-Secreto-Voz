function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `
            <div>
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
            </div>
            <button class="btn-jogar" id="jogar-novamente">Jogar novamente</button>
            `;
            document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += (`<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`)
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto} </h3>
        <br>
        <button class="btn-jogar" id="jogar-novamente"'>Jogar novamente</button>
        `
    }

    if (numero < numeroSecreto) {
        elementoChute.innerHTML += (`<div>O número secreto é maior <i class=”fa-solid fa-up-long”></i></div>`)
    }

    if (numero > numeroSecreto) {
        elementoChute.innerHTML += (`<div>O número secreto é menor <i class=”fa-solid fa-up-long”></i></div>`)
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', s => {
    if (s.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});