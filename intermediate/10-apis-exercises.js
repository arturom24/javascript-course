// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)   
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

getPosts()

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function createPost() {

    const newPost = {
        title: 'Nuevo Titulo',
        body: 'Body'
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(newPost)
        })
        if(!response.ok) {
            throw new Error(`Ocurrio un error: ${response.status}`)
        }
        const data = await response.json()
        console.log('Nuevo post:', data)
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

createPost()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function updatePost() {
    const post = {
        id: 110,
        title: 'post actualizado',
        body: 'body actualizado'
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        if(!response.ok) {
            throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
        console.log('Datos actualizados: ', data)
    } catch (error) {
        
    }
}

updatePost()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function patchPost() {
    const post = {
        title: 'Nuevo titulo actualizado'
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/10' , {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })

        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }

        const data = await response.json()
        console.log('Dato actualizado', data)
    } catch (error) {
        
    }
}

patchPost()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deletePost() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/5' , {
            method: 'DELETE'
        })

        if(!response.ok) {
            throw new Error('Error, no se pudo eliminar el post.')
        }

        const data = await response.json()
        console.log('Post eliminado correctamente')
    } catch (error) {
        console.error('Error:', error.message)
    }
}

deletePost()

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try {
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }
        const data = await response.json()
        console.log(`Habilidadesd de ${data.species.url}`)
        data.abilities.forEach(ablility => {
            console.log(ablility.ability?.name)
        })
        
    } catch (error) {
        console.error(error.message)
    }
}


async function getPokemon(pokemon) {
    const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    
    try {
        // 1️⃣ Obtener datos del Pokémon
        const response = await fetch(`${baseUrl}${pokemon}`)
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`)
        
        const data = await response.json()
        console.log(`\n📛 Pokémon: ${data.name}`)
        console.log("⚡ Habilidades:")
        data.abilities.forEach(item => {
            console.log(" - " + item.ability.name)
        })

        // 2️⃣ Obtener detalles de la especie
        const speciesResponse = await fetch(data.species.url)
        if (!speciesResponse.ok) throw new Error(`Error al obtener especie`)
        
        const speciesData = await speciesResponse.json()
        console.log(`\n🌿 Especie: ${speciesData.name}`)
        console.log(`Color: ${speciesData.color.name}`)
        console.log(`Hábitat: ${speciesData.habitat?.name || "Desconocido"}`)

        // 3️⃣ Obtener cadena evolutiva
        const evolutionResponse = await fetch(speciesData.evolution_chain.url)
        if (!evolutionResponse.ok) throw new Error(`Error al obtener cadena evolutiva`)
        
        const evolutionData = await evolutionResponse.json()

        console.log("\n🧬 Cadena evolutiva:")
        showEvolutionChain(evolutionData.chain)

    } catch (error) {
        console.error(error.message)
    }
}

// 🔁 Función auxiliar para recorrer la cadena evolutiva
function showEvolutionChain(chain) {
    let current = chain;
    while (current) {
        console.log(" - " + current.species.name)
        current = current.evolves_to[0]
    }
}

getPokemon("pikachu");


// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API