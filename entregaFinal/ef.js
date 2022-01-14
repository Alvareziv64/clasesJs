// ARRAY DE PRODUCTOS

const productos = [
  {
    id: 1,
    marca: "Nintendo",
    modelo: "64",
    valor: 7500,
    categoria: "consola",
    anio: 1996,
    graficos: "64 bits",
    origen: "Japón",
    gen: "5ta",
    uvend: "32.930.000",
    img: "imagenes/n64.jpg",
    formato : "Cartuchos"
  },

  {
    id: 2,
    marca: "Sega",
    modelo: "Genesis",
    valor: 9500,
    categoria: "consola",
    anio: "1988",
    graficos: "16 bits",
    origen: "Japón/Usa",
    gen: "4ta",
    uvend: "30.750.000",
    img: "imagenes/sg.jpg",
    formato : "Cartuchos"
  },

  {
    id: 3,
    marca: "Nintendo",
    modelo: "Game Boy Color",
    valor: 8500,
    categoria: "consola",
    anio: "1998",
    graficos: "8 bits",
    origen: "Japón",
    gen: "4ta",
    uvend: "118.710.000",
    img: "imagenes/gbc.jpg",
    formato : "Cartuchos"
  },

  {
    id: 4,
    marca: "Microsoft",
    modelo: "Xbox Classic",
    valor: 12000,
    categoria: "consola",
    anio: "2001",
    graficos: "128 bits",
    origen: "Usa",
    gen: "6ta",
    uvend: "24.650.000",
    img: "imagenes/xbc.jpg",
    formato : "DVD"
  },

  {
    id: 5,
    marca: "Sony",
    modelo: "Playstation",
    valor: 6500,
    categoria: "consola",
    anio: "1994",
    graficos: "32 bits",
    origen: "Japón",
    gen: "5ta",
    uvend: "102.400.000",
    img: "imagenes/ps.jpeg",
    formato : "CD"
  },

  {
    id: 6,
    marca: "Sega",
    modelo: "Dreamcast",
    valor: 18000,
    categoria: "consola",
    anio: "1998",
    graficos: "128 bits",
    origen: "Japón/Usa",
    gen: "6ta",
    uvend: "10.600.000",
    img: "imagenes/sdc.jpeg",
    formato : "CD"
  },

  {
    id: 7,
    marca: "Atari",
    modelo: "2600 heavy sixer",
    valor: 8000,
    categoria: "consola",
    anio: "1977",
    graficos: "8 bits",
    origen: "Usa",
    gen: "2da",
    uvend: "30.000.000",
    img: "imagenes/at2600.jpeg",
    formato : "Cartuchos"
  },

  {
    id: 8,
    marca: "Nintendo",
    modelo: "Game Boy Advance",
    valor: 11000,
    categoria: "Consola",
    anio: "2001",
    graficos: "32 bits",
    origen: "Japón",
    gen: "5ta",
    uvend: "81.510.000",
    img: "imagenes/gba.jpg",
    formato : "Micro CD"
  },
];

// Constantes y variabls
const cards = document.getElementById("cards");
const templateCard = document.getElementById("templateCard").content;
const templateFooter = document.getElementById("templateFooter").content;
const templateCarrito = document.getElementById("templateCarrito").content;
const items = document.getElementById("items");
const footer = document.getElementById("footer");
const fragment = document.createDocumentFragment();
const dropdown = document.getElementById("navbarDropdown")
let carrito = {};

// Eventos

document.addEventListener("DOMContentLoaded", () => { //Cargo el DOM y local storage
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    crearCarrito();
  }
});

              
cards.addEventListener("click", (e) => { //Evento click para agregar al carrito
  addCarrito(e);
});

items.addEventListener("click", (e) => { //Evento click para botones sumar o restar 1 unidad dentro del carrito
  btnAccion(e);
});




/* Crear cards con etiqueta template (Seguramente con una interpolación también hubiera
  funcionado, pero vi este metodo en internet y me parecio interesante usar la etiqueta template) */

productos.forEach((item) => {
  templateCard.querySelector("h5").textContent = item.marca + " " + item.modelo; // Nombre de la marca y modelo del producto
  templateCard.querySelector("p").textContent = item.valor; // valor del producto
  templateCard.querySelector("img").setAttribute("src", item.img); // imagen del producto
  templateCard.querySelector(".btn-primary").dataset.id = item.id; // boton que al hacer click me da el ID del producto seleccionado
 
  const clone = templateCard.cloneNode(true);
  fragment.appendChild(clone);
});
cards.appendChild(fragment);

//Con esto agrego al carrito solo si el click se da en un boton con la clase "btn-primary"
const addCarrito = (e) => {
  if (e.target.classList.contains("btn-primary")) {
    setCarrito(e.target.parentElement);
  }
  e.stopPropagation();
};

// agrego a la variable "carrito" un objeto creado con el contenido del div de la card
const setCarrito = (objeto) => {
  const producto = {
    id: objeto.querySelector(".btn-primary").dataset.id,
    item: objeto.querySelector("h5").textContent,
    valor: objeto.querySelector("p").textContent,
    cantidad: 1,
  };

  //con este if hago que si se agrega dos veces el mismo producto se modifique la cantidad
  if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1;
  }

  //empujo una copia al carrito del producto pero con la cantidad indexada
  carrito[producto.id] = { ...producto };
  crearCarrito();
};

// Creo el carrito visualmente
const crearCarrito = () => {
  items.innerHTML = ""; //Limpiamos el HTML
  Object.values(carrito).forEach((producto) => {
    templateCarrito.querySelector("th").textContent = producto.id; // ID del producto
    templateCarrito.querySelectorAll("td")[0].textContent = producto.item; // 'td' en posicion 0 es el nombre del producto, marca + modelo
    templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad; // 'td' en la posición 1 es la cantidad
    templateCarrito.querySelector(".btn-info").dataset.id = producto.id; // Boton para agregar 1 unidad más
    templateCarrito.querySelector(".btn-danger").dataset.id = producto.id; // boton para quitar una unidad
    templateCarrito.querySelector("span").textContent = producto.cantidad * producto.valor; // valor total de cada producto

    const clone = templateCarrito.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
  crearFooter();

  localStorage.setItem("carrito", JSON.stringify(carrito));
};

// Creo un footer dinamico para el carrito 
const crearFooter = () => {
  footer.innerHTML = "";
  if (Object.keys(carrito).length === 0) {
    footer.innerHTML = `
        <th scope="row" colspan="S">Carrito vacío - ¡Comprá tu siguiente consola! </th>
        `;
    dropdown.querySelector('span').textContent = `(0)`
    return;
  } //Si el carrito esta en "0" dejo un mensaje 

  const nCantidad = Object.values(carrito).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  ); //Accumulador de cantidad

  const nPrecio = Object.values(carrito).reduce(
    (acc, { cantidad, valor }) => acc + cantidad * valor,
    0
  ); //Acumulador de precio

  templateFooter.querySelectorAll("td")[0].textContent = nCantidad; //Cantidad total
  templateFooter.querySelector("span").textContent = nPrecio; //Precio total
  dropdown.querySelector('span').textContent = `(${nCantidad})` //Cantidad total para el carrito en la navbar

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);

  const vaciarBtn = document.getElementById("vaciarCarrito"); //boton para vaciar el carrito
  vaciarBtn.addEventListener("click", () => {
    carrito = {};
    crearCarrito();
  });
};

const btnAccion = (e) => { //Botones para sumar y restar un producto del carrito
  if (e.target.classList.contains("btn-info")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad++; //sumo 1
    carrito[e.target.dataset.id] = { ...producto };
    crearCarrito();
  }

  if (e.target.classList.contains("btn-danger")) {
    const producto = carrito[e.target.dataset.id];
    producto.cantidad--; //resto 1
    if (producto.cantidad === 0) {
      delete carrito[e.target.dataset.id]; //Si llego a "0" borro el item del carrito
    }
    crearCarrito();
  }
  e.stopPropagation();
};
