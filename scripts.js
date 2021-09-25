const cartas = [
    {
        nome: 'Seya de Pègaso',
        imagem: "assets/img/Seiya.png",
        atributos: {
            soco: 600,
            chute: 400,
            técnica: 700,
            conhecimentos: 800,
            força: 750
        }
    },
    
    {
        nome: 'Hyoga de Cisne',
        imagem: "assets/img/Hyoga-de-cisne.jpg",
        atributos: {
            soco: 500,
            chute: 650,
            técnica: 700,
            conhecimentos: 450,
            força: 500
        }
    },
    
    {
        nome: 'Shiryu de dragão',
        imagem: "assets/img/shiryu-de-dragao.jpg",
        atributos: {
            soco: 750,
            chute: 600,
            técnica: 800,
            conhecimentos: 500,
            força: 650
        }
    },
    
    {
        nome: 'Máscara da Morte de Câncer',
        imagem: "assets/img/mascara-da-morte-de-cancer.jpg",
        atributos: {
            soco: 800,
            chute: 670,
            técnica: 810,
            conhecimentos: 820,
            força: 820
        }
    },
    
    {
        nome: 'Gestalt de Sagitário',
        imagem: "assets/img/gestalt-de-sagitario.jpg",
        atributos: {
            soco: 700,
            chute: 500,
            técnica: 800,
            conhecimentos: 775,
            força: 700
        }
    },
    
    {
        nome: 'Afrodite de Peixes',
        imagem: "assets/img/afrodite-de-peixes.jpg",
        atributos: {
            soco: 800,
            chute: 650,
            técnica: 680,
            conhecimentos: 900,
            força: 650
        }
    },
    {
        nome: 'Aldebaran de touro',
        imagem: "assets/img/aldebaran-de-touro.png",
        atributos: {
            soco: 910,
            chute: 400,
            técnica: 650,
            conhecimentos: 700,
            força: 800
        }
    },
    {
        nome: 'Shura de capricórnio',
        imagem: "assets/img/shura-de-capricornio.jpg",
        atributos: {
            soco: 700,
            chute: 800,
            técnica: 740,
            conhecimentos: 810,
            força: 620
        }
    },
    {
        nome: 'Cardinale de Peixes',
        imagem: "assets/img/cardinale-de-peixes.png",
        atributos: {
            soco: 850,
            chute: 400,
            técnica: 500,
            conhecimentos: 850,
            força: 700
        }
    },
    {
        nome: 'Milo de Escorpião',
        imagem: "assets/img/milo-de-escorpiao.jpg",
        atributos: {
            soco: 700,
            chute: 810,
            técnica: 800,
            conhecimentos: 800,
            força: 610
        }
    },
    {
        nome: 'Izô de Capricórnio',
        imagem: "assets/img/izo-de-capricornio.jpg",
        atributos: {
            soco: 600,
            chute: 900,
            técnica: 655,
            conhecimentos: 665,
            força: 910
        }
    },
    {
        nome: 'Mu de Áries',
        imagem: "assets/img/mu-de-aries.jpg",
        atributos: {
            soco: 710,
            chute: 905,
            técnica: 550,
            conhecimentos: 910,
            força: 820
        }
    },
    {
        nome: 'Camus de Aquário',
        imagem: "assets/img/camus-de-aquario.jpg",
        atributos: {
            soco: 650,
            chute: 400,
            técnica: 670,
            conhecimentos: 910,
            força: 700
        }
    },
    {
        nome: 'Aioria de Leão',
        imagem: "assets/img/aioria-de-leao.jpg",
        atributos: {
            soco: 920,
            chute: 700,
            técnica: 760,
            conhecimentos: 700,
            força: 940
        }
    },
    {
        nome: 'Mystoria de Aquário',
        imagem: "assets/img/mystoria-de-aquario.jpg",
        atributos: {
            soco: 910,
            chute: 770,
            técnica: 600,
            conhecimentos: 600,
            força: 930
        }
    },
    {
        nome: 'Aioros de Sagitário',
        imagem: "assets/img/aioros-de-sagitario.jpg",
        atributos: {
            soco: 710,
            chute: 850,
            técnica: 850,
            conhecimentos: 920,
            força: 600
        }
    },
    {
        nome: 'Saga de Gêmeos',
        imagem: "assets/img/saga-de-gemeos.jpg",
        atributos: {
            soco: 710,
            chute: 890,
            técnica: 910,
            conhecimentos: 800,
            força: 710
        }
    },
    {
        nome: 'Dohko de Libra',
        imagem: "assets/img/dohko-de-libra.jpg",
        atributos: {
            soco: 670,
            chute: 920,
            técnica: 710,
            conhecimentos: 905,
            força: 780
        }
    },
    {
        nome: 'Shion de ÁRIES',
        imagem: "assets/img/shion-de-aries.jpg",
        atributos: {
            soco: 720,
            chute: 915,
            técnica: 670,
            conhecimentos: 708,
            força: 800
        }
    },
    {
        nome: 'Écarlate de Escorpião',
        imagem: "assets/img/ecarlate-de-escorpiao.png",
        atributos: {
            soco: 910,
            chute: 900,
            técnica: 710,
            conhecimentos: 800,
            força: 930
        }
    },
    {
        nome: 'Shaka de Virgem',
        imagem: "assets/img/shaka-de-virgem.jpg",
        atributos: {
            soco: 850,
            chute: 900,
            técnica: 890,
            conhecimentos: 870,
            força: 710
        }
    },
    {
        nome: 'Shijima de Virgem',
        imagem: "assets/img/shijima-de-virgem.png",
        atributos: {
            soco: 920,
            chute: 915,
            técnica: 750,
            conhecimentos: 850,
            força: 925
        }
    },
    
    {
        nome: 'Nachi de Lobo',
        imagem: "assets/img/nachi-de-lobo.png",
        atributos: {
            soco: 700,
            chute: 860,
            técnica: 910,
            conhecimentos: 910,
            força: 650
        }
    },
    
    {
        nome: 'Geki de Urso',
        imagem: "assets/img/geki-de-urso.png",
        atributos: {
            soco: 950,
            chute: 700,
            técnica: 600,
            conhecimentos: 650,
            força: 940
        }
    },
    {
        nome: 'Ban de Leão Menor',
        imagem: "assets/img/ban-de-leao-menor.png",
        atributos: {
            soco: 910,
            chute: 850,
            técnica: 400,
            conhecimentos: 670,
            força: 930
        }
    },
    {
        nome: 'Ichi de Hidra',
        imagem: "assets/img/ichi-de-hidra.png",
        atributos: {
            soco: 700,
            chute: 910,
            técnica: 890,
            conhecimentos: 650,
            força: 700
        }
    },
    {
        nome: 'Jabu de Unicórnio',
        imagem: "assets/img/jabu-de-unicornio.png",
        atributos: {
            soco: 700,
            chute: 900,
            técnica: 890,
            conhecimentos: 500,
            força: 300
        }
    },
    {
        nome: 'Shun de Andrômeda',
        imagem: "assets/img/shun-de-andromeda.jpg",
        atributos: {
            soco: 780,
            chute: 700,
            técnica: 600,
            conhecimentos: 800,
            força: 890
        }
    },
    {
        nome: 'Ikki de Fênix',
        imagem: "assets/img/ikki-de-fenix.jpg",
        atributos: {
            soco: 920,
            chute: 900,
            técnica: 900,
            conhecimentos: 950,
            força: 900
        }
    },
    {
        nome: 'Dio de Mosca',
        imagem: "assets/img/dio-de-mosca.png",
        atributos: {
            soco: 780,
            chute: 900,
            técnica: 870,
            conhecimentos: 700,
            força: 800
        }
    },
    {
        nome: 'Algethi de Hércules',
        imagem: "assets/img/algethi-de-hercules.png",
        atributos: {
            soco: 930,
            chute: 300,
            técnica: 400,
            conhecimentos: 600,
            força: 920
        }
    },
    {
        nome: 'Sirius de Cão Maior',
        imagem: "assets/img/sirius-de-cao-maior.png",
        atributos: {
            soco: 810,
            chute: 700,
            técnica: 650,
            conhecimentos: 700,
            força: 820
        }
    },
    
    {
        nome: 'Daidalos de Cefeu',
        imagem: "assets/img/daidalos-de-cefeu.jpg",
        atributos: {
            soco: 810,
            chute: 650,
            técnica: 800,
            conhecimentos: 800,
            força: 850
        }
    },
    {
        nome: 'Moses de Baleia',
        imagem: "assets/img/moses-de-baleia.png",
        atributos: {
            soco: 850,
            chute: 500,
            técnica: 780,
            conhecimentos: 860,
            força: 800
        }
    },
    {
        nome: 'Asterion de Cão de Caça',
        imagem: "assets/img/asterion-de-cao-de-caca.png",
        atributos: {
            soco: 900,
            chute: 780,
            técnica: 500,
            conhecimentos: 670,
            força: 820
        }
    },
    {
        nome: 'Dante de Cérbero',
        imagem: "assets/img/dante-de-cerbero.png",
        atributos: {
            soco: 890,
            chute: 500,
            técnica: 850,
            conhecimentos: 780,
            força: 700
        }
    },
    {
        nome: 'Capella de Auriga',
        imagem: "assets/img/capella-de-auriga.png",
        atributos: {
            soco: 700,
            chute: 825,
            técnica: 820,
            conhecimentos: 800,
            força: 700
        }
    },
    {
        nome: 'Jamian de Corvo',
        imagem: "assets/img/jamian-de-corvo.png",
        atributos: {
            soco: 790,
            chute: 890,
            técnica: 810,
            conhecimentos: 800,
            força: 780
        }
    },
    {
        nome: 'Babel de Centauro',
        imagem: "assets/img/babel-de-centauro.png",
        atributos: {
            soco: 875,
            chute: 780,
            técnica: 700,
            conhecimentos: 850,
            força: 800
        }
    },
    {
        nome: 'Ptolemy de Flecha',
        imagem: "assets/img/ptolemy-de-flecha.png",
        atributos: {
            soco: 650,
            chute: 800,
            técnica: 920,
            conhecimentos: 800,
            força: 680
        }
    },
    {
        nome: 'Shaina de Ofiúco',
        imagem: "assets/img/shaina-de-ofiuco.jpg",
        atributos: {
            soco: 780,
            chute: 890,
            técnica: 750,
            conhecimentos: 800,
            força: 700
        }
    },
    {
        nome: 'Orfeu de Lira',
        imagem: "assets/img/orfeu-de-lira.png",
        atributos: {
            soco: 600,
            chute: 740,
            técnica: 850,
            conhecimentos: 900,
            força: 700
        }
    },
    {
        nome: 'Algol de Perseu',
        imagem: "assets/img/algol-de-perseu.png",
        atributos: {
            soco: 800,
            chute: 700,
            técnica: 870,
            conhecimentos: 650,
            força: 780
        }
    },
    {
        nome: 'Marin de Águia',
        imagem: "assets/img/marin-de-aguia.png",
        atributos: {
            soco: 670,
            chute: 900,
            técnica: 820,
            conhecimentos: 600,
            força: 500
        }
    },
    {
        nome: 'Saori Kido',
        imagem: "assets/img/saori.png",
        atributos: {
            soco: 600,
            chute: 400,
            técnica: 720,
            conhecimentos: 850,
            força: 400
        }
    },
]    

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