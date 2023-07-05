/*clearTimeout e clearInterval */

/*
Podemos por um fim em setTimeout e setInterval por meio destes dosi métodos
então, após determinada condição os timers não serão mais executados
*/

/*SetTimeout*/

var x = 0
//setTimeout(function(){
  //  console.log("O x é 0")
//},1500);

/*Agora vamos parar a execução do setTimeout utilizando uma variável
e um if
 */
var x = 0
var meutempo= setTimeout(function(){
    console.log("O x é 0")
},1500);

var x = 5
/*Aqui o if ira analisar se o valor passado é maoir que 0, se a condição 
for verdadeira, ele irá imprimir a mensagem */
if(x > 0){
    /*Aqui desenvolveremos o clearTimeout e passaremos como parametro, o
    a variável meu tempo */
    clearTimeout(meutempo)
    console.log("O x passou de 0")
}



/*2000 representa 2 segundos, se estiver apenas 2 siginifica 2 
milisegundos */

/*setInterval*/
/*Também só será executada após a definição de um tempo */
/*A lógica para interromper será a mesma,  porém, faremos isso dentro
do setTimeout*/

var meuintervalo = setInterval(function(){
    console.log("Imprimindo intervalo")
    
}, 500)

setTimeout(function(){
    console.log("Não precisa mais repetir")
    clearInterval(meuintervalo)


}, 1500)




