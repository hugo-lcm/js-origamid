// classList = retorna uma lista com as classes do elemento. Permite adicionar,
// remover e verificar se contém determinada classe

const menu = document.querySelector('.menu')

// console.log(menu.className) // string
// menu.classList.add('active', 'web') // pode add quantas classes quiser
// menu.classList.remove('web')
// menu.classList.toggle('web') // se tem a classe ele remove, se nao tem ele adiciona
// console.log(menu.classList.contains('active'))
// menu.classList.replace('active', 'inactive')

// console.log(menu.classList)

//attributes = retorna um array-like com os atributos do elemento

const animals = document.querySelector('.animals')

console.log(animals.attributes[0])

// getAttribute e setAttribute = métodos que retornam ou definem de acordo com o atributo selecionado

const img = document.querySelector('img')

console.log(img.getAttribute('src'))
img.setAttribute('alt', 'alternative text')
console.log(img.hasAttribute('id'))
img.removeAttribute('alt')

console.log(img)

// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, 
// ou seja, apenas leitura.

const animals2 = document.querySelector('.animals');

animals2.className; // string com o nome das classes
animals2.className = 'azul'; // substitui completamente a string
animals2.className += ' vermelho'; // adiciona vermelho à string

animals2.attributes = 'class="ativo"'; // não funciona, read-only
