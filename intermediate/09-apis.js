// manejo de APIs

// - APIs REST(HTTP + URLs + JSON)

// metodos HTTP:
// - GET (leer datos)
// - POST (crear datos)
// - PUT (actualizar datos)
// - DELETE (eliminar datos)

// codigos de respuesta HTTP:
// - 200 OK
// - 201 
// - 400
// - 404
// - 500

// Consumir una API

async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }
        const data = await response.json()
        console.log('Usuarios recibidos:', data)
    } catch (error) {
        console.log('Error:', error)
    }
}

getUsers()

// solicitud post

async function createPost() {
    try {

        const newPost = {
            userId: 1,
            title: "Titulo de mi post",
            body: 'Cuerpo de mi post' 
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(newPost)
        })

        const data = await response.json()
        console.log(data)
    } catch (error) {
        
    }
}

createPost()

// metodos HTTP adicionales

// - PATCH (actualizar parcialmente)
// - OPTIONS (obtener informacion)

async function partialPostUpdate() {
    try {
        const updatePost = {
            title: "Titulo Actualizado",
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/posts/10', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatePost)
        })

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }

        const data = await response.json()
        console.log("✅ Campo actualizado:", data)
    } catch (error) {
        console.error("❌ Error:", error.message)
    }
}

partialPostUpdate()

