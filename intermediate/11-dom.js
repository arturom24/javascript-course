// manejo del DOM (Document Object Model)

// - seleccion de elementos

// metodos basicos

// seleccionar por ID
const myElement = document.getElementById('ID')

// seleccionar por clase
const myElements = document.getElementsByClassName('class')

// seleccionar por etiqueta
const myElementTagName = document.getElementsByTagName('tag')

// seleccion moderna 
const parrafo = document.querySelector('.paragraph') // usa selector css
const parrafos = document.querySelectorAll('p')

// - modificar contenido

const titulo = document.querySelector('h1')

// cambiar texto
titulo.textContent('Nuevo titulo')

// cambiar html interno
titulo.innerHTML = '<span>Nuevo <b>título</b></span>'

// - modificar atributos

// obtener atributos
const link = document.querySelector('a')
const url = link.getAttribute('href')

// establecer atributo
link.setAttribute('href', 'https://example.com')

// comprobacion de atributo
link.hasAttribute('target') // devuelve un boolean

// eliminar atributos
link.removeAttribute('target')

// - cambiar estilos y clases

const caja = document.querySelector('.caja')

// cambiar estilos
caja.style.backgroundColor = 'blue'
caja.style.padding = '10px'

// agragar o quitar css
caja.classList.add('activa')
caja.classList.remove('inactiva')
caja.classList.toggle('selected') // cambia segun el estado

// - crear y eliminar elementos

const lista = document.querySelector('ul')

// crear nuevo elemento
const nuevoItem = document.createElement('li')
nuevoItem.textContent('Elemento nuevo')

// insertarlo
lista.appendChild(nuevoItem)

// eliminarlo
lista.removeChild(nuevoItem)

// insercion en un lugar en concreto

const itemsList = document.querySelector('ul')
const newItem = document.querySelector('li')
newItem = 'Nuevo elemento'

const secondItem = lista.children[1]
itemsList.insertBefore(newItem, secondItem)

itemsList.append(newItem) // inserta al final
itemsList.prepend(newItem) // inserta al inicio
secondItem.before(newItem) // inserta antes del elemento
secondItem.after(newItem) // inserta despues del elemento

// eliminacion
newItem.remove()

// - elementos y eventos

function showMsg() {
    alert('click')
}

const sendButton = document.querySelector('#send')
secondItem.addEventListener('click', () => showMsg)

secondItem.addEventListener('click', () => {
    alert('Click con una arrow function!')
})

// eventos comunues

document.addEventListener('DOMContentLoader', () => {
    console.log('El DOM esta completamente cargado')
})

sendButton.addEventListener('mouseenter', () => {
    sendButton.style.backgroundColor = 'green'
})

sendButton.addEventListener('mouseleave', () => {
    sendButton.style.backgroundColor = 'blue'
})

const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    // codigo
})

// eventos del mouse

// | Evento        | Descripción                                    
// | ------------- | ---------------------------------------------- 
// | `dblclick`    | Doble clic.                                    
// | `mousedown`   | Se presiona un botón del mouse.                
// | `mouseup`     | Se suelta un botón del mouse.                  
// | `click`       | Cuando el usuario hace clic (botón izquierdo). 
// | `mouseover`   | El cursor entra en el elemento.                
// | `mouseout`    | El cursor sale del elemento.                   
// | `mousemove`   | El cursor se mueve dentro del elemento.        
// | `contextmenu` | Clic derecho (abre menú contextual).           

// eventos del teclado

// | Evento     | Descripción                                                            
// | ---------- | ---------------------------------------------------------------------- 
// | `keydown`  | Al presionar una tecla (antes de soltarla).                            
// | `keypress` | (Obsoleto) Similar a `keydown`, pero solo para caracteres imprimibles. 
// | `keyup`    | Al soltar una tecla.                                                   

// eventos de entrada

// | Evento   | Descripción                                                  
// | -------- | ------------------------------------------------------------ 
// | `input`  | Cada vez que cambia el valor de un `<input>` o `<textarea>`. 
// | `change` | Cuando el valor cambia y se pierde el foco.                  
// | `focus`  | Cuando un elemento recibe el foco.                           
// | `blur`   | Cuando un elemento pierde el foco.                           
// | `submit` | Cuando se envía un formulario.                               
// | `reset`  | Cuando se resetea un formulario.                             

// eventos de ventana o documento 

// | Evento             | Descripción                                            
// | ------------------ | ------------------------------------------------------ 
// | `load`             | Cuando el documento o imagen ha cargado completamente. 
// | `DOMContentLoaded` | Cuando el DOM está listo (sin esperar imágenes).       
// | `resize`           | Cuando se cambia el tamaño de la ventana.              
// | `scroll`           | Cuando el usuario hace scroll.                         
// | `beforeunload`     | Antes de cerrar o recargar la página.                  

// eventos tactiles

// | Evento       | Descripción                 
// | ------------ | --------------------------- 
// | `touchstart` | Cuando se toca la pantalla. 
// | `touchmove`  | Mientras el dedo se mueve.  
// | `touchend`   | Cuando se levanta el dedo.  

// otros utiles

// | Evento                          | Descripción                                    
// | ------------------------------- | ---------------------------------------------- 
// | `transitionend`                 | Cuando termina una animación CSS.              
// | `animationend`                  | Cuando termina una animación con `@keyframes`. 
// | `dragstart`, `dragover`, `drop` | Para arrastrar y soltar elementos.             
