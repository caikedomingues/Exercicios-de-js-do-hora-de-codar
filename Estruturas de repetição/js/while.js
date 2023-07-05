/*                      Estruturas de repetição
Estas estruturas servem para repetir n vezes uma operação;
Por exemplo, repetir uma determinada lógica em cada elemento de um array;
As estruturas mais comuns são: while(enquanto) e for(para);
Obs: Tomar cuidado com o loop infinito.
*/

/*
O while é a estrutura de repetição mais simples do JavaScript;
A idéia é que se repita algo até atingir tal condição;
while -> Enquanto.
*/

/*Vamos criar um exemplo onde o while ira executar 5 vezes uma 
condição */

/*Vamos criar a variável x */

var x = 0
/*Enquanto x for menor ou igual  que 5, ele irá imprimir a frase na 
tela/console. */

while(x < 5){
    console.log("Testando repetição")
    /*Temos o x++ que irá adicionar + 1 na contagem para totalizar 5
    no final. */
    x++
}

/*Agora vamos acessar os elementos de um array com while */

var arr = ['Teste', 'testando', 'a', 'b']
/*Vamos criar uma varoável de valor 0 */
var y = 1
/*Enquanto o valor de y for menor ou igual a 3, ele irá imprimir o 
conteudo do array a partir do valor de y. */
while(y <= 3){
    console.log(arr[y])
    /*Incremento que adiciona +1 na contagem */
    y++
}

/*Aqui, enquanto a variável i for menor que 6, ele imprimira o nome
matheus a partir do valor de i, por exemplo:*/
var palavra = 'Matheus'
var i = 1
while(i <= 6){
    console.log(palavra[i])
    i++
}



