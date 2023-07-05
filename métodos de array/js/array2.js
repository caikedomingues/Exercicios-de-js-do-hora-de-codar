 /*Métodos de array parte 2 */

 /*
 Podemos também resgatar um conjunto de elementos com os métodos;

 Identificar o indice de um elemento especifico e muito mais
 */

 /*Splice: serve para adicionar elementos no meio do array, para utiliza-lo
 devemos informar o indice, o valor que vc quer excluir e o valor que
 você ira acrescentar.  */

 var arr = [1, 2, 3, 4, 5]
/*Ao realizar o procedimento abaixo, ele ira imprimir 999 entre 2 e 3 */
 arr.splice(2, 0, 999)

 console.log(arr)

 /*Agora vamos utilizar o splice pra excluir um valor */
 arr.splice(4, 1,)
 console.log(arr)

 /*indexOf(): retorna o primeiro índice em que o elemento pode ser
  encontrado no array, retorna -1 caso o mesmo não esteja presente. */
 console.log(arr.indexOf(5))

 /*join: pode transformar arrays em String */
var arr2 = ["O", "Rato", "roeu", "a", "roupa", "do", "rei", "de", "roma"]
console.log(arr2.join(","))

/*Reverse: serve para inverter os elementos de um array */
console.log(arr2.reverse())
