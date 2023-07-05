/*Métodos de String parte 2 */

/*
Os métodos de String também auxiliam na sua modificação;
Podemos por exemplo deixar a fonte em caixa alta ou baixa com JS.
*/

/*
toUpperCase: deixa as letras em caixa alta 
toLowerCase: deixa as letras em caixa baixa
*/

var frase = "Esta é frase que vamos manipular"
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
/*Também podemos realizar esses 2 métodos através de uma variável */
var caixaAlta = frase.toUpperCase()
console.log(caixaAlta)

/*Trim: remove espaços em brancos e deixa apenas o que foi digitado */
//Sem trim
var nome =    "       Caike         "

console.log(nome)
//Com trim
console.log(nome.trim())

/*Split: transforma textos em arrays */

console.log(frase.split(" "))

/*lastindexOf; nos aponta o ondice da última palavra */
var fraseDois = "Eu quero a última palavra teste do teste"
console.log(fraseDois.lastIndexOf("teste"))




