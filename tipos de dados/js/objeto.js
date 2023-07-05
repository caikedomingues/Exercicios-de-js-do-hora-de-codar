/*Funcionam como um array associativo de outras linguagens;
Podemos criar propriedades com chave e valor;
A idéia é guardar um conjunto de valores para utilizar posteriormente. */

/*Vamos definir um objeto. Esse tipo tem a vantagem de trabalhar com
variáveis compostas e de diferentes tipos. Vamos conferir a criação
do objeto abaixo. */

var objeto = {
    nome: "Caike",
    idade: 19,
    profissao: "Programador",
    estaTrabalhando: true,

}
console.log(objeto)
/*Como de costume iremos verificar o tipo do dado da variável */
console.log(typeof objeto)

/*Se quisermos podemos chamar uma variável especifica do objeto, sem
necessariamente, chamar as outras. por exemplo. */

console.log(objeto.nome)//Irá executar o nome
console.log(objeto.idade)//Irá executar a idade
console.log(objeto.profissao)//Irá executar a profissão

/*Também podemos concatenar essas informações com frases */
console.log("Me chamo " + objeto.nome)
console.log("Tenho " + objeto.idade)
console.log("A minha profissão é " + objeto.profissao)
console.log("Atualemnte estou trabalhando: " + objeto.estaTrabalhando)
/*Lembrando que, por ser uma linguagem de tipagem fraca, podemos 
futuramente mudar o valor ou tipo de uma das varoáveis do objeto. */

