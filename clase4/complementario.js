function promedio (notaA, notaB, notaC){

    let promedio = parseInt(notaA) + parseInt(notaB) + parseInt(notaC) ;
    return promedio;


}

let notaA = prompt("Ingrese la nota del primer examen"); 
let notaB = prompt("Ingrese la nota del segundo examen");
let notaC = prompt("ingrese la nota del tercer examen");
let resultado = promedio(notaA, notaB, notaC) / 3;

if(resultado > 7){
    alert("Su nota final es: " + resultado + " felicitaciones, esta aprobado");
}

else{
    alert("Su nota final es: " + resultado + " lamentablemente ha desaprobado");
}