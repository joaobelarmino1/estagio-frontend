var lista = document.querySelector(".figuras__link");
var a = document.querySelector(".link_a");
var body = document.querySelector("body");

a.addEventListener("mouseover", function(){
    lista.classList.remove("evento__sumir");

});

a.addEventListener("mouseout", function(){
    lista.classList.add("evento__sumir");

});

a.addEventListener("click", function(){
    
    if (lista.classList.contains("evento__fixar")) {
        lista.classList.remove("evento__fixar");
    } else {
        lista.classList.add("evento__fixar");
    }
});

body.addEventListener("click", function(event){
    if (lista.classList.contains("evento__fixar") && !(event.target==a)) {
    lista.classList.remove("evento__fixar");
    }
    else {
        
    }
});