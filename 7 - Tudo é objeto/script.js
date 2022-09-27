var person = 'André'

person.length // 5
person.charAt(1) // 'n'
person.replace('ré', 'rei') // 'Andrei'
person // 'André'

function returnNothing() {
    return 'nothing'
}

console.log(returnNothing.toString())
// "function returnNothing() {
//     return 'nothing'
// }"

var btn = document.querySelector('.btn')
btn.classList.add('blue')
console.log(btn.innerText) //click

// exercícios
// nomeie 3 propriedades ou métodos de strings
//length
//replace
//charAt
// nomeie 5 propriedades ou métodos de elementos do DOM
//cloneNode
//appendChild
//cloneNode
//addEventListener
//animate
// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V