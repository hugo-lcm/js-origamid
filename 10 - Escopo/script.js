function displayCar() {
    var car = 'Pontiac Aztek';
    console.log(car);
}

displayCar(); // Pontiac Aztek no console
//console.log(car); // Error, car is not defined

// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo
//(global). Isso é um erro.

// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declaramos uma variável é
// utilizando const e let, pois estas respeitam o escopo de bloco.
{
    var month = new Date().getMonth()
}
console.log(month);

{
    let year = new Date().getFullYear()
}
//console.log(year); //erro pois está fora do escopo

for (var i = 0; i < 10; i++) {
    console.log('test')
}
console.log(i); //i é acessível mesmo estando fora do for

// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando
//bugs no código.
const day = 'monday'
day = 'friday' // erro, pq tentou modificar o valor
const week // erro, pq declarou sem valor

const data = {
    day: 28,
    month: 'Dezembro',
    year: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro
