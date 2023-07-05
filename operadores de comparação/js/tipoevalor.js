/*                            Comparação de tipo e valor
Dois outros operadores de comparação existem no javascript: === e !==;

A função é comparar valor e tipo de dado.
*/

/*Vamos fazer a comparação do valor e do tipo do dado */

var numero = '5'
if(numero === 5){
    console.log("O numero é 5 e do tipo number")
}else{
    console.log("é de outro tipo ou não é o 5")
}

/*Agora vamos realizar a comapração de tipos diferentes */

if(numero !== 5){
    console.log("Não é o número 5 do tipo number")
}

