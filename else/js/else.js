/*                                Condicional: else e else if 
Caso a instrução de if seja negativa, podemos adicionar else(senão) que
será a outra condicional a ser executada;

podemos então criar uma bifurcação no código;

Já o else if tem a possibilidade de fazer outra verificação e adicionar
mais um bloco de código.

o else if é basicamente um meio termo entre o if(se) e o else(senão).

*/

/*Primeiro vamos trabalhar o else if  */

/*Nesse caso teremos 3 condições, sendo elas, o nome Caike ou nome Cauã,
caso nenhuma das condições sejam satisfeitas o prgrama irá sinalizar que
o usuário possui outro nome.
Podemos ter quantos else if são necessários */
var nome = 'Caike'

if(nome == 'Caike'){
    console.log("O nome dele é Caike")
} else if(nome == 'Cauã'){
    console.log("O nome dele é Cauã")
} else{
    console.log("Ele possui outro nome")
}

 var idade = 14
if(idade >= 20){
    console.log("Ele pode entrar na festa")
} else if(idade >= 16 && idade <= 19){
    console.log("Ele só pode entrar com autorização")
}else{
    console.log("Ele não pode entrar")
}

