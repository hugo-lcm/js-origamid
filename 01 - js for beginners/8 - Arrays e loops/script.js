var videoGames = ['switch', 'ps5', 'xboxSX', 'xboxSS', 'ps3', 'ps4']

videoGames.pop() // remove o último item e retorna ele
videoGames.push('3DS') // adiciona ao final da array
videoGames.length // 3



var lastItem = videoGames.pop()
console.log(lastItem) // 3ds
videoGames.length // 2

for (number = 0; number <= 5; number++) {
    console.log(number)
}

var i = 0
while (i <= 5) {
    console.log(i);
    i+=2
}

for (i = 0; i < videoGames.length; i++) {
    if (videoGames[i] === 'xboxSS') {
        break
    }
    console.log(videoGames[i])
}

videoGames.forEach((i, index) => {
    console.log(i, index)
})

var min = 0
var max = 50
for (;min <= max;){
    console.log(min)
    min+=10
}