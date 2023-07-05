/*setTimeout e setInterval */

/*
Podemos com estas funções criar ações no software que executam depois
de um tempo ou de tempo em tempos.

Um dos argumentos destas funções é uma callback function.
*/

/*SetTimeout*/
console.log("Antes do setTimeout")

setTimeout(function(){
    console.log("Testando o setTimeout")
},2000);

/*2000 representa 2 segundos, se estiver apenas 2 siginifica 2 
milisegundos */

/*setInterval*/
/*Também só será executada após a definição de um tempo */
setInterval(function(){
    console.log("Testando intervalos")

}, 1000)







