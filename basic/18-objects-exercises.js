// 1. Crea un objeto con 3 propiedades

let animal = {
    name: 'michito',
    age: 1,
    raza: 'naranja'
}

console.log(animal)

// 2. Accede y muestra su valor

for (let key in animal) {
    console.log(`${key}: ${animal[key]}`)
}

// 3. Agrega una nueva propiedad

animal.sexo = 'macho'
console.log(animal)

// 4. Elimina una de las 3 primeras propiedades

delete animal.raza

console.log(animal)

// 5. Agrega una función e invócala

animal.saludar = function() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} año(s)`)
}

console.log(animal)
animal.saludar()


// 6. Itera las propiedades del objeto

for (let key in animal) {
    console.log(`${key}: ${animal[key]}`)
}

// 7. Crea un objeto anidado

let person = {
    name: 'Arturo',
    age: 26,
    direction: {
        city: 'Clorinda',
        province: 'Formosa',
        country: 'Argentina'
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(person.direction.city)
console.log(person.direction.province)
console.log(person.direction.country)

// 9. Comprueba si los dos objetos creados son iguales

let person2 = {
    name: 'Arturo',
    age: 26,
    direction: {
        city: 'Clorinda',
        province: 'Formosa',
        country: 'Argentina'
    }
}

console.log(person == person2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(person.name == person2.name)
console.log(person.age == person.direction.city)