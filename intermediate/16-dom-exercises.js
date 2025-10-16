// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

const h1 = document.createElement('h1')
h1.textContent = 'Hola Mundo!'
document.body.appendChild(h1)

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const myImage = document.createElement('img')
myImage.setAttribute('src', 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg')
myImage.width = 300
document.body.appendChild(myImage)

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

const box = document.createElement('div')
box.id = 'box'
box.classList.add('resaltado')
box.style.width = '50px'
box.style.height = '50px'
box.style.backgroundColor = 'red'
document.body.appendChild(box)

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const p = document.createElement('p')
p.textContent = 'Este es un parrafo del ejercicio 4'

p.setAttribute('id', 'paragraph')
p.style.color = 'blue'
document.body.appendChild(p)

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const btn = document.createElement('button')
btn.textContent = 'Agregar elemento'
document.body.appendChild(btn)
const ul = document.createElement('ul')
document.body.appendChild(ul)

function newElement () {
    const li = document.createElement('li')
    li.textContent = 'Nuevo elemento'
    ul.appendChild(li)
    li.addEventListener('click', ()=> {
        li.remove()
    })
}

btn.addEventListener('click', ()=> {
    newElement()
})

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

const deleteParagraph = document.createElement('p')
deleteParagraph.id = 'deleteParagraph'
deleteParagraph.textContent = 'Parrafo del ejercicio 6 para eliminar'
document.body.appendChild(deleteParagraph)

const deleteBtn = document.createElement('button')
deleteBtn.textContent = 'Eliminar parrafo'
document.body.appendChild(deleteBtn)

deleteBtn.addEventListener('click', ()=> {
    deleteParagraph.remove()
})

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const content = document.createElement('div')
content.id = 'content'
content.textContent = 'Texto original'
document.body.appendChild(content)
content.innerHTML = '<h2>Nuevo Contenido</h2>'

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

const greetBtn = document.createElement('button')
greetBtn.id = 'greetBtn'
greetBtn.textContent = 'Saludar'
document.body.appendChild(greetBtn)

greetBtn.addEventListener('click', ()=> {
   alert('Hola!') 
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

const textInput = document.createElement('input')
textInput.id = 'textInput'
textInput.style.display = 'block'
textInput.style.marginTop = '20px'
document.body.appendChild(textInput)

const result = document.createElement('div')
result.id = 'result'
result.style.color = 'red'
result.style.margin = '5px'
result.style.padding = '10px'
result.style.borderStyle = 'solid'
result.style.display = 'inline-block'
result.style.borderColor = '#333'
result.style.borderWidth = '1px'
document.body.appendChild(result)

textInput.addEventListener('input', () => {
    result.textContent = textInput.value
})

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const backgroundBtn = document.createElement('button')
backgroundBtn.id = 'backgroundBtn'
backgroundBtn.textContent = 'Cambiar el fondo'
document.body.appendChild(backgroundBtn)

backgroundBtn.addEventListener('click', ()=> {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`
})