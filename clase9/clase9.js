let agregar = document.getElementById ("agregar");

agregar.addEventListener("click" , function(e) {
    let valor = document.getElementById("elemento");
    let lista = document.getElementById("lista");
    let nuevoLi = document.createElement("li")
    nuevoLi.innerHTML = `${valor.value}`;
    lista.appendChild (nuevoLi);
})

let borrar = document.getElementById ("borrar");

borrar.addEventListener("click" , function (e){
    let lista = document.getElementById("lista");
    lista.removeChild (lista.lastChild);
})

