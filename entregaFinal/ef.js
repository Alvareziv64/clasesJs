// ARRAY DE CONSOLAS 

const productos = [
    {  
        "id" : 1,
        "marca" : "Nintendo",
        "modelo" : "64",
        "valor" : 7500,
        "categoria" : "consola",
        "anio" : 1996,
        "graficos" : "64 bits",
        "origen" : "Japón",
        "gen" : "5ta",
        "uvend" : "32.930.000",
        "img" : "imagenes/n64.jpg"
    },

    { 
        "id" : 2,
        "marca" : "Sega",
        "modelo" : "Genesis",
        "valor" : 9500,
        "categoria" : "consola",
        "anio" : "1988",
        "graficos" : "16 bits",
        "origen" : "Japón/Usa",
        "gen" : "4ta",
        "uvend" : "30.750.000",
        "img" : "imagenes/sg.jpg"
    },

    {  
        "id" : 3,
        "marca" : "Nintendo",
        "modelo" : "Game Boy Color",
        "valor" : 8500,
        "categoria" : "consola",
        "anio" : "1998",
        "graficos" : "8 bits",
        "origen" : "Japón",
        "gen" : "4ta",
        "uvend" : "118.710.000",
        "img" : "imagenes/gbc.jpg"
    },

    {  
        "id" : 4,
        "marca" : "Microsoft",
        "modelo" : "Xbox Classic",
        "valor" : 12000,
        "categoria" : "consola",
        "anio" : "2001",
        "graficos" : "128 bits",
        "origen" : "Usa",
        "gen" : "6ta",
        "uvend" : "24.650.000",
        "img" : "imagenes/xbc.jpg"
    },

    
    {  
        "id" : 5,
        "marca" : "Sony",
        "modelo" : "Playstation",
        "valor" : 6500,
        "categoria" : "consola",
        "anio" : "1994",
        "graficos" : "32 bits",
        "origen" : "Japón",
        "gen" : "5ta",
        "uvend" : "102.400.000",
        "img" : "imagenes/ps.jpeg"
    },

    {  
        "id" : 6,
        "marca" : "Sega",
        "modelo" : "Dreamcast",
        "valor" : 18000,
        "categoria" : "consola",
        "anio" : "1998",
        "graficos" : "128 bits",
        "origen" : "Japón/Usa",
        "gen" : "6ta",
        "uvend" : "10.600.000",
        "img" : "imagenes/sdc.jpeg"
    },

    { 
        "id" : 7,
        "marca" : "Atari",
        "modelo" : "2600 heavy sixer",
        "valor" : 8000,
        "categoria" : "consola",
        "anio" : "1977",
        "graficos" : "8 bits",
        "origen" : "Usa",
        "gen" : "2da",
        "uvend" : "30.000.000",
        "img" : "imagenes/at2600.jpeg"

    },

    { 
        "id" : 8,
        "marca" : "Nintendo",
        "modelo" : "Game Boy Advance",
        "valor" : 11000,
        "categoria" : "Consola",
        "anio" : "2001",
        "graficos" : "32 bits",
        "origen" : "Japón",
        "gen" : "5ta",
        "uvend" : "81.510.000",
        "img" : "imagenes/gba.jpg"
    }
]


// Constantes y variabls
const items = document.getElementById("items")
const templateCard = document.getElementById("templateCard").content
const fragment = document.createDocumentFragment()
let carrito = {}



// eventos

     //evento click para agregar al carrito
items.addEventListener('click' , e => {
    addCarrito(e) 
})

     //agregar al carrito solo si el click se da en un boton con la clase "btn-primary"
const addCarrito = e => {
    if (e.target.classList.contains('btn-primary')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

     // agrego al carrito un objeto creado por el contenido del div de la card 
const setCarrito = objeto => {
    const producto = {
        id : objeto.querySelector('.btn-primary').dataset.id,
        item : objeto.querySelector('h5').textContent,
        valor : objeto.querySelector('p').textContent,
        cantidad : 1
    }
      //con este if hago que si se agrega dos veces el mismo producto se modifique la cantidad
    if (carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
        //empujo una copia al carrito del producto pero con la cantidad indexada
    carrito[producto.id] = {...producto}

}


// pintar cards


//const pintarCards = productos => {
    productos.forEach(item => {
        templateCard.querySelector('h5').textContent = item.marca + " " + item.modelo
        templateCard.querySelector('p').textContent = item.valor
        templateCard.querySelector('img').setAttribute( "src" , item.img )
        templateCard.querySelector('.btn-primary').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
      
    })
        
    items.appendChild(fragment)
//}



