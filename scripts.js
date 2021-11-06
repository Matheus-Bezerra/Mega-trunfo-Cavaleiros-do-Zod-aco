let cartaMaquina
let cartaJogador

let qtdCartas = cartas.length

let placar = document.querySelector('.placar')
let pontosJogador = 0
let pontosMaquina = 0

let audio = document.querySelector('audio')

/*CONTINUAR MUSICA OU INICIAR */

function playMusic() {
    audio.play()
}

/*PAUSAR A MUSICA */

function pauseMusic() {
    audio.pause()
}

/*SORTEAR A CARTA ALEATÓRIAMENTE */

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * qtdCartas)
    cartaMaquina = cartas[numeroCartaMaquina]

    let numeroCartaJogador = parseInt(Math.random() * qtdCartas)
    while(numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * qtdCartas)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
    
    let btnSortear = document.getElementById('btnSortear').disabled = true
    let btnJogar = document.getElementById('btnJogar').disabled = false

    exibirCartaJogador()
}

/*QAUL FOI ATRIBUTO SELECIONADO: */

function obtemAtributoSelecionado() {
    let radioAtributos = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked == true) {
            let radioAtivo = radioAtributos[i].parentNode
            radioAtivo.style.color = 'yellow'
            return radioAtributos[i].value
        }
    }
}

/*PRÓXIMA RODADA */

function proximaRodada() {
    let divResultado = document.getElementById('resultado')
    let cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.style.visibility = 'hidden'
    })
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnRodada').disabled = true
    divResultado.style.visibility = 'hidden'

    placar.innerText = `Placar: Jogador ${pontosJogador} X ${pontosMaquina} Máquina`
}

/*RESETAR JOGO */

function resetar() {
    pontosJogador = 0
    pontosMaquina = 0
    placar.innerText = 'Placar: Jogador 0 X 0 Maquina'
    proximaRodada()
}

/*JOGAR */

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado()
    let divResultado = document.getElementById('resultado')
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    document.getElementById('btnRodada').disabled = false

    if(valorCartaJogador > valorCartaMaquina) {
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
        pontosJogador ++
        if(pontosJogador == 5) {
            pontosJogador = 0
            pontosMaquina = 0
            placar.innerText = `JOGADOR VENCEU`
            divResultado.innerHTML = htmlResultado
            divResultado.style.visibility = 'visible'
            
            document.getElementById('btnJogar').disabled = true
            document.getElementById('btnResetar').disabled = false
            exibirCartaMaquina()        
            return
        }
        placar.innerText = `Placar: Jogador ${pontosJogador} X ${pontosMaquina} Máquina`
    } else if(valorCartaMaquina > valorCartaJogador) {
        htmlResultado = '<p class="resultado-final">Perdeu!</p>'
        pontosMaquina ++
        if(pontosMaquina == 5) {
            pontosMaquina = 0
            pontosJogador = 0
            placar.innerText = `MÁQUINA VENCEU!`
            divResultado.innerHTML = htmlResultado
            divResultado.style.visibility = 'visible'
            
            document.getElementById('btnJogar').disabled = true
            document.getElementById('btnResetar').disabled = false
            exibirCartaMaquina()        
            return
        }
        placar.innerText = `Placar: Jogador ${pontosJogador} X ${pontosMaquina} Máquina`
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }
    divResultado.innerHTML = htmlResultado
    divResultado.style.visibility = 'visible'
    
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnResetar').disabled = false
    exibirCartaMaquina()
}

/*EXIBIÇÃO DE CARTA */
function exibirCartaJogador() {
    let divCartaJogador = document.getElementById('carta-jogador')
    let jogadorCavaleiro = document.getElementsByClassName('carta-jogador carta-cavaleiro')
    let imagem = jogadorCavaleiro.innerHTML = `<div class="carta-cavaleiro"><img src="${cartaJogador.imagem}" alt="">`

    let tagHtml = `<div id='carta-opcoes' class='carta-opcoes'>`

    let opcoes = document.getElementById('opcoes')

    let opcoesTexto = ''

    for(let atributo in cartaJogador.atributos) {
        opcoesTexto += `<label><input type='radio' name='atributo' value='${atributo}'>${atributo} ${cartaJogador.atributos[atributo]}</label> <br>`
    }
    let nome = `<h2>${cartaJogador.nome}</h2></div>`
    divCartaJogador.style.visibility = 'visible'

    divCartaJogador.innerHTML =  imagem + nome + tagHtml + opcoesTexto + "</div>"
}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById('carta-maquina')
    let maquinaCavaleiro = document.getElementsByClassName('carta-maquina carta-cavaleiro')
    let imagem = maquinaCavaleiro.innerHTML = `<div class="carta-cavaleiro"><img src="${cartaMaquina.imagem}" alt="">`

    let tagHtml = `<div id='carta-opcoes' class='carta-opcoes'>`

    let opcoes = document.getElementById('opcoes')

    let opcoesTexto = ''

    for(let atributo in cartaMaquina.atributos) {
        opcoesTexto += `<p>${atributo} ${cartaMaquina.atributos[atributo]}</p> <br>`
    }
    let nome = `<h2>${cartaMaquina.nome}</h2></div>`

    divCartaMaquina.style.visibility = 'visible'

    divCartaMaquina.innerHTML = imagem + nome + tagHtml + opcoesTexto + "</div>"
}