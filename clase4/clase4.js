function descuento( precio , categoria ){

    if( categoria == "Auriculares" || categoria == "auriculares"){
        let descuentoPrecio = precio * 0.05;
     
        return descuentoPrecio;

    }
    else if( categoria == "Accesorios" || categoria == "accesorios"){
        let descuentoPrecio = precio * 0.15;
      
        return descuentoPrecio;

    }
    else if( categoria == "Parlantes" || categoria == "parlantes"){
        let descuentoPrecio = precio * 0.10;
       
        return descuentoPrecio;
    }

}


function envio( precio ){
    let envio = precio * 0.07;
  
    return envio;



}




let precio = prompt("Ingrese el precio del prodcuto");
let categoria = prompt("Ingrese la categoria del producto");

let resultado = ( precio - descuento(precio , categoria) ) + envio(precio);
console.log(resultado);

alert("El total a pagar es $" + resultado)