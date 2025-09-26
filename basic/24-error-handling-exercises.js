// 1. Captura una excepción utilizando try-catch

try {
    let result = 10 / 0
    throw new Error('Algo salio mal')
} catch (error) {
    console.log('Error capturado:', error.message)
}

// 2. Captura una excepción utilizando try-catch y finally

try {
    throw new Error('Error con finally')
} catch (error) {
    console.log('Catch:', error.message)
} finally {
    console.log('Esto siempre se ejecuta')
}

// 3. Lanza una excepción genérica

function lanzarError() {
    throw new Error('Excepcion generica')
}

try {
    lanzarError()
} catch (e) {
    console.log(e.message)
}
// 4. Crea una excepción personalizada

class MiErrorPersonalizado extends Error {
    constructor(message, code) {
        super(message)
        this.code = code
    }
}

// 5. Lanza una excepción personalizada

try {
    throw new MiErrorPersonalizado('Error personalizado', 404)
} catch (e){
    console.log(`Mensaje: ${e.message}, Codigo: ${e.code}`)
}

// 6. Lanza varias excepciones según una lógica definida

function validarValor(x) {
    if (typeof x !== 'number') throw new TypeError('Debe ser numero')
    if (x < 0) throw new RangeError('No puede ser negativo')
    if (x === 0) throw new MiErrorPersonalizado('No puede ser cero', 100)
    return x
}

try {
    validarValor('s')
} catch (e) {
    console.log(`${e.name}: ${e.message}`)
}

// 7. Captura varias excepciones en un mismo try-catch

try {
    validarValor(-5)
} catch (e){
    if (e instanceof TypeError) {
        console.log('TypeError:', e.message)
    } else if (e instanceof RangeError) {
        console.log('RangeError:', e.message)
    } else {
        console.log('Otro error:', e.message)
    }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const valores = ["3.14", "5", "hola", 10];

valores.forEach(v => {
    try {
        let f = parseFloat(v)
        if (isNaN(f)) throw new Error(`No se puede convertir ${v}`)
        console.log(f)
    } catch (e){
        console.log(e.message)
    }
})

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class MissingPropertyError extends Error {
    constructor(prop) {
        super(`Falta la propiedad: ${prop}`);
        this.prop = prop;
    }
}

function checkProperty(obj, prop) {
    if (!obj.hasOwnProperty(prop)) throw new MissingPropertyError(prop);
    return obj[prop];
}

try {
    checkProperty({nombre});
} catch (e) {
    console.log(e.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function retryOperation(fn, maxRetries = 10) {
    let attempts = 0;
    while (attempts < maxRetries) {
        try {
            return fn();  // intenta ejecutar la función
        } catch (e) {
            attempts++;
            console.log(`Intento ${attempts} fallido: ${e.message}`);
        }
    }
    throw new Error(`Operación fallida después de ${maxRetries} intentos`);
}

let contador = 0;
function operacionFallida() {
    contador++;
    if (contador < 10) throw new Error("Falló la operación");
    return "Éxito!";
}

console.log(retryOperation(operacionFallida));
