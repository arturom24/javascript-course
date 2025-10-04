// objetos avanzados

// prototipos y herencia

// prototipos

let person = {
    name: 'Arturo',
    age: 26,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.sayAge = function() {
    console.log(`Tengo ${this.age}`)
}

console.log(person)
person.sayAge()

// herencia

let programmer = Object.create(person)

programmer.greet()
console.log(programmer.greet())

// metodos estaticos y de instancia

function Person (name, age) {
    this.name = name
    this.aga = age
}

Person.prototype.greet = function() {
        console.log(`Hola, soy ${this.name}`)
}

let new_person = new Person('Arturo', 26)
new_person.greet()

// metodos avanzados

// assing

let person_core = {name: 'Arturo'}

let person_details = {age: 26, alias: 'arturom24'}

let fullPerson = Object.assign(person_core, person_details)

console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))
