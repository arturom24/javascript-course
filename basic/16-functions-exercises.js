
// 1. Crea una función que reciba dos números y devuelva su suma

const sum = (a, b) => a + b

let result = sum(10, 5)

console.log(`La suma de los numeros es ${result}`)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

console.log('++ Ejercicio 2 ++')
function encontrarMayor(numeros) {
    let mayor = numeros[0]
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i]
        }
    }
    return mayor
}

let myArray = [3, 6, 2, 7, 2, 7, 8, 3, 4]

const numeroMayor = encontrarMayor(myArray)

console.log(numeroMayor)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

console.log('++ Ejercicio 3 ++')
let palabra = 'arturo'
function devolverVocales (text) {
    let minuscula = text.toLowerCase()
    let count = 0
    for (let i = 0; i <= text.length -1; i++) {
        if (minuscula[i] === 'a' || minuscula[i] === 'e' || minuscula[i] === 'i' || minuscula[i] === 'o' || minuscula[i] === 'u') {
            count++ 
        }
    }
    return count
}

let vocales = devolverVocales(palabra)
console.log(`La palabra '${palabra}' tiene ${vocales} vocales`)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

console.log('++ Ejercicio 4 ++')
let convertirAMayusculas = (arr) => {
    return arr.map(palabra => palabra.toUpperCase())
}

let palabras = ['luffy', 'nami', 'zoro']
let resultado = convertirAMayusculas(palabras)

console.log(resultado)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

console.log('++ Ejercicio 5 ++')

function esPrimo(num) {
    if (num <= 1) return 'no es primo'
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'no es primo'
        }
    }
    return 'es primo'
}
let num = 37
result = esPrimo(num)
console.log(`El numero ${num} ${result}`)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

console.log('++ Ejercicio 6 ++')
function elementosComunes(arr1, arr2) {
    let comunes = []
    for (let i = 0; i < arr1.length; i++){
        let elemento = arr1[i]
        if (arr2.includes(elemento)){
            comunes.push(elemento)
        }
    }
    return comunes
}

console.log(elementosComunes([1, 2, 3], [2, 3, 4]))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

console.log('++ Ejercicio 7 ++')
function sumaDePares(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum = sum + arr[i]
        }
    }
    return sum
}

console.log(sumaDePares([1,2,3,4,5,6,7,8,9,10]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

console.log('++ Ejercicio 8 ++')
function alCuadrado(arr) {
    let arr2 = []
    for (i = 0; i < arr.length; i++) {
        let cuadrado = arr[i] * arr[i]
        arr2.push(cuadrado)
    }  
    return arr2
}

console.log(alCuadrado([1,2,3]))

// con map
let numeroAlCuadrado = (arr) => {
    return arr.map (num => num * num)
}

console.log(numeroAlCuadrado([2,3,4,5]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

console.log('++ Ejercicio 9 ++')
function cadenaInvertida (palabra) {
    let palabraInverida = ''
    for (let i = palabra.length -1 ; i >= 0; i--) {
        palabraInverida += palabra[i]
    }
    return palabraInverida
}

console.log(cadenaInvertida('arturo'))

// 10. Crea una función que calcule el factorial de un número dado

console.log('++ Ejercicio 10 ++')

function calcularFactorial(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *=  i
    }
    return result
}

console.log(calcularFactorial(5))