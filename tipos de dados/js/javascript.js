/*No javascript temos diversos tipos de dados, os mais comuns são:
    Number, String, Boolean, null e undefined, Object

    Podemos identificar o tipo do dado com o operador typeof
*/

/*O Number é um tipo de dado para números;
possui três valores simbólicos: +Infinity, -Infinity e NaN;
Não existe um tipo definido para inteiros, todo número é um 
Number. */

/*Para começarmos, vamos verificar o tipo do dado da variável numero que
iremos criar */
var numero = 34

console.log(typeof numero)
/*Ao conferir, veremos que é uma variável do tipo Number */

/*Geralmente utilizamos o float para numeros "quebrados", ou seja, com
virgulas */

var float = 5.32

/*Agora vamos colocar um número entre aspas para ver se o tipo do dado
continua o mesmo */

var textoComNumero = "4.50"
console.log(typeof textoComNumero)
/*Como podemos conferir, independente do conteúdo, se tiver dentro das
aspas será uma String*/

/*Agora vamos conhecer valores simbólicos do numero */

console.log(typeof NaN)
console.log(typeof +Infinity)
console.log(typeof -Infinity)

/*Se formos conferir, veremos que o resultado também será Number, já que
como falamos antes, são valores numéricos */