// 1. Concatena dos cadenas de texto
let primerPalabra = 'Hola que tal?'
let segundaPalabra = 'mi nombre es arturo'
console.log(primerPalabra + ' ' + segundaPalabra)

// 2. Muestra la longitud de una cadena de texto
let longitud = 'javascript'
console.log(longitud.length)

// 3. Muestra el primer y ultimo catacter de un string
console.log(longitud[0])
console.log(longitud[longitud.length -1])

// 4. Convierte en mayuscula y minuscula un string 
let textoMixto = 'JAVAscript'
console.log(textoMixto.toLowerCase())
console.log(textoMixto.toUpperCase())

// 5. Crea una cadena de texto en varias lineas
let textoVariasLineas = `Este 
texto tiene 
varias lineas`
console.log(textoVariasLineas)

// 6. Interpola el valor de una variable en un string
const nombre = "Arturo"
const edad = 26

const mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años.`

console.log(mensaje)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(mensaje.replace(/\s+/g, '-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
mensaje.includes('Arturo') ? console.log('Contiene') : console.log('No contiene') 

// 9. Comprueba si dos strings son iguales
let str1 = 'Hola'
let str2 = 'holaa'

str1 == str2 ? console.log('Son iguales') : console.log('no son iguales')

// 10. Comprueba si dos strings tienen la misma longitud

str1.length === str2.length ? console.log(`Los strings ${str1} y ${str2} tienen la misma longitud`) :  console.log(`Los strings ${str1} y ${str2} no tienen la misma longitud`)