const allImages = document.querySelectorAll('img')

allImages.forEach((item, index, array) => {
    // console.log(item)
    // console.log(index)
    // console.log(array)
}) 

// para usar o forEach em array-lik que nao possuem o método, o ideal e transforma-lo
// em array para poder usar o forEach
const titles = document.getElementsByClassName('title')
arrayTitles = Array.from(titles)

arrayTitles.forEach(item => { // se tiver so 1 argumento na arrow function, não precisa de ()
    console.log(item)
})

let i = 0
arrayTitles.forEach(() => console.log(i++))