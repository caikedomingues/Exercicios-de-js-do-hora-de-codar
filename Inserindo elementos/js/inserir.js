/*Adicionando elementos */

/*
Podemos inserir um elemento dentro de outro, por exemplo, um paragrafo
em uma div;

isso é considerado como "acrescentar um filho" em  JS;
*/

/*Antes de adicionar, devemos criar o elemento */
var elemento = document.createElement("div")

elemento.classList = "div-criada"

console.log(elemento)

/*Agora precisamos colocar esse elemento dentro da div container */

var container = document.querySelector("#container")
/*Agora que ja´colocamos um elemento dentro do outro, precisamos imprimir
no documento html
 */

container.appendChild(elemento)

/*insertBefore: insere antes, trabalha com 2 valores o que vai ser 
inserido e a referência*/

var elemento2 = document.createElement("div")

elemento2.classList = "div2-criada"

var elemento3 = document.querySelector("#container .div2-criada")

console.log(elemento3)

container.insertBefore(elemento2, elemento3 )


