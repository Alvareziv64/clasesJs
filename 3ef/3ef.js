
$("#n64").on ("click" , ()=> {
    $("ul").append(`<li>Nintendo 64</li>`)
});


$("#sg").on ("click" , ()=> {
    $("ul").append(`<li>Sega Genesis</li>`)
});


$("#gbc").on ("click" , ()=> {
    $("ul").append(`<li>Game Boy Color</li>`)
   
});


$("#xbc").on ("click" , ()=> {
    $("ul").append(`<li>Microsoft Xbox Classic</li>`)
});

$("#borrarTodo").on ("click" , ()=> {
    $("li").remove()
});

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
                           <p class="info-clima"> Temp Actual: ${datos.main.temp}°</p>
                         
                         
                      
                         </div>
                         
                         
                    
                     
                     `;
    $(".clima").append(contenido);

})