/*Callback functions */

/*
A função callback é um recurso muito interessante e também amplamente
utilizada em js;

Permite executar uma função depois de uma determinada ação;

Conceito fundamental para entender a parte assincrona do js.
*/

/*para exemplificar vamos criar duas funções padrões e uma callback que
irá padronizar o resultado das 2 funções */


function Exibir(num){
    console.log("A operação resultou em " + num)

}


function Soma(a, b, callback){
    var op = a + b
    callback(op)

}


function Multiplicação(a, b, callback){
    var op = a * b

    callback(op)
}

Soma(2, 2, Exibir)
Multiplicação(2, 4, Exibir)
