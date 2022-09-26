var haveDegree = true
var haveDoctorateDegree = false

if (haveDoctorateDegree) {
    console.log('have doctorate');
} else if (haveDegree) {
    console.log('have degree but don\'t have doctorate');
} else {
    console.log('don\'t have both');
}

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

// && compara se uma expressão e a outra é verdadeira
true && true; // true
true && false; // false
false && true; // false
'Cat' && 'Dog'; // 'Dog'
(5 - 5) && (5 + 5); // 0
'Cat' && false; // false
(5 >= 5) && (3 < 6); // true

// || Compara se uma expressão ou outra é verdadeira
true || true; // true
true || false; // true
false || true; // true
'Cat' || 'Dog'; // 'Cat'
(5 - 5) || (5 + 5); // 10
'Cat' || false; // Cat
(5 >= 5) || (3 < 6); // trues

// switch
var favoriteColor = 'blue'

switch (favoriteColor) {
    case 'blue':
        console.log('sky');
        break
    case 'yellow':
        console.log('sun');
        break
    case 'green':
        console.log('weed');
        break
    default:
        console.log('none');
}