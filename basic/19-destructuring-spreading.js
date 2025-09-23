let myArray = [1, 2, 3]

let person = {
    name: 'Artur',
    age: 26,
    alias: 'arturm24'
}

let myValue = myArray[1]
console.log(myValue)

// desestructuracion

// sintaxis arrays

let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray

console.log(myValue0)
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)

// sintaxis arrays con valores predeterminados

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray

console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myValue8)
console.log(myValue9)

// ignorar elementos de un array

let [myValue10, , , myValue13] = myArray
console.log(myValue10)
console.log(myValue13)

// sintaxis objects

let {name, age, alias} = person
console.log(name)
console.log(age)
console.log(alias)


// sintaxis objects con valores predeterminados

let {name2, age2, alias2, email = 'artur@gmail.com'} = person
console.log(name2) // no existe
console.log(age2) // no existe
console.log(alias2) // no existe
console.log(email)

// sintaxis objects con nuevos nombres de variables

let {name: name3, age: age3, alias: alias3} = person
console.log(name3)
console.log(age3)
console.log(alias3)

// objects anidados

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

let {name: name4, job: {name: jobName}} = person3

console.log(name4)
console.log(jobName)

// propagacion (...)

// sintaxis arrays

let myArray2 = [...myArray]

console.log(myArray2)

// copia de arrays

let myArray3 = [...myArray, 5, 6]

console.log(myArray3)

// combinacion de arrays

let myArray4 = [...myArray2, ...myArray3]

console.log(myArray4 )

// sintaxis objects

let person4 = {...person, email: 'artur@gmail.com'} 

console.log(person4)

// copia de objects

let person5 = {... person}

console.log(person5)



