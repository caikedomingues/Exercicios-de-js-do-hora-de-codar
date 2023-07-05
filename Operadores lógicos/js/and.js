/*                             Operadores Lógicos
Nas linguagens de programação existem operadores lógicos;
Estes operadores realizam comparações para que seja retornado
um true ou false;

Decidindo então o fluxo da aplicação;

Utilizamos principalmente nas instruções de condição e repetição, em
conjunto dos operadores de comparação
*/

/*                          Operador Lógico and(&&)
O operador lógico && é conhecido também com and;

Ele vai retornar true apenas se as duas expressões retornarem true;

Qualquer outro resultado o operador and retornara false.
*/

/*Vamos criar um exercicio que irá verificar duas condições, sendo elas
o nome do usuário e a idade, caso as duas condições sejam verdadeiras 
ele poderá ingressar na aula. */

var idade = 16
var nome = 'joão'
if(idade == 16 && nome == 'joão'){
    console.log("João pode entrar na aula")
}else{
    console.log("João não pode entrar na aula")
}


