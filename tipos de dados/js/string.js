/*                     Strings
é o tipo de dados para textos;
podem ser escritas com aspas simples ou duplas
um numero entre aspas pode ser considerado string
é possivel concatenar string com o +
 */

/*Vamos criar uma variável do tipo string */

var nome = "Caike"
console.log(nome)
/*Como fizemos anteriormente, vamos conferir o tipo do dado */

console.log(typeof nome)

/*Agora vamos tentar concatenar strings */

var nome2 = "Tony"
var sobrenome = "Ramos"
var nomeCompleto = nome2 + " " +  sobrenome
console.log(nomeCompleto)
/*Vamos criar uma frase que será concatenada com um dos nomes que eu
irei escolher */
var frase = "Seja bem vindo " + nomeCompleto
console.log(frase)

/*Também podemos escrever algo no documento */
document.write("Olá usuário, tudo bem?")
document.write("Seja bem vindo " + nomeCompleto)


