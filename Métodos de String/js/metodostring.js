/*Métodos de String */

/*
O objeto String também possui métodos uteis;
Que vão nos auxiliar a manusear textos  nos nossos softwares.
*/
/*Length: irá nos dar a quantidade de letras (caracteres) que uma string
possui. */
var nome = 'Caike'
console.log(nome.length)

/*indexOf: nos entrega o indice, a posição de uma letra na palavra */

var frase = 'O rato roeu a roupa do rei de Roma'
console.log(frase.indexOf('roeu'))

/*Slice: serve para remover, ou melhor, extrair uma parte do texto */
var roeu = frase.slice(7)
console.log(roeu)

/*Replace: serve para substituir palavras, para isso basta eu criar
outra variável e atribuir como valor o nome de outra variável com o
ponto replace, feito isso, colocarei nos parenteses, a palavra que vai
ser substituida e a palavra nova.*/
var novaFrase = frase.replace('roeu', 'teste')
console.log(novaFrase)