const section = document.querySelector('.animals-list')
// mesma coisa pra width
console.log(section.clientHeight) // height + padding
console.log(section.offsetHeight) // height + padding + border
console.log(section.scrollHeight) // height total
console.log(section.offsetTop) // distância entre o elemento e o topo da página
console.log(section.offsetLeft) // distância entre o canto esquerdo do elemento e o canto esquerdo da página

const firstH2 = document.querySelector('h2')
const rect = firstH2.getBoundingClientRect() // método que retorna um objeto com valores de height, width,
// distâncias do elemento e mais
console.log(rect)

window.innerWidth // width da janela
window.outerWidth // soma a largura do console também
window.innerHeight // height do janela
window.outerHeight // soma a barra de endereço

window.pageYOffset // distância total do scroll vertical
window.pageXOffset // distância total do scroll horizontal

if (window.innerWidth < 600) {
    console.log('Tela menor que 600px')
}

const small = window.matchMedia('(max-width: 600px)')
console.log(small)

if (small.matches) {
    console.log('menor que 600px')
} else {
    console.log('maior que 600px')
}