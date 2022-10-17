// Verifique a distância da primeira imagem
// em relação ao topo da página
const firstImage = document.querySelector('img')
console.log(firstImage.offsetTop)

// Retorne a soma da largura de todas as imagens
function sumWidthImages() {
    const allImages = document.querySelectorAll('img')
    let sum = 0
    allImages.forEach(img => {
        sum += img.offsetWidth
    })
    console.log(sum)
}

window.onload = () => {
    sumWidthImages()
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach(link => {
    linkWidth = link.offsetWidth
    linkHeight = link.offsetHeight
    if (linkWidth >= 48 && linkHeight >= 48) {
        console.log(`${link} possui o tamanho recomendado`)
    } else {
        console.log(`${link} não possui o tamanho recomendado`)
    }
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browserSmall = window.matchMedia('(max-width: 720px)')
if (!browserSmall.matches) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
} else {
    console.log('é maior que 720px');
}