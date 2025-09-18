// 1. Crea un array que almacene cinco animales

let animales = ['perro', 'gato', 'conejo', 'loro', 'tortuga']

console.log('++ Ejercicio 1 ++')
console.log(animales)

// 2. Añade dos mas. Uno al principio y otro al final

console.log('++ Ejercicio 2 ++')
animales.unshift('caballo')
animales.push('delfin')
console.log(animales)

// 3. Elimina el que se encuentra en la tercera posicion

console.log('++ Ejercicio 3 ++')
console.log(animales[2])
animales.splice(2,1)
console.log(animales)

// 4. Crea un set que almacene cinco libros

console.log('++ Ejercicio 4 ++')
let libros = new Set(['Estrella fugaz', 'Maze runner', 'El mundo de sofia', 'Habitos atomicos', 'El señor de los anillos'])
console.log(libros)

// 5. Añade dos mas. Uno de ellos repetido

console.log('++ Ejercicio 5 ++')
libros.add('Maze runner')
libros.add('100 años de soledad')
console.log(libros)

// 6. Elimina uno concreto a tu eleccion

console.log('++ Ejercicio 6 ++')
libros.delete('El mundo de sofia')
console.log(libros)

// 7. Crea un mapa que asocie el numero del mes a su nombre

console.log('++ Ejercicio 7 ++')
let mes = new Map([
    [1, 'Enero'],
    [2, 'Febrero'],
    [3, 'Marzo'],
    [4, 'Abril'],    
    [5, 'Mayo'],
    [6, 'Junio'],
    [7, 'Julio'],
    [8, 'Agosto'],
    [9, 'Septiembre'],
    [10, 'Octubre'],    
    [11, 'Noviembre'],
    [12, 'Diciembre'],
])

console.log(mes)

// 8. Comprueba si el numero existe en el map e imprime su valor

console.log('++ Ejercicio 8 ++')

let numeroABuscar = 10

if (mes.has(numeroABuscar)) {
    let numeroMes = mes.get(numeroABuscar)
    console.log(`El numero es ${numeroABuscar} y corresponde al mes de ${numeroMes}`)
} else {
    console.log('EL numero no existe en el map')
}

// 9. Añade al map una clave con un array que almacene los meses de verano

console.log('++ Ejercicio 9 ++')
mes.set(13, ['diciembre', 'enero', 'febrero'])
console.log(mes)

// 10. Crea un array, transformalo a un set y almacenalo en un map

console.log('++ Ejercicio 10 ++')

let arrayMugiwaras = ['luffy', 'zoro', 'zoro', 'usopp', 'nami', 'usopp', 'sanji']

console.log(arrayMugiwaras)

let setMugiwaras = new Set(arrayMugiwaras)

console.log(setMugiwaras)

let myMap = new Map([
    ['myArray', arrayMugiwaras],
    ['mySet', setMugiwaras]
])

console.log(myMap.entries())