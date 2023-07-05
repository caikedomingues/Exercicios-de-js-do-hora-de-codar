/*                             Operadores Condicionais
São instruções que podem determinar o fluxo de uma aplicação;

Amplamente utilizados, deixam os softwares dinâmicos;

Exemplo são: if, else if, else.

                        Condicional if(se)
Executa um bloco de código se a instrução for verdadeira;

Se for falsa, segue o o código normalmente;

Lembrando que: true e false são do tipo boolean.

*/

/*Agora vamos testar o if*/

if(true/*Dentros dos paranteses ficara a condição que ira definir se
o bloco vai ou não ser executado*/){
    console.log("Testando o  if")
    /*Aqui é o local onde iremos executar o bloco de código */
}

/*Como a condição ácima é verdadeira, o programa executara normalmente,
agora vamos mudar a condição pra falso */

if(false){
    console.log("if falso")
}

/*Agora vamos criar um pequeno e simples exercicio utilizando o if,
vamos conferir se o usuário pode ou não tirar a habilitação de acordo
com a idade. */

var idade = 16

if(idade >= 18){
    console.log("O usuário pode tirar habilitação")
}else{
    console.log("O usuário não pode tirar habilitação")
}
    







