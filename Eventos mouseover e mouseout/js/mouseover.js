/*Eventos mouseover */

/*
O mouseover é ativado quando o ponteiro do mouse passa em cima do 
elemento que criamos o evento;

Temos também o evento mouseout que é quando o ponteiro sai do elemento
*/


//evento de mouseover

/*Vamos selecionar o elemento html */
var title = document.querySelector("#title")

title.addEventListener("mouseover", function(){

    this.style.backgroundColor = "yellow"
})


//evento mouseout

title.addEventListener("mouseout", function(){
    
    this.style.backgroundColor = "white"
})

//afetar outro elemento com mouseover

var subtitle = document.querySelector(".subtitulo")

subtitle.addEventListener("mouseover", function(){

    var legenda = document.querySelector("#legenda")

    legenda.classList.remove("hide")

})






