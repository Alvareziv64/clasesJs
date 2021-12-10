
let n64 = document.getElementById("n64");
let sg = document.getElementById("sg");
let gbc = document.getElementById("gbc");
let xbc = document.getElementById("xbc");

let borrar = document.getElementById ("borrar");


n64.addEventListener( "click" , function(e) {
    let lista = document.getElementById("lista");
    let nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Nintendo 64";
    lista.appendChild (nuevoLi)
})


sg.addEventListener( "click" , function(e) {
    let lista = document.getElementById("lista");
    let nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Sega Genesis";
    lista.appendChild (nuevoLi)
})


gbc.addEventListener( "click" , function(e) {
    let lista = document.getElementById("lista");
    let nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Game Boy Color";
    lista.appendChild (nuevoLi)
})


xbc.addEventListener( "click" , function(e) {
    let lista = document.getElementById("lista");
    let nuevoLi = document.createElement("li");
    nuevoLi.innerHTML = "Microsoft Xbox Classic";
    lista.appendChild (nuevoLi)
})

borrar.addEventListener("click" , function (e){
    let lista = document.getElementById("lista");
    lista.removeChild (lista.lastChild);
})