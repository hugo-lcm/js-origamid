var person = {
    name: 'john',
    age: 31,
    profession: 'developer',
    haveDegree: true
}

console.log(person.name);

var square = {
    sides: 4,
    area(side) {
        return side * side
    },
    perimeter(side) {
        return this.sides * side
    }
}

console.log(square.sides);
console.log(square.area(5));
console.log(square.perimeter(5));

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'
menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'
menu.position = 'fixed';


// exercícios
// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var personalData = {
    name: 'fulano',
    lastName: 'silva',
    age: 30,
    ssn: 123456789,
    birthDate: '01-01-2000',
}

// Crie um método no objeto anterior, que mostre o seu nome completo
personalData.fullName = function () {
    return `${this.name} ${this.lastName}`
}

console.log(personalData.fullName());

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var dog = {
    breed: 'labrador',
    color: '#000',
    age: 10,
    sawAMen: false,
    bark(person) {
        if (person === 'men') {
            return 'au au'
        } else {
            return 'silence'
        }
    }
}

console.log(dog.bark('men'));