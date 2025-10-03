// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

function numeroAleatorioHasta(num) {
    let listAleatorio = []
    for (let i = 0; i < num; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 10)
        listAleatorio[i] = numeroAleatorio
    }
    return listAleatorio
}   

let num = numeroAleatorioHasta(20)
console.log(num)

let numerosPares = num.filter(element => element % 2 === 0).map(numero => numero * 2)
console.log(numerosPares)

let sumaTotal = numerosPares.reduce((acumulador, valorInicial) => acumulador + valorInicial)
console.log(sumaTotal)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let num2 = numeroAleatorioHasta(10)
function cubo(num) {
    return num * num * num
}
console.log(num2)
let listaAlCuboPares = num2.map(element => cubo(element)).filter(element => element % 2 === 0 && element !== 0)
console.log(listaAlCuboPares)


// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let productosPorCategiria = [
    ["martillo", "destornillador"],
    ["taladro", "sierra"],
    ["cable", "enchufe"]
]
let todosLosProductos = productosPorCategiria.flat()
console.log(todosLosProductos)

let frases = [
    'Hola mundo',
    'aprendiendo a programar',
    'esto es un flatMap'
]

let palabras = frases.flatMap(frase => frase.split(' '))
console.log(palabras)

// 4. Ordena un array de números de mayor a menor

let num3 = numeroAleatorioHasta(20)
console.log(num3)
const listaOrdenada = num3.sort((a, b) => a - b)
console.log(`Lista ordenada: ${num3}`)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

const setA = new Set([1,2,3,4])
const setB = new Set([3,4,5,6])

// union
const setAB = new Set([...setA, ...setB])
console.log('Union', setAB)

// interseccion (Elementos comunes)
const interseccion = new Set([...setA].filter(element => setB.has(element)))
console.log('Interseccion: ', interseccion )

// diferencia
const diferencia = new Set([...setA].filter(element => !setB.has(element)))
console.log('Diferencia: ', diferencia )

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

const user = new Map([
    ['name', 'artur'],
    ['age', 26],
    ['email', 'arturo@gmail.com']
])

user.forEach((value, key) => console.log(`${key}: ${value}`))

const users = new Map([
    [1, {name: 'arturo', age: 26, email: 'arturo@gmail.com'}],
    [2, {name: 'pedro', age: 23, email: 'pedro@gmail.com'}],
    [3, {name: 'jose', age: 17, email: 'jose@gmail.com'}],
    [4, {name: 'antonio', age: 17, email: 'antonio@gmail.com'}],
    [5, {name: 'antonio', age: 19, email: 'antonio@gmail.com'}],
    [6, {name: 'lucas', age: 30, email: 'lucas@gmail.com'}],
    [7, {name: 'mauro', age: 41, email: 'mauro@gmail.com'}]
])

users.forEach((user, id) => console.log(`${id} - ${user.name}, ${user.age}, ${user.email}`))

// 8. Dado el mapa anterior, crea un array con los nombres

const nombres = Array.from(users.values()).map(user => user.name)
console.log(nombres)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

const emailsMayorDeEdad = new Set(
    Array.from(users.values())
    .filter(user => user.age > 18)
    .map(user => user.email)
) 
console.log(emailsMayorDeEdad)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario

const objetoUsuarios = Object.fromEntries(users)
console.log(objetoUsuarios)

const mapaUsuarios = new Map();

for(const user of Object.values(objetoUsuarios)) {
    if (!mapaUsuarios.has(user.email)) {
        mapaUsuarios.set(user.email, [user])
    } else {
        mapaUsuarios.get(user.email).push(user)
    }
}

console.log(mapaUsuarios)