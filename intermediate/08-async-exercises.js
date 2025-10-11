// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

const saludar = name => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Hola, ${name}`)
            resolve(`Saludo a ${name} completado`)
        }, 2000)
    })
}
saludar('arturo').then(mensaje => {
    console.log(mensaje)
})

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1 (callback) {
    return setTimeout(() => {
        console.log('Se ejecuta despues de 1 segundo')  
        callback()  
    }, 1000);
}

function task2 (callback) {
    return setTimeout(() => {
        console.log('Se ejecuta despues de 2 segundos')
        callback()   
    }, 2000);
}

function task3 () {
    return setTimeout(() => {
        console.log('Se ejecuta despues de 3 segundos')   
    }, 1000);
}

task1(() => {
    task2(()=> {
        task3()
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".

const esPar = (num) => {
    return new Promise((resolve, reject) => {
        if (typeof num !== 'number') {
            reject('Debes ingresar un numero')
            return
        }
        if (num < 0) {
            reject('El numero no puede ser menor a cero')
            return
        }
        if(num % 2 === 0) {
            resolve('El numero es Par')
        } else {
            reject('El numero es Impar')
        }
    }) 
}

esPar(9)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".

const firstTask = () => {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Primera tarea completada')
    }, 1000)
})
}
const secondTask = () => {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Segunda tarea completada')
    }, 2000)
})
}
const thirdTask = () => {
    return new Promise(resolve => {
    setTimeout(() => {
        resolve('Tercera tarea completada')
    }, 1500)
})
}

// firstTask().then(response => console.log(response))
// secondTask().then(response => console.log(response))
// thirdTask().then(response => console.log(response))

firstTask()
    .then((resolve) => {
        console.log(resolve)
        return secondTask()
    }).then((response) => {
        console.log(response)
        return thirdTask()
    }).then((response) => {
        console.log(response)
    }).then(() => {
        console.log('Todo ok')
    })

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

// async function executeTasks() {
//     console.log(await firstTask())
//     console.log(await secondTask())
//     console.log(await thirdTask())
// }
// executeTasks()

const executeTasks =  async () => {
    console.log(await firstTask())
    console.log(await secondTask())
    console.log(await thirdTask())
}
executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

const user = {
    name: 'arturo',
    id: undefined
}

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) {
                user.id = id
                resolve(`Nombre: ${user.name}, id: ${user.id}`)
            } else {
                reject('Usuario no encontrado')
            }
        }, 2000)
    })
}

async function fecthUser(id) {
    try {
        const user = await getUser(id)
        console.log('Usuario encontrado:', user)
    } catch (error) {
        console.log('Error: ', error)
    }
}

fecthUser(3)
fecthUser(9)

// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
   console.log("Inicio")
   setTimeout(() => console.log("setTimeout ejecutado"), 0)
   Promise.resolve().then(() => console.log("Promesa resuelta"))
   console.log("Fin")

// resultado: 
// Inicio
// FIn
// Promesa resuelta
// setTimeout ejecutado

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

const promesa1 = new Promise(resolve => setTimeout(() => resolve('Resultado 1', 1000)))
const promesa2 = new Promise(resolve => setTimeout(() => resolve('Resultado 2', 2000)))
const promesa3 = new Promise(resolve => setTimeout(() => resolve('Resultado 3', 3000)))

Promise.all([promesa1, promesa2, promesa3])
    .then(resultado => {
    console.log(resultado)
    })
    .catch(error => {
        console.log('Una promesa fue rechazada', error)
    })

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(seconds) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, seconds * 1000);
    })
}

async function runTimer() {
    console.log(`Esperando 3 segundos..`)
    await waitSeconds(3) 
    console.log('Tiempo finalizado')  
}

runTimer()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

const balance = {
    saldo: 500
}

function checkBalance() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(balance.saldo)
        }, 1000);
    })
}

function withdrawMoney(amount) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(amount <= balance.saldo){
                balance.saldo -= amount
                resolve(balance.saldo)
            } else {
                reject('Fondos insuficientes')
            }
        }, 2000);
    }) 
}

async function simulation(amount) {
    try {
        const saldoInicial = await checkBalance()
        console.log(`Saldo disponible: ${saldoInicial}`)

        console.log(`Retirando $${amount}...`)
        const saldoRestante1 = await withdrawMoney(amount)
        console.log(`Operación exitosa, saldo restante: $${saldoRestante1}`)


        console.log(`Retirando $${amount}...`)
        const saldoRestante2 = await withdrawMoney(amount)
        console.log(`Operación exitosa, saldo restante: $${saldoRestante2}`)

    } catch (error) {
        console.log('Error:', error)
    }
}

simulation(300)