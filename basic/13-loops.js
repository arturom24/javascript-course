// loops o bucles

// for (para)

for (let i = 0; i < 5; i++) {
    console.log(`hola ${i}`)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

for(let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

// while (mientras)

let i = 0;

while (i < 5) {
    console.log(`Hola ${i}`)
    i++;
}

// do while

i = 10;

do {
    console.log('Esto se ejecuta al menos una vez')
    console.log(`Hola ${i}`)
    i++
} while (i < 5)

// for of

let myArray = [1, 2, 3, 4, 5]

let mySet = new Set(['luffy', 'zoro', 'nami', 'usopp'])

let myMap = new Map([
    ['name', 'Luffy'],
    ['rol', 'capitan'],
    ['age', '17']
])

for (let valor of myArray) {
    console.log(valor)
}

for (let valor of mySet) {
    if (valor === 'nami') {
        console.log(`La navegante es ${valor}`)
        continue
    }
    console.log(valor)
}

for (let valor of myMap) {
    console.log(valor)
}

let myString = 'Hola, JavaScript'

for (valor of myString) {
    console.log(valor)
}

// buenas practicas

// break y continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue
    }

    if (i === 7) {
        console.log('Paramos el bucle')
        break
    }
    console.log(i)
}