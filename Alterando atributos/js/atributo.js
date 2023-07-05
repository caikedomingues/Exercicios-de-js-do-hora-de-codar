/*Alterando Atributos */

/*
Podemos alterar os atributos via JS e DOM;
Por exemplo: alterar o atributo alt de uma imagem;
ou até um src de uma imagem;
Todos os atributos podem ser alterados via JS.
 */

/*´Primeiro vamos criar uma variável para titulo para usar o h1 do 
html
 */
var titulo = document.querySelector("#titulo")
/*Vamos criar uma classe na tag h1 */
titulo.setAttribute("class", "testando-atributo")

console.log(titulo)
/*Vamos criar uma variável para o button do html */
var btn = document.querySelector("#btn")
/*Vamos desabilitar ele com o atributo disabled */
btn.setAttribute("disabled", "disabled")

console.log(btn)

var subtitulo = document.querySelector(".subtitulo")

subtitulo.setAttribute("id", "titulo-2")

console.log(subtitulo)

/*Também podemos remover atributos */
var lista = document.querySelector("#lista")

lista.removeAttribute("id")

console.log(lista)







