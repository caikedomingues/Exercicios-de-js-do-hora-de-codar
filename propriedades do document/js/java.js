/*Propriedades od document */

/*
O objeto documemt não tem somente métodos
Podemos retirar várias informações importante das suas propriedades 
também.
*/

/*Propriedades document */

console.log(document.body)

console.log(document.head)

/*Podemos acessar os links do documento html colocaremos links por assim,
selecionamos todos os links presentes no documento html */
console.log(document.links)
/*Também podemos acionar por indice */
//console.log(document.links[1])

/*Podemos alterar o conteudo do link */
//document.links[1].textContent = "Twitter"

/*Agora vamos acessar a url da página */
console.log(document.URL)


console.log(document.title)

/*Também podemos alterar o title */
document.title = "Aula 42"
