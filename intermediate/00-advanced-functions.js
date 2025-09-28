// funciones avanzadas

// ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet('Artur')

function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet
}

processGreeting(greet, 'Arturoo')

console.log(returnGreeting())

const greet2 = returnGreeting()

greet2('Arturo Miranda')

// arrow functions avanzadas

// -retorno impplicito
const multiply = (a, b) => a * b
console.log(multiply(2, 5))

// -this lexico
const handler = {
    name: 'Arturo',
    greeting: function() {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => console.log(`Hola, ${this.name}`)
}

handler.greeting()
handler.arrowGreeting();

// IIFE (Expresión de Función Invocada Inmediatamente)
(function() {
  const nombre = "Baumann";
  console.log(`Hola, ${nombre}!`);
})(); // Se ejecuta inmediatamente

(()=> {
    console.log('IIFE con arrow function')
})();

// parametros Rest (...)
function sum(...numbers) {
  let result = 0
  for(let number of numbers) {
    result += number
  }
  return result
}
console.log(sum(1,2,3,4,5))

// Operator Spread (...)

const numbers = [1, 2, 3]

function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1, 2, 3))
console.log(sumWithSpread(...numbers))

// closures (Claururas)

function createCounter () {
  let counter = 0
  return function executeCounter() {
    counter++
    console.log(`Contador: ${counter}`)
  }
}

createCounter

const counter = createCounter()
counter()
counter()
counter()
counter()

const counter2 = createCounter()
counter2()
counter2()


// recursividad

function factorial(n) {
  if (n <= 1) {
    return 1

  }
  return n * factorial(n -1)
}

console.log(factorial(5))

function contar(n) {
    if (n === 0) {         
        console.log("¡Listo!");
        return;
    }
    console.log(n);
    contar(n - 1);           
}

contar(5);

// funciones parciales

function partialSum (a) {
    return function(b, c) {
        return sum(a, b, c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(4,3))
console.log(sumWith(1,2))

// currying

function currySum(a) {
    return function(b) {
        return function (c) {
            return function (d) {
                 return sum(a, b, c, d)
            }
        }
    }
}

const sumAB = currySum(1)(2)
const sumC = sumAB(3)

console.log(sumC(3))
console.log(sumC(4))
console.log(sumAB(5)(7))

// callbacks 

function processData(data, callback) {
    const result = sum(...data)
    callback(result)
} 

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`El resultado es: ${result}`)
}

processData([1, 2, 3], processResult)
processData([1, 2, 3], processResult2)
processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
})