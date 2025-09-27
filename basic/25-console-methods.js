// console

// log 

console.log('Hola JavaScript')

// error

console.error('Este es un mensaje de error')
console.error('Error al conectarse a la base de datos', new Error('Conexion fallida'))

// warn

console.warn('Este es un mensaje de advertencia')

// info 

console.info('Este es un mensaje de informacion adicional')

// table

let data = [
    {'Arturo': 26}
]
console.table(data)

let data2 = [
    {name: 'Artur', age: 26},
    {name: 'Artur', age: 26},
    {name: 'Artur', age: 26}
]
console.table(data2)

 // group

console.group('Usuario:')
console.log('Nombre: Arturo')
console.log('Edad: 26')
console.groupEnd()

// time

console.time('Tiempo de ejecucion 2')

for(let i = 0; i < 10000; i++){}

console.timeEnd('Tiempo de ejecucion 2')

console.time('Tiempo de ejecucion')

for(let i = 0; i < 10000; i++){}

console.timeEnd('Tiempo de ejecucion')

// assert

let age = 18
console.assert(age >= 18, 'El usuario debe ser mayor de edad')

// count

console.count('Click')
console.count('Click')
console.count('Click')
console.countReset('Click')
console.count('Click')

// trace

function funcA() {
    funcB()
}
function funcB() {
    console.trace('Seguimiento de la ejecucion')
}

funcA()

// clear

// console.clear()