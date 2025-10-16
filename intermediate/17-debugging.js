// depuracion

// console.log()

function sum(a, b) {
    console.log('a:', a)
    console.log('b:', b)
    console.log(typeof a)
    console.log(typeof b)
    return a + b
}

console.log(sum(3, '4'))

// depuracion (profecional)

function divide(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero')
    }
    return a / b

}

console.log(divide(5,0))