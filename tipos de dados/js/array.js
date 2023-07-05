/*                Arrays
Na verdade, os arrays são considerados objetos em javascript, porém,
servem como listas;

Podemos ter itens de qualquer tipo de dado também;

Porém, não por chave e valor, e sim por indice.

Os arrays tem como ponto inicial de contagem o valor 0
 */

/*Vamos criar o nosso primeiro array, lembrando que eles também podem 
guardar diferentes tipos de dados e até mesmo um objeto dentro deles*/

var array = [5, 'Caike', true, {teste: 1, teste: 2}]
console.log(array)
/*Vamos conferir o tipo */
console.log(typeof array)
/*Arrays para o javascript são considerados objetos  */
/*Também podemos acessar um determinado elemento do array, para isso,
basta sinalizar o indice que o elemento se encontra */

console.log(array[0])//Ira acessar o 5
console.log(array[1])//irá acessar o nome
console.log(array[2])//Irá acessar o true
console.log(array[3])//Irá acessar o objeto

/*Para adicionar um elemento no array, basta analisar qual indice o array
não possui, feito isso, você deve criar o indice e dar um valor a ele */
array[4] = 10

console.log(array)
console.log(array[4])

/*Caso você queira, é possivel mudar o valor ou tipo do dado no array,
basta sinalizar qual indice você quer alterar e atribuir o novo valor  */

array[0] = "Novo valor"
console.log(array)



