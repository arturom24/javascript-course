// importacion de modulos

import { add, PI, name, Circle } from './26-export-modules.js'

import subtract from './26-export-modules.js'

// funciones

console.log(add(20, 10))

// propiedades 

console.log(PI)
console.log(name)

// clases

let circle = new Circle(5)

console.log(circle.radius)
console.log(`El area del circulo es ${circle.area().toFixed(2)}`)

// importacion por defecto

console.log(subtract(10, 5))

