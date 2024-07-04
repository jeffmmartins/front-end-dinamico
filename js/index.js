console.log(document.title)
console.log(document.url)

//Selecionar elementos da nossa página pelo nome da tag 
const todoH1 = document.getElementsByTagName('h1')
console.log(todoH1) // aparece com um array , consigo acessar pela posição 

// Pelo nome da Classe 
const todosparagrafo = document.getElementsByClassName("paragrafo")
console.log(todosparagrafo)

// seleciona pela tage name, leva como nodeList 
const emailInput = document.getElementsByName("email")
console.log(emailInput)

// selecionando pelo id 
const todosId = document.getElementById('js-logo')
console.log(todosId)

// Query Selector 
const selctor = document.querySelector('body > input')
console.log(selctor)

const paragrafos = document.querySelectorAll('p')
console.log(paragrafos)

console.clear()

// acessando ou alterando o conteudo 
const primeiroParagrafo = document.querySelector('p.paragrafo')
console.log(primeiroParagrafo)

// pega o conteudo que está dentro da tag.
console.log('conteudo:', primeiroParagrafo.textContent)
console.log('innerHTML:', primeiroParagrafo.innerHTML)

// primeiroParagrafo.textContent = "outra coisa"
primeiroParagrafo.innerHTML = "<strong> outra coisa </strong>"
console.clear()

// pega o valor e define valor 
emailInput[0].value = "teste"

// criando elementos na pagina html 
const listaHTML = document.querySelector('ul#lista')
const listaLis = document.querySelectorAll('ul>li') // pegando todas as lis 

const novaTagLi = document.createElement('li') // criando uma tag LI
novaTagLi.textContent = "Segundo Item " // adcicionando um texto dentro da tag LI
console.log(novaTagLi)

// jogar dentro do HTML
//listaHTML.appendChild(novaTagLi)

listaHTML.insertBefore(novaTagLi, listaLis[1])

// Remover elementos 
listaHTML.removeChild(listaLis[0])