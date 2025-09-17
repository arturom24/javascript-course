// if, else if, else

// if (si)

let age = 19

if (age == 26) {
    console.log('La edad es 26')
} else if ( age < 18) {
    console.log('Es menor de edad')
} else {
    console.log('La edad no es 26 ni es menor de edad')
}


// operador ternario

let respuesta = age == 26 ? 'la edad es 26' : 'la edad no es 26'

console.log(respuesta)

// switch

let day = 3
let dayName

switch (day) {
    case 0: dayName = 'Lunes' 
    break
    case 1: dayName = 'Martes' 
    break
    case 2: dayName = 'Miercoles' 
    break
    case 3: dayName = 'Jueves' 
    break
    case 4: dayName = 'Viernes' 
    break
    case 5: dayName = 'Sabado' 
    break
    case 6: dayName = 'Domingo' 
    break
    default: dayName = 'Dia incorrecto'
}

console.log(dayName)