// 1. Crea una clase que reciba dos propiedades

class Operations {
    constructor(a, b) {
        this.a = a
        this.b = b
    }
    sum () {
        return (this.a + this.b)
    }

    static multiply (a, b) {
        return (a * b)
    }
}

let sum = new Operations(5, 10)

// 2. Añade un método a la clase que utilice las propiedades

console.log(sum.sum())

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(`El primer numero es ${sum.a} y el segundo es ${sum.b}, la suma de los dos numeros es ${sum.sum()}`)

// 4. Añade un método estático a la primera clase

// 5. Haz uso del método estático

console.log(Operations.multiply(5,5))

// 6. Crea una clase que haga uso de herencia

class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        return `Hola, mi nombre es ${this.name}`
    }
}

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age)
        this.position = position
    }
    greet() {
        return `Hola, mi nombre es ${this.name}, y soy empleado`
    }
    work() {
        return `${this.name} esta trabajando como ${this.position}`
    }
}

let emp = new Employee('Artur', 26, 'Desarollador')

let per = new Person('Artur', 26)

console.log(per.greet())
console.log(emp.greet())
console.log(emp.work())

// 7. Crea una clase que haga uso de getters y setters

class Rectangle {

    #width
    #height

    constructor(width, height) {
        this.#width = width
        this.#height = height
    }

    get area() {
        return this.#width * this.#height
    }

    set dimensions({width, height}) {
        this.#width = width
        this.#height = height
    }

    get width() {
        return this.#width
    }

    get height() {
        return this.#height
    }
}

let rect = new Rectangle(5, 10)

console.log(rect.area)
rect.dimensions = {width: 7, height: 10}
console.log(rect.area)

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// 9. Utiliza los get y set y muestra sus valores

rect.dimensions = {width: 8, height: 4}
console.log(rect.width)
console.log(rect.height)
console.log(rect.area)

// 10. Sobrescribe un método de una clase que utilice herencia 

console.log(emp.greet())