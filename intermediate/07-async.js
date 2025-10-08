// programacion asincrona

// codigo sincrono

console.log('Inicio')

for(let i = 0; i < 10000; i++){}

console.log('Fin')

// even loop(bucle de eventos)

// componentes del Even loop
// - call stack(pila de ejecucion)
// - web APIs (APIs del navegador) o Node.js
// - task queue (cola de tareas) y microtaskqueue

// flujo del event loop:
// 1.Call Stack
// 2. Operaciones asincronas -> Web APIs o Node.js
// 3.Operacion termina -> La cola de Task Queue o Microtask Queue
// 4. Si call Stack vacio -> Mueve tareas al Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// codigo asincrono

// callbacks

console.log('Inicio')

setTimeout(() => {
    console.log('Esto se ejecuta despues de 2 segundo')
}, 2000)

console.log('Fin')

// problema: Callback Hell

function step1(callback) {
    setTimeout(()=> {
        console.log('Paso 1 completado')
        callback()
    }, 1000) 
}

function step2(callback) {
    setTimeout(()=> {
        console.log('Paso 2 completado')
        callback()
    }, 1000) 
}

function step3(callback) {
    setTimeout(()=> {
        console.log('Paso 3 completado')
        callback()
    }, 1000) 
}
step1(()=> {
    step2(()=> {
        step3(()=> {
            console.log('Todos los pasos completados')
        })
    })
})

// promesas

const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        const ok = true
        if(ok) {
            resolve('Operacion exitosa')
        } else {
            reject('Se ha producido un error')
        }
    }, 4000)
})

promise.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

// encadenar promesas

function step1Promise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Paso 1 con promesa completado')
            resolve()
        }, 1000)
    })
}

function step2Promise () {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log('Paso 2 con promesa completado')
            resolve()
        }, 1000)
    })
}

const step3Promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Paso 3 con promesa completado')
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log('Todos los pasos con promesas completado')
    })

// asinc/await

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {
    console.log('Inicio del proceso')

    await wait(5000)
    console.log('Proceso despues de 5 segundos')

    await wait(1000)
    console.log('Proceso despues de 1 segundos')

    await wait(2000)
    console.log('Proceso despues de 2 segundos')

    console.log('Fin del proceso')
}

process()