// exportacion de modulos

// funciones

export function add(a,b) {
    return a + b
}

console.log(add(5, 10))

// propiedades

export const PI = 3.14
export let name = 'Arturo'

// clases

export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }
}

// exportacion por defecto

export default function subtract(a, b) {
    return a - b
}