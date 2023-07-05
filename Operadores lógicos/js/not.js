/*                             Operador Lógico ! Not
O operador lógico ! é conhecido também como not;
Este operador muda o valor que a expressão retornou;
Se recebeu true vira false, se recebeu false vira true.
*/

/*Vale lembrar que o sinal not fica sempre na frente do valor */

if(!true){
    console.log('passou')
}else{
    console.log('não passou')
}

/*Vamos negar o valor da variável nome */
var nome = 'Caike'

if(!(nome == 'Caike')){
    console.log('Ok')
}else{
    console.log('falso')
}
