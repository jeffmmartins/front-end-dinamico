const buttonAumentar = document.querySelector('#aumentar-botao')
const buttonDiminuir = document.querySelector('#diminuir-botao')
const contadorElemento  = document.querySelector('#contador')
const input = document.querySelector('#input')

// adicionando eventos 
// target é quem disparou o evento
// quando esse evento acontecer uma função sera disparada
buttonAumentar.addEventListener('click', (event) => {
const valorAtual = Number(contadorElemento.textContent)
contadorElemento.textContent = valorAtual + 1

buttonAumentar.classList.add("btn")
buttonDiminuir.classList.remove("btn")
})

buttonDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent)
    contadorElemento.textContent = valorAtual - 1

    buttonAumentar.classList.remove("btn")
    buttonDiminuir.classList.add("btn")
    })

input.addEventListener('input', (event) => {
    console.log(input.value)
})

// adicionando estilos inline no contador 
contadorElemento.style.color = "red"
contadorElemento.style.backgroundColor = "blue"

// manipular classes 
console.log(buttonDiminuir.classList)

//buttonAumentar.classList.add("btn")
//buttonDiminuir.classList.remove("btn")

const themeButton = document.querySelector('#theme')
let darkTheme = false

themeButton.addEventListener('click', () => {
    darkTheme = !darkTheme

    const body = document.querySelector('body')
    
    if(darkTheme) {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
    } else {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
    }
    
})