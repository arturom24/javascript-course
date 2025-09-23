// objects

// sintaxis

let person = {
    name: 'Arturo',
    age: 26,
    alias: 'arturm24'
}

console.log(person.name)
console.log(typeof person.age)

// modificacion de propiedades

//person.name = 'Arturo Miranda'
console.log(person.name)

person.age = '26'

console.log(typeof person.age)

// eliminacion de propiedades

delete person.age

console.log(person)

// nueva propiedad

person.email = 'miemail.com'

console.log(person)

// metodos (funciones)

let person2 = {
    name: 'Artur',
    age: 26,
    alias: 'arturm24',
    walk: function() {
        console.log('La persona camina')
    }
}

person2.walk()

// anidacion de objetos

let person3 = {
    name: 'Artur',
    age: 26,
    alias: 'arturm24',
    walk: function() {
        console.log('La persona camina')
    },
    job: {
        name: 'progamador',
        exp: 1, 
        work: function() {
            console.log('La persona trabaja')
        }
    } 
}

console.log(person3)

console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)

// igualdad de objects

let person4 = {
    name: 'Arturo',
    age: 26,
    alias: 'arturm24'
}

console.log(person)
console.log(person4)

console.log(person == person4)
console.log(person === person4)

console.log(person.name == person4.name)

// iteracion

// for in
for (let key in person4) {
    console.log(key + ': ' + person4[key  ])
}

// funciones como objetos

function Person(name, age) { // deberia ser una clase
    this.name = name
    this.age = age
}

let person5 = new Person('Artur', 26)
console.log(person5)
console.log(typeof person5)
console.log(typeof person4)