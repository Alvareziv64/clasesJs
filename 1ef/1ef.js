
//Inicio de sesion

let usuarioSis = "admin";
let passwordSis = 123456;


for (let i = 0; i < 3; i = i + 1){

      let usuario = prompt("Ingrese su usuario");
      let password = prompt("Ingrese su password");

      if( usuarioSis == usuario && passwordSis == password ) {
          console.log ("Bienvenido al sistema");
          break;
      }

      else( console.log ("Error")
           )

}

alert("¡Bienvenido!")


//Stock de consolas

let consolas = [ 

    { marca : "Nintendo",
      modelo : "64",
      aniolanzamiento : "1996",
      valor : 5500
    },

    { marca : "Sega",
      modelo : "Genesis Model 2",
      aniolanzamiento : "1993",
      valor : 8000
    },

    { marca : "Nintendo",
      modelo : "Game Boy Color",
      aniolanzamiento : "1998",
      valor : 6500
    },

    { marca : "Microsoft",
      modelo : "Xbox classic",
      aniolanzamiento : "2001",
      valor : 12000
    }

];

// ordenado de mas barato a mas caro

let ordenPorValor = consolas.sort (( a , b) => {
    return a.valor - b.valor
})


console.log("En stock:")
for ( let stock of consolas ) {
    console.log(stock.marca + " " + stock.modelo + " por $" + stock.valor);
};


let lista = "Consolas en stock \n"
ordenPorValor.forEach ((consola) => {
    lista += consola.marca + " " + consola.modelo + " por $" + consola.valor + "\n"
});

alert(lista);

