// 1. Imprime por consola tu nombre si una variable toma su valor
const nombre = 'Arturo'

if (nombre === 'Arturo') {
    console.log('Mi nombre es Arturo')
}

nombre === 'Arturo' 
    ? console.log('Mi nombre es Arturo') 
    : console.log('La variable no contiene mi nombre')

// 2. Imprime por consola un mensaje si el usuario y la contraseña coincide con unos establecidos

let user = 'Artur'
let password = '12345'

const userIngresado = 'Arturo'
const passIngresado = '1234'

if (user === userIngresado && password === passIngresado) {
    console.log('Acceso concedido')
} else {
    console.log('Usuario o contraseña incorrectos')
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje

let num = 0.3

if (num > 0) {
    console.log('El numero es positivo')
} else if (num < 0) {
    console.log('El es negativo')
} else {
    console.log('El numero es cero')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan

let age = 17
let mayorDeEdad = 18

if (age >= mayorDeEdad) {
    console.log('Usted puede votar')
} else {
    let restante = mayorDeEdad - age
    console.log(`Usted no puede votar, le faltan ${restante} año(s)`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable

let edad = 17

edad > 18 ? console.log('Adulto') : console.log('Menor')

// 6. Muestra que estacion del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 'febrero'

if (mes == 'diciembre' || mes == 'enero' || mes == 'febrero') {
    console.log('Verano')
} else if (mes == 'marzo' || mes == 'abril' || mes == 'mayo') {
    console.log('Otoño')
} else if (mes == 'junio' || mes == 'julio' || mes == 'agosto') {
    console.log('Invierno')
} else if (mes == 'septiembre' || mes == 'octubre' || mes == 'noviembre') {
    console.log('primavera')
} else {
    console.log('Mes invalido')
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercico anterior

let dias;

if (mes === 'enero' || mes === 'marzo' || mes === 'mayo' || mes === 'julio' || mes === 'agosto' || mes === 'octubre' || mes === 'diciembre') {
    dias = 31
} else if (mes === 'febrero') {
    dias = 28
} else if (mes === 'abril' || mes === 'junio' || mes === 'septiembre' || mes === 'noviembre') {
    dias = 30
} else {
    console.log('Mes invalido')
}
console.log(`El mes de ${mes} tiene ${dias} dias`)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = 'frances'
let saludo

switch (idioma) {
    case 'ingles' : saludo = 'Hello'
    break
    case 'español' : saludo = 'Hola'
    break
    case 'frances' : saludo = 'Bonjour'
    break
    default:
        saludo = 'Hola, no conozco ese idioma'
        break
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
mes = 10
let estacion

switch(mes) {
    case 12:
    case 1:
    case 2:
        estacion = 'verano'
        break
    case 3:
    case 4:
    case 5: 
        estacion = 'otoño'
        break
    case 6:
    case 7:
    case 8: 
        estacion = 'invierno'
        break
    case 9:
    case 10:
    case 11: 
        estacion = 'primavera'
        break
    default:
        estacion = 'Mes invalido'
}

console.log(estacion)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = 'enero'
dias

switch(mes) {
    case 'enero':
    case 'marzo':
    case 'mayo':
    case 'julio':
    case 'agosto':
    case 'octubre':
    case 'diciembre':
        dias = 31
        break
    case 'febrero':
        dias = 28
        break
    case 'abril':
    case 'junio':
    case 'septiembre':
    case 'noviembre':
        dias = 30
        break
    default:
        console.log('Mes inválido')
}

if (dias) {
    console.log(`El mes de ${mes} tiene ${dias} días`)
}
