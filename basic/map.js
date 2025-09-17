// map

// declaracion

let myMap = new Map()

console.log(myMap)

// inializacion

myMap = new Map([
    ['name', 'Arturo'],
    ['email', 'artur@gmail.com'],
    ['age', 26]
])

console.log(myMap)

// metodos y propiedades

// set (actualizar y añadir valores)

myMap.set('alias', 'artutu')

console.log(myMap)

// get (recuperar valor)

console.log(myMap.get('name'))
console.log(myMap.get('artutu'))

// has (tiene)

console.log(myMap.has('artutu'))

// delete

myMap.delete('email')

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear (limpiar)

myMap.clear()

console.log(myMap)