/*Outras formas de acessar */

/*
Com a evolução da linguagem foram criados dois seletores que acabam com
toda a complexidade desta ação;

querySelector e querySelectorAll;

Com estes podemos acessar os elementos baseados em regras de css.
*/

/*Vamos acessar todos os elementos da lista no html com queryselectorall */
var itensClasse = document.querySelectorAll('#lista2 li')
console.log(itensClasse)

var itensClasse2 = document.querySelectorAll('#lista .item')
console.log(itensClasse2)

var primeiraLista = document.querySelector('#lista')
console.log(primeiraLista)

var primeiraLista2 = document.querySelector('ul')

console.log(primeiraLista2)
