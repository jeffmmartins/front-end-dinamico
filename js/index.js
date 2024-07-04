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