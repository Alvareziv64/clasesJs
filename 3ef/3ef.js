//ARRAY CONSOLAS
let consolas = [ 

    n64 = { marca : "Nintendo",
            modelo : "64",
            valor : 7500
          },
    
    sg = { marca : "Sega",
           modelo : "Genesis",
           valor : 9500
         },

    gbc = { marca : "Nintendo",
            modelo : "Game Boy Color",
            valor : "8500"
          },

    xbc = { marca : "Microsoft",
            modelo : "Xbox Classic",
            valor : 12000
          }

]


//AGREGAR A LA LISTA
$("#n64").on ("click" , ()=> {
    $("ul").append(`<li>${n64.marca + " " + n64.modelo + ": $" + n64.valor }</li>`)
});


$("#sg").on ("click" , ()=> {
    $("ul").append(`<li>${sg.marca + " " + sg.modelo + ": $"+ sg.valor}</li>`)
});


$("#gbc").on ("click" , ()=> {
    $("ul").append(`<li>${gbc.marca + " " + gbc.modelo + ": $" + gbc.valor}</li>`)
   
});


$("#xbc").on ("click" , ()=> {
    $("ul").append(`<li>${xbc.marca + " " + xbc.modelo + ": $" + xbc.valor}</li>`)
});


//BORRAR TODO
$("#borrarTodo").on ("click" , ()=> {
    $("li").remove()
});


// BORRAR
$("#borrar").on ("click" , ()=> {
    $("li:last").remove()
});


//api clima 

let api = "https://api.openweathermap.org/data/2.5/weather?q=Buenos+aires&units=metric&appid=600e6d3042ac61534964bb90297d9bb4"


$.get ( api , (datos)=> {

    console.log(datos)
    
    let contenido = `
                         <div>
                           <h4>${datos.name}</h4>
                         </div>
                         
                         <div>
                           <p class="info-clima"> Temp. Actual: ${datos.main.temp}°</p>            
                         </div>
                     `;
    $(".clima").append(contenido);

})