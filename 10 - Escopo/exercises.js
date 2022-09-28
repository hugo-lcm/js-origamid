// Por qual motivo o código abaixo retorna com erros?
{
    var color = 'preto'
    const brand = 'Fiat'
    let doors = 4
}
console.log(var, brand, doors) //var é palavra reservada e brand e doors nao sao acessíveis fora do bloco

// Como corrigir o erro abaixo?
function sumTwo(x) {
    const two = 2
    return x + two
}
function divideTwo(x) {
    return x / two //não é possível acessar two dentro dessa função, a declaração deveria ser fora da função 
}
sumTwo(4)
divideTwo(6)

// O que fazer para total retornar 500?
var numero = 50

for (var numero = 0; numero < 10; numero++) { //mudar o var para let
    console.log(numero)
}

const total = 10 * numero
console.log(total)
