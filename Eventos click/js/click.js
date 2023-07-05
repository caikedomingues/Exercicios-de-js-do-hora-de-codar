/*Eventos click */

/*
O click é ativado quando o usuário clica em um elemento em que atrelamos 
um evento;

Após a a ação podemos fazer as modificações e alterações no html/css que
quisermos.
*/

/*vamos criar uma variável que que contera o id do button */

document.querySelector("#btn")

console.log(btn)
/*Agora vamos criar um método que terá como parametro o tipo de evento
que será executado junto com uma callback*/
btn.addEventListener("click", function(){
        console.log( "clicou")
        console.log(this)
        /*O this é o próprio elemento, agora através dele, podemos
        manipular algumas propriedades como o estilo */

        this.style.color = "red"
})

/*Agora vamos adicionar um evento no h1 */

var title = document.querySelector("#title")

title.addEventListener("click", function(){
    /*Nessa função sempre que eu clicar em h1 na página, irá imprimir
    teste */

    console.log("teste")

    /*Também podemos usar o click para modificar outros elementos */
    var subtitle = document.querySelector(".subtitulo")
    /*Nesse caso, ao clicar em h1 ele ocultara o h2 na página */
    subtitle.style.display = "none"

})

/*Também podemos atribuir valores nos double clicks (clique duplo) */

var subtitle = document.querySelector(".subtitulo")

subtitle.addEventListener("dblclick", function(){
    /*Aqui ao dar clique duplo no h2 da página ele irá imprimir uma
    mensagem */
    console.log("clique duplo")

})




