// 1. Crea una función que retorne a otra función

function crearSaludo (idioma) {
    if (idioma == 'es') {
        return (name) => console.log(`Hola, ${name}`)
    }
    if (idioma == 'en') {
        return (name) => console.log(`Hello, ${name}`)
    }
    if (idioma == 'fr') {
        return (name) => console.log(`Bonjour, ${name}`)
    }
}

const saludoEnEspañol = crearSaludo('es')
const saludoEnFrances = crearSaludo('fr')

saludoEnEspañol('Arturo')
saludoEnFrances('Arturo')

// 2. Implementa una función currificada que multiplique 3 números
const multiply = a => b => c => a * b * c

console.log(multiply(2)(2)(2))

const calcularPrecio = precioBase => impuesto => descuento => {
    return (precioBase + impuesto) - descuento
}

console.log(calcularPrecio(100)(21)(10))

const conIVA = calcularPrecio(100)(21)
console.log(conIVA(0))
console.log(conIVA(10))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente

function potencia (base, exponente) {
    if (exponente == 0) {
        return 1
    }
    return base * potencia(base, exponente -1)
}

console.log(potencia(2,3))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

function createCounter (n) {
    let count = n
  return {
    increment: ()=> {
        count++
        console.log(`Contador: ${count}`)
    },
    decrement: ()=> {
    count--
    console.log(`Contador: ${count}`)    
    },
    getValue: () => count
  }
}


const counter = createCounter(5)

counter.increment()
counter.increment()
console.log(counter.getValue())
counter.decrement()

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

function sumManyTimes(multiplier, ...numbers) {
    let sum = numbers.reduce((total, num) => total + num, 0)
    return sum * multiplier
}

let arr = [2,2,4]
let result = sumManyTimes(2, ...arr)

console.log(result)

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumWithCallback(callback, ...numbers) {
    let sum = numbers.reduce((acc, num ) => acc + num, 0)
    callback(sum)
}

function mostrarResultado(result) {
    console.log(result)
}

sumWithCallback(mostrarResultado, 1,2,3,4)

// 7. Desarrolla una función parcial

function multiplicar(a, b, c) {
    return a * b * c
}

function pacialMultiplicar(a) {
    return (b, c) => multiplicar(a, b, c)
}

const multiplicarPor2 = pacialMultiplicar(2)
console.log(multiplicarPor2(3,4))

// 8. Implementa un ejemplo que haga uso de Spread

const numeros = [1, 2, 3, 4];

console.log(Math.max(...numeros));
console.log([...numeros, 5, 6]);  

// 9. Implementa un retorno implícito

const cuadrado = n => n * n

console.log(cuadrado(4))

// 10. Haz uso del this léxico

const persona = {
    nombre: "Arturo",
    saludoNormal: function() {
        console.log("Hola " + this.nombre);
    },
    saludoArrow: () => {
        console.log("Hola " + this.nombre);
    }
};

persona.saludoNormal();
persona.saludoArrow();
