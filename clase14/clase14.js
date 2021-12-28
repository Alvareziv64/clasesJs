let api = "https://api.openweathermap.org/data/2.5/weather?q=Buenos+aires&units=metric&appid=600e6d3042ac61534964bb90297d9bb4"

$("#botonClima").click( ()=> {

    $.get ( api , (datos)=> {

        console.log(datos)
        
        let contenido = `<div>
                             <h2>${datos.name}</h2>
                             <p>Clima: ${datos.weather[0].description}</p>
                             <p>Temp Actual: ${datos.main.temp}°</p>
                             <p>Sensación Termica: ${datos.main.feels_like}°</p>
                             <p>Temp Max: ${datos.main.temp_max}°</p>
                             <p>Temp Min: ${datos.main.temp_min}°</p>
                             <p>Humedad: ${datos.main.humidity}%</p>
                         </div>
                         
                         `;
        $("body").append(contenido);

    })
})