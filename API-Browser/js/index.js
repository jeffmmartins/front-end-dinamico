const buttonAumentar = document.querySelector('#aumentar-botao')
const buttonDiminuir = document.querySelector('#diminuir-botao')
const contadorElemento  = document.querySelector('#contador')
// adicionando eventos 
// target é quem disparou o evento
// quando esse evento acontecer uma função sera disparada
buttonAumentar.addEventListener('click', (event) => {
const valorAtual = Number(contadorElemento.textContent)
contadorElemento.textContent = valorAtual + 1
})

buttonDiminuir.addEventListener('click', (event) => {
    const valorAtual = Number(contadorElemento.textContent)
    contadorElemento.textContent = valorAtual - 1
    })