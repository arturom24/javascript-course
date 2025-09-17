// set

// declaracion

let mySet = new Set()

console.log(mySet)

// agregar valores

mySet.add('Hola')
mySet.add(123)
mySet.add(true)
mySet.add({nombre: 'Juan', edad: 30})
mySet.add([1, 2, 3])

console.log(mySet)

mySet.add(13) // no se agrega porque ya existe

console.log(mySet)

// metodos comunes

// size

console.log(mySet.size)

// has

console.log(mySet.has(2))
console.log(mySet.has(5))

// delete

// mySet.delete(2)
// console.log(mySet)

// clear

// mySet.clear()
// console.log(mySet)

// recorrer un set

// mySet.forEach(function(value) {
//     console.log(value)
// })

// for (let value of mySet) {
//     console.log(value)
// }

// convertir un set a array

// const myArray = Array.from(mySet)
// console.log(myArray)

// const myArray2 = [...mySet]
// console.log(myArray2)
//     console.log(`El mes de ${mes} tiene ${dias} días`)