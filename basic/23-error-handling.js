// exepcion

// produce una excepcion

let myObjet
// console.log(myObjet.name)

// captura de errores

// try-catch

try {
    // codigo que intenta ejecutar
    console.log(myObjet)
    console.log('Finaliza la ejecucion')
} catch {
    console.log('Se ha producido un error')
}

// captura de error

try {
    // codigo que intenta ejecutar
    console.log(myObjet.name)
    console.log('Finaliza la ejecucion')
} catch (error){
    console.log('Se ha producido un error', error.message)
}

// finally

try {
    console.log(myObjet)
    console.log('Finaliza la ejecucion')
} catch (error){
    console.log('Se ha producido un error', error.message)
} finally {
    console.log('Este codigo se ejecuta siempre')
}
// no esta soportado
// try {
//     console.log(myObjet.email)
//     console.log('Finaliza la ejecucion')
// } finally {
//     console.log('Este codigo se ejecuta siempre')
// }


// crear excepciones personalizadas

class SumZeroIntegerError extends Error {
    constructor(message, a, b) {
        super(message)
        this.a = a
        this.b = b
    }

    printNumbers() {
        console.log(`${this.a} + ${this.b}`)
    }
}

// lanzamiento de errores

//throw new Error('Se ha producido el error')

function sumIntegers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Esta operacion solo suma numeros')
    }
    if (!(Number.isInteger(a)) || !(Number.isInteger(b))) {
        throw new Error('Esta operacion solo suma numeros enteros')
    }
    if (a === 0 || b === 0) {
        throw new SumZeroIntegerError('Se esta intentando sumar cero', a, b)
    }
    return a + b
}

try {
    console.log(`La suma es: ${sumIntegers(0,5)}`)
    console.log(`La suma es: ${sumIntegers('a',5)}`)
    console.log(`La suma es: ${sumIntegers(4.5,5)}`)
    console.log(`La suma es: ${sumIntegers(10,5)}`)
} catch (error) {
    if (error instanceof TypeError) {
        console.log('Se ha producido un error de tipo:', error.message)
    } else if (error instanceof SumZeroIntegerError) {
        console.log('Se ha producido un error personalizado:', error.message)
    } else if (error instanceof Error) {
        console.log('Se ha producido un error:', error.message)
    }
}



