var x = 5
var y = 10
x += y // x = x + y (15)
x -= y // x = x - y (-5)
x *= y // x = x * y (50)
x /= y // x = x / y (0.5)
x %= y // x = x % y (0)
x **= y // x = x ** y (9765625)

var age = 18
var haveDriverLicense = false
var canDrive = (age >= 18 && haveDriverLicense) ? 'can drive' : 'can\'t drive' // condição ? true : false
console.log(canDrive)

//if else com apenas 1 linha nao é obrigatório o {}
var test = true
if (test) console.log(test);
else console.log(test);

if (test)
    console.log(test);
else
    console.log(test);