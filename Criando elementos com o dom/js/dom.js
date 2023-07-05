/*Criando Elementos (createElement) */

/*
Outra possibilidade do JS e o DOM é criar elementos;
O texto de um elemento é considerado um nó na arvore do DOM;
Ou seja, temos que criar o texto do elemento também
*/

/*Vamos criar um novo elemento através do método createElement() */

var novoParagrafo = document.createElement("p")
console.log(novoParagrafo)

/*Agora temos que criar o conteudo da tag, utilizando o método TextNode() */
var texto = document.createTextNode("Este é o conteúdo do paragráfo")

/*Agora para imprimir esse conteudo utilizamos o método appendChild() */
novoParagrafo.appendChild(texto)

console.log(novoParagrafo)

/*Agora vamos tentar colocar conteudo na div container */
var container = document.getElementById("#container")
console.log(container)
/*Após o mapeamento feito ácima vamos colocar o conteudo na div */
var elemento = document.createElement("span")

elemento.appendChild(document.createTextNode("Texto de span"))

console.log(elemento)

/*Agora que ja testamos a criação do conteúdo, vamos coloca-la na div */
container.appendChild(elemento)



