// estructuras avanzadas

// arrays avanzados

// metodos funcionales

// forEach

let numbers = [1,2,3,4,5,6]

numbers.forEach(element => console.log(`El elemento actual es: ${element}`))

// map

let doubled = numbers.map(element => element * 2)
console.log(doubled)

// filter

let evens = numbers.filter(element => element % 2 === 0)
console.log(evens)

// reduce

let sum = numbers.reduce((previous, current)  => previous + current, 0)

console.log(sum)

// manipulacion

// flat

let nestedArray = [1, [2, [3, [4]]]]
console.log(nestedArray)
let flatArray = nestedArray.flat(1)
console.log(flatArray)
flatArray = nestedArray.flat(2)
console.log(flatArray)
flatArray = nestedArray.flat(3)
console.log(flatArray)

// flatMap

let phrases = ['Hola Mundo', 'Chau Mundo']

let words = phrases.flatMap(phrase => phrase.split(" "))

console.log(words)

// ordenacion

let unsorted = ['c', 'a', 'b', 'd']
let sorted = unsorted.sort()
console.log(sorted)

//unsorted = [3, 5, 2, 5, 6, 10 , 1]
unsorted = [1,8,7,9]
sorted = unsorted.sort((a, b) => a - b)
console.log(sorted)

// reverse

sorted.reverse() // muta el array
console.log(sorted)

// busqueda

// includes

console.log(sorted.includes(4))
console.log(sorted.includes(10))

// find: devuelve el primer elemento que cumple una condición especificada en una función de callback

let firstEven = sorted.find(element => element % 2 === 0)
console.log(firstEven)

// findIndex: devuelve el indice del primer elemento que cumple la condicion
let firstEvenIndex = sorted.findIndex(element => element % 2 === 0)
console.log(firstEvenIndex)

// sets avanzados

// operaciones

// eliminacion de duplicados

let numbersArray = [1, 2, 2, 3, 4, 5, 6, 6]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray)

// union

const setA = new Set([1,2,3,5])
const setB = new Set([2,3,4,5,6])

const union = new Set([...setA, ...setB])

console.log(union)

// interseccion

const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// diferencia

const diference = new Set([...setA].filter(element => !setB.has(element)))
console.log(diference)

// conversion 

console.log([...setA])

// iteracion

setA.forEach(element => {
    console.log(element)
})

// maps avanzados

let myMap = new Map([
    ['Name', 'Arturo'],
    ['Age', 26]
])
console.log(myMap)

myMap.forEach((value, key) => console.log(`${key}: ${value}`))

// conversion

// mapa a array

const arryFromMap = Array.from(myMap)
console.log(arryFromMap)

// mapa a objeto

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// objeto a mapa

const mapFromObjet = new Map(Object.entries(objectFromMap))