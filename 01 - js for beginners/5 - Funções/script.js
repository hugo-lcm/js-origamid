function squareArea(side) {
    return side * side
}

console.log(squareArea(5));

addEventListener('click', () => {
    console.log('clicked');
})

function displayMessage() {
    console.log('clicked');
}

addEventListener('click', displayMessage)

// Exercícios
// Crie uma função para verificar se um valor é Truthy
function isTruthy(value) {
    return !!value
}
console.log(isTruthy(''))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimeterSquare(side) {
    return side * 4
}

console.log(perimeterSquare(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function fullName(name, lastName) {
    return `${name} ${lastName}`
}

console.log(fullName('fulano', 'pereira'))

// Crie uma função que verifica se um número é par
function numberIsEven(number) {
    if (number % 2 === 0) {
        return `${number} is even`
    } else {
        return `${number} is odd`
    }
}

console.log(numberIsEven(98))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeOfData(data) {
    return typeof data
}

console.log(typeOfData(false))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', () => {
    console.log('fulano da silva');
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20))
console.log(jaVisitei(20))