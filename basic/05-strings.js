// Strings

// concatenacion de cadenas
let myName = 'Arturo'

let greating = 'Hola, ' + myName
console.log(greating)

// longitud

console.log(greating.length)

// acceso a carecteres

console.log(greating[0])
console.log(greating[1])

// metodos comunes

console.log(greating.toUpperCase())
console.log(greating.toLowerCase())
console.log(greating.indexOf("Arturo"))
console.log(greating.includes('Hola'))
console.log(greating.includes('Arturo'))
console.log(greating.includes('Miranda'))
console.log(greating.slice(0,10))
console.log(greating.replace('Arturo', 'Miranda'))

console.log(`Hola, ${myName}!`)