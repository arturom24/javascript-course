// set

// declaracion

let mySet = new Set()

// inicializacion

mySet = new Set(['luffy', 'sanji', 26, true, 'nami'])

console.log(mySet)

// metodos comunes

// add y delete

mySet.add('clasiformo')

console.log(mySet)

console.log(mySet.delete('nami'))

if(mySet.delete('nami')) {
    console.log('Eliminado')
} else {
    console.log('No se encuentra en la lista')
}

console.log(mySet)

// has

console.log(mySet.has('luffy'))
console.log(mySet.has('brook'))

// size

console.log(mySet.size)


// convertir un set a array

let myArray = Array.from(mySet)

console.log(myArray)

mySet = new Set(myArray)

console.log(mySet)

// los set no admiten duplicados

mySet.add('luffy')

console.log(mySet)