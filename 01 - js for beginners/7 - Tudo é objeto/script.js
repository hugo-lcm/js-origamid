var person = 'André'

person.length // 5
person.charAt(1) // 'n'
person.replace('ré', 'rei') // 'Andrei'
person // 'André'

var height = 1.8

height.toString() // '1.8'
height.toFixed() // '2'

function returnNothing() {
    return 'nothing'
}

returnNothing.toString();
//"function returnNothing(lado) {
//  return 'nothing'
//}"


var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click',() => {
    return console.log('clicked');
} )

// nomeie 3 propriedades ou métodos de strings
//slice
//length
//replace

// nomeie 5 propriedades ou métodos de elementos do DOM
//addEventListener
//appendChild
//id
//innerHtml
//outerHtml

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V