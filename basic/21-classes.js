// clases

class Person {
    constructor(name, age, alias) {
        this.name = name,
        this.age = age, 
        this.alias = alias
    }
}

// sintaxis 

let person = new Person('arturo', 26, 'arturom24')
let person2 = new Person('arturo', 26, 'arturom24')

console.log(person)
console.log(person2)

console.log(typeof person)

// valores por defecto

class DefaultPerson {
    constructor(name = 'sin nombre', age = 0, alias = 'Sin alias') {
        this.name = name,
        this.age = age, 
        this.alias = alias
    }
}

let person3 = new DefaultPerson('Artur')
console.log(person3)

// acceso a propiedades

console.log(person3.alias)
console.log(person3['alias'])

person3.alias = 'arturm24'

console.log(person3.alias)

// funciones en clases

class PersonWithMethod {
    constructor (name, age, alias) {
        this.name = name,
        this.age = age,
        this.alias = alias
    }
    walk() {
        console.log('La persona camina')
    }
}

let person4 = new PersonWithMethod('Artur', 26, 'arturm24')

console.log(person4)
person4.walk()

// propiedades privadas

class PrivatePerson {

    #bank 

    constructor(name, age, alias, bank) {
        this.name = name,
        this.age = age,
        this.alias = alias,
        this.#bank = bank
    }
    pay() {
        this.#bank
    }
}

let person5 = new PrivatePerson ('Artur', 26, 'arturom24', 'BANK12345')

// console.log(person5.bank) no podemos acceder

console.log(person5)

// getters y setters

class GetSetPerson {

    #name 
    #age 
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name,
        this.#age = age, 
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    } 

    get alias() {
        return this.#alias
    } 

    set bank(newBank) {
        this.#bank = newBank
    }
}

let person6 = new GetSetPerson('Artur', 26, 'arturom24', 'BANK12345')

console.log(person6.bank)
console.log(person6.age)
person6.bank = 'new BANK12345'

// herencia

class Animal {
    constructor (name) {
        this.name = name
    }
    sound () {
        console.log('Emite un sonido generico')
    }
}

class Dog extends Animal {
    sound () {
        console.log('Guau!')
    }

     run() {
        console.log('El perro corre')
     }
}

class Fish extends Animal {
    constructor (name, size) {
        super(name)
        this.size = size
    }
    swin () {
        console.log ('El pez nada')
    }
}

let myDog = new Dog('Doctor Q') 

myDog.run()
myDog.sound()

let myFish = new Fish('Fisher Tiger', 10)

myFish.swin()
myFish.sound()
console.log(myFish.name)
console.log(myFish)

// metodos estaticos

class MathOperations {
    static sum(a, b) {
        return(a + b) 
    }
}

console.log(MathOperations.sum(5,10))