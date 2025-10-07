// Clase: 
// es una plantilla para crear objetos con propiedades y metodos
// es la forma moderna de aplicar POO en javascript

// Constructor:
// es un metodo que se ejecuta al crear una nueva instancia de una clase
// sirve para inicializar propiedades

// Herencia (extends, super):
// permite que una clase herede propiedades y metodos de otra
// extends indica que clase se hereda, y super() llama al contructor padre

// Metodos de instancia:
// funciones que pertenecen a cada objeto creado a partir de una clase

// Getters y Setters(get, set):
// son funciones especiales que controlan como se accede o modifica una propiedad
// sirven para validaciones, formateo o comportamiento dinamico

// Object.assign()
// copia porpiedades de uno o mas objetos a otro
// util para combinar o clonar objetos

// Clase abstracta:
// una clase que no debe instanciar directamente y sirve como base para otras
// JS no tiene clases abstractas reales, pero simulan lanzando errores si se
// intenta acceder a una

// Polimorfismo:
// distintas clases pueden usar el mismo metodo con comportamientos diferentes

// Mixins:
// es un objeto con metodos reutilizables que se pueden mezclar en una clase
// uso menos frecuente actualmente

// Singleton:
// patron que se asegura que solo exista una instancia de una clase

// Proxy:
// objeto especial que intercepta operaciones sobre otro(lectura, escritura, etc)



// 1. Agregega una función al prototipo de un objeto

function user(name, age) {
    this.name = name
    this.age = age
}
// usar prototype se comparte en todas las instancias de user
user.prototype.saludo = function() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age}`)
} 

const user1 = new user('artur', 26)
const user2 = new user('jose', 20)

user1.saludo()
user2.saludo()

// 2. Crea un objeto que herede de otro

class Manga {
    constructor(name, volumen, editorial) {
        this._name = name
        this._volumen = volumen
        this._editorial = editorial
    }

    // metodo de instancia
    info() {
        console.log(`${this._name} - Volumen ${this._volumen} (${this._editorial})`)
    }

    get name() {
        if(!this._name || this._name.length === 0) {
            return 'No se le asigno ningun valor'
        }
        return this._name.toUpperCase()
    }

    set name(newName) {
        if(newName.length < 3) {
            console.log('El nombre es demasiado corto')
        } else {
            this._name = newName
        }
    }
}

class OnePiece extends Manga {
    constructor(name, volumen, editorial, protagonista) {
        super(name, volumen, editorial)
        this.protagonista = protagonista
    }
}
const onepiece = new OnePiece('One Piece', 1, 'Ivrea', 'luffy')
console.log(onepiece)

// 3. Define un método de instancia en un objeto

const naruto = new Manga('Naruto', 3, 'Panini')
naruto.info()
onepiece.info()

// 4. Haz uso de get y set en un objeto

const bleach = new Manga()
console.log(bleach.name)
bleach.name = 'Bl'
bleach.name = 'Bleach'
console.log(bleach.name)

// 5. Utiliza la operación assign en un objeto

const base = {
    name: 'One Piece',
    volumen: 1
}
const extras = {
    autor: 'Oda',
    editorial: 'Shueisha'
}
// commbina propiedades de varios objetos en uno nuevo
const completo = Object.assign({}, base, extras)
console.log(completo)

// 6. Crea una clase abstracta

class Figura {
    constructor() {
        if (new.target === Figura) {
            throw new Error('No se puede instanciar una clase abstracta')
        }
    }
    area() {
        throw new Error('Debes implementar el metodo area()')
    }
}

class Cuadrado  extends Figura{
    constructor(lado) {
        super()
        this.lado = lado
    }
    area() {
        return this.lado * this.lado
    }
}

const cuadrado = new Cuadrado()
cuadrado.area()

// 7. Utiliza polimorfismo en dos clases diferentes

// permite que distintas clases usen un mismo metodo con comportamientos diferentes
class Animal {
    sonido() {
        console.log('Hace un sonido')
    }
}

class Gato extends Animal {
    sonido() {
        console.log('Miau!')
    }
}

class Perro extends Animal{
    sonido() {
        console.log('Guau!')
    }
}

const animales = [new Gato(), new Perro()] 
animales.forEach(acc => acc.sonido())

// 8. Implementa un Mixin

const Volador = {
    volar() {
        console.log(`${this.name} esta volando.`)
    }
}
class Personaje {
    constructor(name) {
        this.name = name
    }
}

Object.assign(Personaje.prototype, Volador)

const luffy = new Personaje('Luffy')
luffy.volar()

// 9. Crea un Singleton

// asegura que solo exista una instancia de la clase
class Config {
    constructor() {
        if(Config.instance) {
            return Config.instance
        }
        this.theme = 'dark'
        Config.instance = this
    }
}

const c1 = new Config()
const c2 = new Config()
console.log(c1 === c2)

// 10. Desarrolla un Proxy

const newUser = {
    name: 'artur',
    age: 26
}

const proxy = new Proxy(user , {
    get(target, prop) {
        console.log(`Accediendo a ${prop}`)
        return target[prop]
    },
    set(target, prop, value) {
        console.log(`Asignando ${value} a ${prop}`)
        target[prop] = value
        return true
    }
})

console.log(proxy.name)
proxy.age = 27

