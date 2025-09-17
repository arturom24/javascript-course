// array

// declaracion

let myArray = []

let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1,2,3,4)

console.log(myArray)
console.log(myArray2)

// metodos comunes

myArray = []

// push y pop

myArray.push('artur')
myArray.push('luffy')
myArray.push('nakama')

console.log(myArray.pop()) // elimina el ultimo y lo devuelve
myArray.pop
console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift('luffy', 'zoro', 'nami')
console.log(myArray)

// length

console.log(myArray.length)

// slice

console.log(myArray.slice(1,3))
console.log(myArray)

// splice

myArray.splice(2,1, 'nuevo')
console.log(myArray)

// filter

const numeros = [1,2,3,4,5,6,7,8]

const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
})

console.log(numerosPares)

// map

const numerosPorDos = numeros.map(function(numero) {
    return numero * 2
})

console.log(numerosPorDos)

// forEach

numeros.forEach(function(numero) {
    console.log(numero)
})

// find

const encontrado = numeros.find(function(numero) {
    return numero > 5
})

console.log(encontrado)

// some

const hayMayorQueDiez = numeros.some(function(numero) {
    return numero > 10
})

console.log(hayMayorQueDiez)

// every

const todosMenoresQueDiez = numeros.every(function(numero) {
    return numero < 10
})

console.log(todosMenoresQueDiez)

// reduce

const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero
}, 0)

console.log(suma)

// concat

const array1 = [1,2,3]
const array2 = [4,5,6]

const array3 = array1.concat(array2)
console.log(array3)

// spread operator

const array4 = [...array1, ...array2]
console.log(array4)

// convertir un string a array

const string = 'Hola mundo'
const stringArray = string.split(' ')
console.log(stringArray)

// convertir un array a string

const nuevoString = stringArray.join(' ')
console.log(nuevoString)

// indexOf

console.log(stringArray.indexOf('mundo'))
console.log(stringArray.indexOf('adios'))

// includes

console.log(stringArray.includes('mundo'))
console.log(stringArray.includes('adios'))
