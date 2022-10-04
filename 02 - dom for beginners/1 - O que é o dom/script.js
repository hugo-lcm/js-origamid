// window.alert('test')
// alert('test2') // nao precisa do window antes

const href = window.location.href
console.log(href)

const h1Selected = document.querySelector('h1')
console.log(h1Selected.classList[0])

h1Selected.addEventListener('click', () => {
    console.log('clicked in ', h1Selected.innerText);
})