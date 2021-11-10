
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

console.log(consolas);

console.log("En stock:")
for ( let stock of consolas ) {
    console.log(stock.marca + " " + stock.modelo + " por $" + stock.valor);
}

