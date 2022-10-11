// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu a')

menuItems.forEach((item) => {
    item.classList.add('active')
    console.log(item)
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((item, index) => {
    if (index !== 0) {
        item.classList.remove('active')
    }
    console.log(item)
})

// Verifique se as imagens possuem o atributo alt
const allImg = document.querySelectorAll('img')
console.log(allImg)
allImg.forEach((item) => {
    console.log(item.hasAttribute('alt'));
})

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^=https]')
link.setAttribute('href', '#')
console.log(link)