// clases avanzadas

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

const person = new Person('Arturo', 26)
person.greet()

console.log(person)

person.sayAge = function() {
    console.log(`Tengo ${this.age} años`)
}

person.sayAge()

// clases abstractas

class Animal {
    constructor(name, ) {
        if(new.target === Animal) {
            throw new Error('No se puede instanciar una clase abstracta')
        }
        this.name = name
    }

    makeSound() {
        throw new Error('Este metodo tiene que ser implementado por la subclase')
    }

}

// Error
// const animal = new Animal('Naruto')
// animal.makeSound()

// polimorfismo

class Cat extends Animal {
makeSound() {
    console.log('Miau!')
}
}

class Dog extends Animal {
    makeSound() {
        console.log('Guau!')
    }
}

const cat = new Cat('Naruto')
console.log(cat)
cat.makeSound()

const dog = new Dog('Ñato')
console.log(dog)
dog.makeSound()

// mixins

const FlyMixin = {
    fly() {
        console.log(`${this.name} esta volando`)
    }
}

class Bird extends Animal {  }
class Dragon extends Animal { }

Object.assign(Bird.prototype, FlyMixin)

const bird = new Bird('Chimu') 
const dragon = new Bird('Dragon')

console.log(bird)
  
bird.fly()
dragon.fly()

// patron singleton

class Session {
    constructor(name, email) {
        if(Session.instance) {
            return Session.instance
        }
        this.name = name
        this.email = email 
        Session.instance = this
    }
}

const session1 = new Session('Arturo', 'arturo@gmail.com')
console.log(session1)

const session2 = new Session()

console.log(session1.name)
console.log(session2.name)
console.log(session1 === session2)

// symbol

const ID = Symbol('id')

class User {
    constructor(name) {
        this.name = name
        this[ID] = Math.random()
    }
    getID() {
        return this[ID]
    }
}

const user = new User('Arturo')
console.log(user)
console.log(user[ID])

//user[ID] = 12345
//console.log(user[ID])

console.log(user.getID())

// instanceof

class Car {}

const car = new Car()

//console.log(car === Car)
console.log(car instanceof Car)

// proxy

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car)
console.log(anotherCar)

// proxy

const proxy = {
    get(target, property){
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },

    set(target, property, value) {
        if(property === 'balance' && value < 0) {
            throw new Error('El saldo no puede ser negativo')
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy)

console.log(account.balance)

account.balance = 50

console.log(account.balance)