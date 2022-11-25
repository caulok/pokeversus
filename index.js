const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const card1 = document.getElementById('card1')
const card2 = document.getElementById('card2')
const container = document.getElementsByClassName('.container')
let clicks = 0

const clickBtn1 = btn1.addEventListener('click', () => {
    const ramdomUno = random1(0, 152)
    fetchData(ramdomUno)
    clicks++
    btn1.setAttribute('disabled', '')
    volverAJugar(clicks)
})
const clickBtn2 = btn2.addEventListener('click', () => {
    const ramdomDos = random2(0, 152)
    fetchData2(ramdomDos)
    clicks++
    btn2.setAttribute('disabled', '')
    volverAJugar(clicks)
})

const volverAJugar = (clicks) =>{
    if(clicks === 2){
        const createButton = () =>{
            let boton = document.createElement('div')
            boton.innerHTML(`<button>Esto es un botón</button>`)
            container.appendChild(boton)
        }
        createButton()
    } else{
        console.log('error')
    }
}

// VARIABLES RANDOM
const random1 = (min, max) => {
    return Math.floor(Math.random() * (max - min)) - min;
}
const random2 = (min, max) => {
    return Math.floor(Math.random() * (max - min)) - min;
}

// COLOREAR
const colorearAtaque = (valorAtaque1, at1, valorAtaque2, at2) => {
    if (valorAtaque1, at1) {
        at1.classList.add('good')
    } else if (valorAtaque1 < 50) {
        at1.classList.add('bad')
    }
    if (valorAtaque2 >= 50) {
        at2.classList.add('good')
    } else if (valorAtaque2 < 50) {
        at2.classList.add('bad')
    }
}
const colorearDefensa = (valorDefensa1, df1, valorDefensa2, df2) => {
    if (valorDefensa1 >= 50) {
        df1.classList.add('good')
    } else if (valorDefensa1 < 50) {
        df1.classList.add('bad')
    }
    if (valorDefensa2 >= 50) {
        df2.classList.add('good')
    } else if (valorDefensa2 < 50) {
        df2.classList.add('bad')
    }
}

// FETCH DE LA POKEAPI
const fetchData = async (random1) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random1}`)
        const data = await res.json()
        pintarCard1(data)
    } catch (error) {
        console.log(error)
    }
}
const fetchData2 = async (random2) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random2}`)
        const data = await res.json()
        pintarCard2(data)
    } catch (error) {
        console.log(error)
    }
}

// PINTAR CARDS CON LA INFORMACIÓN
const pintarCard1 = (pokemon1) => {
    let valorNombre1 = pokemon1.name
    let imagen1 = pokemon1.sprites.front_default
    let valorAtaque1 = pokemon1.stats[1].base_stat
    let valorDefensa1 = pokemon1.stats[2].base_stat
    let valorTotal1 = valorAtaque1 + valorDefensa1
    const nm1 = document.getElementById('nm1')
    const img1 = document.getElementById('imagen1')
    const at1 = document.getElementById('at1')
    const df1 = document.getElementById('df1')
    const tt1 = document.getElementById('tt1')

    // NOMBRE
    const nombre1 = document.createTextNode(`${valorNombre1}`)
    nm1.appendChild(nombre1)
    // DEFINIR IMAGEN 
    img1.setAttribute('src', imagen1)
    // ATAQUE
    const ataque1 = document.createTextNode(` ${valorAtaque1}`)
    at1.appendChild(ataque1)
    // TOTAL
    const total1 = document.createTextNode(` ${valorTotal1}`)
    tt1.appendChild(total1)
    // COLOREAR ATAQUE
    colorearAtaque(valorAtaque1, at1)
    // DEFENSA
    const defensa1 = document.createTextNode(` ${valorDefensa1}`)
    df1.appendChild(defensa1)
    colorearDefensa(valorDefensa1, df1)
}
const pintarCard2 = (pokemon2) => {
    let valorNombre2 = pokemon2.name
    let imagen2 = pokemon2.sprites.front_default
    let valorAtaque2 = pokemon2.stats[1].base_stat
    let valorDefensa2 = pokemon2.stats[2].base_stat
    let valorTotal2 = valorAtaque2 + valorDefensa2
    const nm2 = document.getElementById('nm2')
    const img2 = document.getElementById('imagen2')
    const at2 = document.getElementById('at2')
    const df2 = document.getElementById('df2')
    const tt2 = document.getElementById('tt2')

    // NOMBRE
    const nombre2 = document.createTextNode(`${valorNombre2}`)
    nm2.appendChild(nombre2)
    // DEFINIR IMAGEN 
    img2.setAttribute('src', imagen2)
    // ATAQUE
    const ataque2 = document.createTextNode(` ${valorAtaque2}`)
    at2.appendChild(ataque2)
    // TOTAL 
    const total2 = document.createTextNode(` ${valorTotal2}`)
    tt2.appendChild(total2)
    // COLOREAR ATAQUE
    colorearAtaque(valorAtaque2, at2)
    // DEFENSA
    const defensa2 = document.createTextNode(` ${valorDefensa2}`)
    df2.appendChild(defensa2)
    colorearDefensa(valorDefensa2, df2)
}
