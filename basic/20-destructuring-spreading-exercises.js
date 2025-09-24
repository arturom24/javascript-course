// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let mugiwara = [
  "Luffy",
  "Zoro",
  "Nami",
  "Usopp",
  "Sanji",
  "Chopper",
  "Nico Robin",
  "Franky",
  "Brook",
  "Jinbe"
]

console.log(mugiwara)

let [valor1, valor2, ...losDemas] = mugiwara

console.log(valor1)
console.log(valor2)
console.log(losDemas)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let mugiwara2 = [
  "Luffy",
  "Zoro",
  "Nami"
]

let [ , , valor3 = 'nami', valor4 = 'usopp', valor5 = 'sanji'] = mugiwara

console.log(valor3)
console.log(valor4)
console.log(valor5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

// let sombreroDePaja = [
//     { nombre: "Luffy", rol: "Capitán" },
//     { nombre: "Zoro", rol: "Espadachín" },
//     { nombre: "Nami", rol: "Navegante" },
//     { nombre: "Usopp", rol: "Francotirador" },
//     { nombre: "Sanji", rol: "Cocinero" },
//     { nombre: "Chopper", rol: "Doctor" },
//     { nombre: "Nico Robin", rol: "Arqueóloga" },
//     { nombre: "Franky", rol: "Carpintero" },
//     { nombre: "Brook", rol: "Músico" },
//     { nombre: "Jinbe", rol: "Timón" }
// ]

// console.log(sombreroDePaja)

// let [v1, v2 ] = sombreroDePaja

// console.log(v1)
// console.log(v2)

let sombreroDePaja = {
    capitan: {
        nombre: "Luffy",
        rol: "Capitán"
    },
    espadachin: {
        nombre: "Zoro",
        rol: "Espadachín"
    },
    navegante: {
        nombre: "Nami",
        rol: "Navegante"
    },
    francotirador: {
        nombre: "Usopp",
        rol: "Francotirador"
    },
    cocinero: {
        nombre: "Sanji",
        rol: "Cocinero"
    },
    doctor: {
        nombre: "Chopper",
        rol: "Doctor"
    },
    arqueologa: {
        nombre: "Nico Robin",
        rol: "Arqueóloga"
    },
    carpintero: {
        nombre: "Franky",
        rol: "Carpintero"
    },
    musico: {
        nombre: "Brook",
        rol: "Músico"
    },
    timon: {
        nombre: "Jinbe",
        rol: "Timón"
    }
}

console.log(sombreroDePaja)

let {musico, capitan} = sombreroDePaja

console.log(musico)
console.log(capitan)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {capitan: capitan1, musico: musico1, espadachin: espadachin2 } = sombreroDePaja

console.log(capitan1)
console.log(musico1)
console.log(espadachin2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let {carpintero: {nombre: nombreCarpintero}, doctor: {nombre: nombreDoctor}} = sombreroDePaja

console.log(nombreCarpintero)
console.log(nombreDoctor)

// 6. Usa propagación para combinar dos arrays en uno nuevo

let losMugis = [...mugiwara, ...mugiwara2]

console.log(losMugis)

// 7. Usa propagación para crear una copia de un array

let losMugisCopia = [...mugiwara]

console.log(losMugisCopia)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let objeto1 = {nombre: 'Arturo', edad: 26}
let objeto2 = {ciudad: 'Clorinda', pais: 'Argentina'}

let combinado = {...objeto1, ...objeto2}

console.log(combinado)

// 9. Usa propagación para crear una copia de un objeto

let copia = {...combinado, email: 'artur@gmail.com'}

console.log(copia)

// si modificas la copia, no afecta al original
copia.nombre = 'Pedro'

console.log(combinado)
console.log(copia)

// 10. Combina desestructuración y propagación

let persona = {
    nombre: "Luffy",
    edad: 19,
    rol: "Capitán",
    tripulacion: "Sombrero de Paja"
}

let {nombre, edad, ...resto} = persona

console.log(nombre)
console.log(edad)
console.log(resto)

