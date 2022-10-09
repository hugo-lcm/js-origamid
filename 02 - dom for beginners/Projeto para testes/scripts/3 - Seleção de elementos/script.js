// const animals = document.getElementById('animals')
// console.log(animals)

// const gridSection = document.getElementsByClassName('grid-section')
// console.log(gridSection[0])

// const ul = document.getElementsByTagName('ul')
// console.log(ul[1])

// const firstClassAnimals = document.querySelector('.animals') // pega apenas a primeiro elemento que aparecer
// console.log(firstClassAnimals)

// const firstIdFaq = document.querySelector('#faq')
// console.log(firstIdFaq)

// const lastItem = document.querySelector('.animals li:last-child') // pega ultimo li da classe animals
// console.log(lastItem)

// const firstLi = firstClassAnimals.querySelector('li')
// console.log(firstLi)

// const innerLink = document.querySelector('[href^="#"]') // retorna o primeiro href que começa com #
// console.log(innerLink)

// const allGridSection = document.querySelectorAll('.grid-section') // retorna todos os elementos em uma nodelist
// console.log(allGridSection[1])

// nodelist vs htmlcollection
// a diferença está nos métodos e propriedades de ambas. Além disso a nodelist retornada com queryselectorall
// é estática

const firstUl = document.querySelector('ul')

const gridSectionHTML = document.getElementsByClassName('grid-section')
const gridSectionNode = document.querySelectorAll('.grid-section')

firstUl.classList.add('grid-section')

console.log(gridSectionHTML) // atualiza
console.log(gridSectionNode) // estática

// antes de adicionar a classe grid-section na ul, os 2 acimas retornavam 3, porem agr o 
// gridSectionHTML retorna 4 pq ela atualizou

// htmlcollection e nodelist sao array-like porem nao sao array

gridSectionNode.forEach((item, index) => { //o foreach nao funciona em htmlcollection
    console.log(item, index)
})

// transformar array-like em array

const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach((item) => {
    console.log(item);
})