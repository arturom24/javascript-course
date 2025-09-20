// funciones

// simple

function myFunc() {
    console.log(`Hola, función!`)
}

for (let i = 0; i < 5; i++) {
    myFunc()    
}

// con parametros

function myFunctionWhitParams(name) {
    console.log(`Hola, ${name}`)
}

for (let i = 0; i < 5; i++) {
    myFunctionWhitParams('Artur')    
}

// funciones anonimas

const myFunc2 = function(name) {
    console.log(`Hola, ${name}`)
}

myFunc2('Arturo')

// arrow functions

const myFunc3 = (name) => 
console.log(`Hola, ${name}`)

myFunc3('Clasi')

// parametros 

const sum = (a, b) => {
    console.log(a + b)
}

sum(5, 10)
sum(5)

// parametros por defecto

const defaultSum = (a = 0, b = 0) => {
    console.log(a + b)
}

defaultSum(10)
defaultSum(10, 3)

// retorno de valores

function mult(a, b) {
    return a * b
}

let result = mult(5,10)
console.log(result)

// funcones anidadas

function extern() {
    console.log('Funcion externa')
    function intern(){
        console.log('Funcion interna')
    }
    intern()
}

extern()
// intern() Error: fuera del scope

// funciones de orden superior

function applyFunc(funct, params) {
    funct(params)
}

applyFunc(myFunc3, 'funcion de orden superior')

// forEach

let myArray = [1, 2, 3, 4, 5, 6]

let mySet = new Set(['luffy', 'zoro', 'nami', 'usopp'])

let myMap = new Map([
    ['name', 'Luffy'],
    ['rol', 'capitan'],
    ['age', 17]
])

myArray.forEach((num) => console.log(num))

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))