// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

let i = 0

// 1. Crea un bucle que imprima los números del 1 al 20

console.log('++ Ejercicio 1 ++')

console.log('For')
for (let i = 1; i <= 20; i++) {
    console.log(`Numero: ${i}`)
}

console.log('While')
i = 1
while(i <= 20) {
    console.log(`Numero: ${i}`)
    i++
}
// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

console.log('++ Ejercicio 2 ++')

console.log('For')
let total = 0

for (let i = 1; i <= 100; i++) {
    total = total + i
}
console.log(`La suma total de los numeros del 1 al 100 en el bucle for es de ${total}`)

console.log('While')
total = 0
let count = 0
while(count <= 100) {
    total = total + count
    count++;
}
console.log(`La suma total de los numeros del 1 al 100 en el bucle while es de ${total}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

console.log('++ Ejercicio 3 ++')
console.log('For')
for (let i = 1; i <= 50; i++) {
    if (i%2 === 0) {
        console.log(`Numero: ${i}`)
        continue
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

console.log('++ Ejercicio 4 ++')
const nombres = ['Ana', 'Luis', 'Carlos', 'María', 'Sofía'];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}

for (let nombre of nombres) {
    console.log(nombre)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

console.log('++ Ejercicio 5 ++')
let cadena = 'JavaScriptuuUUU'
count = 0

for (let i = 0; i < cadena.length; i++) {
    let minuscula = cadena.toLowerCase()
    if (minuscula[i] === 'a' || minuscula[i] === 'e' || minuscula[i] === 'i' || minuscula[i] === 'o' || minuscula[i] === 'u' ) {
        count++
    }
}
console.log(`La cadena tiene ${count} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

console.log('++ Ejercicio 6 ++')
let numeros = [2, 4, 2, 3]
let resultado = 1

for (let i = 0; i < numeros.length; i++) {
    resultado = resultado * numeros[i];
}

console.log(resultado)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

console.log('++ Ejercicio 7 ++')
count = 1
let num = 5

while(count <= 10) {
    let result = num * count
    console.log(`${num} por ${count} = ${result}`)
    count++
}

// 8. Usa un bucle para invertir una cadena de texto

console.log('++ Ejercicio 8 ++')
cadena = 'clasiformo'
let cadenaInvertida = ''

for (let i = cadena.length -1; i >= 0; i--) {
    cadenaInvertida += cadena[i]
}

console.log(cadenaInvertida)
console.log(cadena)


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

console.log('++ Ejercicio 9 ++')

let fibonacci = []
let sum = 0

for (let i = 1; i <= 10; i++) {
    if (fibonacci.length < 2) {
        fibonacci.push(1)
        continue
    }
    sum = fibonacci[fibonacci.length -1] + fibonacci[fibonacci.length -2]

    fibonacci.push(sum)
}
console.log(fibonacci)


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

console.log('++ Ejercicio 10 ++')
numeros = []

for (let i = 0; i < 100; i++) {
    let random = Math.floor(Math.random() * 100) + 1
    numeros.push(random)
}
console.log(numeros)
console.log(`Cantidad de elementos ${numeros.length}`)

let newArray = []

for (let i = 0; i < numeros.length -1; i++) {
    if (numeros[i] > 10) {
        newArray.push(numeros[i])
    }
}
console.log(newArray)
console.log(`Cantidad de elementos ${newArray.length}`)