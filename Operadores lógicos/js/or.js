/*                            Operador lógico or ||
O operador lógico || é conhecido também como OR;
Ele retorna true caso uma das operações retorne verdadeiro
o or retorna false apenas se as duas expressões são falsas
*/

/*Vamos criar o seguinte exercicio: Caso o nome seja igual joão ou a 
idade seja maior que 14 anos, ele poderá entrar na aula, sendo assim,
basta que uma das 2 condições sejam verdadeiras para que ele possa
adquirir a autorização
*/
var idade = 16

var nome = 'João'

if(nome == 'João' || idade > 14){
    console.log("Ele pode entrar na aula")
}else{
    console.log("Ele não pode entrar na aula")
}

/*Agora vamos simular um teste lógico pra ver o que o programa responde 
Caso o nome seja igual a 'João', o valor 15 seja maior que 20 ou então 10
igual a 10 o teste sera bem sucedido.
*/

if(nome == 'João' && 15 > 20 || 10 == 10){
    console.log("Teste bem sucedido")
}else{
    console.log("Teste mau sucedido")
}



