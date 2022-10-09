// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img')
console.log(allImages)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const startWithImage = document.querySelectorAll('img[src^="img/image"')
console.log(startWithImage) 

// Selecione todos os links internos (onde o href começa com #)
const innerLinks = document.querySelectorAll('[href^="#"]')
console.log(innerLinks)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2AnimalsDescription = document.querySelector('.animals-description h2')
console.log(h2AnimalsDescription)

// Selecione o último p do site
const lastP = document.querySelector('p:last-child')
console.log(lastP)