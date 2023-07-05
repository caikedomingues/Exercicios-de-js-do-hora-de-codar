/*Trocando elementos */

/*
Podemos também trocar um elemento no DOM;
Ou seja, substituir uma tag por outra e de modo bem fácil.
*/

/*criação do elemento */
var elemento = document.createElement("h3")
/*Agora vamos criar uma classe para o elemento h3 */
elemento.classList = "testando-classe"
/*Vamos inserir um texto na tag */
var texto = document.createTextNode("Este é o texto do h3")
/*Agora vamos imprimir no documento html */
elemento.appendChild(texto)
console.log(elemento)

/*Selecionar o elemento que quero trocar */
var titulo = document.querySelector("#titulo")
console.log(titulo)

/*Selecionar o pai do elemento, no caso do title será a tag body */
/*Com esse código o JS acessa o pai da tag title */
var pai = titulo.parentNode
/*Agora vamos trocar os elementos, para isso funcionar eu devo indicar
quem vai entrar e quem vai ser substituido
 */
pai.replaceChild(elemento, titulo)

