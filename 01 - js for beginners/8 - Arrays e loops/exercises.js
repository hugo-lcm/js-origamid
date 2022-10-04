// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var victoriesOfWorldCupBr = [1959, 1962, 1970, 1994, 2002];
console.log(victoriesOfWorldCupBr);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < victoriesOfWorldCupBr.length; i++) {
    console.log(`Brazil won the ${victoriesOfWorldCupBr[i]} World Cup`);
}

victoriesOfWorldCupBr.forEach((i) => {
    console.log(`Brazil won the ${i} World Cup`)
})

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var fruits = ['Banana', 'Apple', 'Pear', 'Grape', 'Watermelon']
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'Pear') {
        break
    }
    console.log(fruits[i]);
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var lastFruit = fruits[fruits.length - 1]
console.log(lastFruit);