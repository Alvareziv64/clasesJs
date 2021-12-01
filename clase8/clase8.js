function listaCompras() {
    let valor = document.getElementById("elemento");
    let lista = document.getElementById("lista");
    let nuevoLi = document.createElement("li")
    nuevoLi.innerHTML = `${valor.value}`;
    lista.appendChild (nuevoLi);
}

function borrarElemento() {
    let lista = document.getElementById("lista");
    lista.removeChild (lista.lastChild);
}