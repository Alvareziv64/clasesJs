
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