 /*Let e const + escopo */
 /*
 Utilizando let e const podemos criar escopo até em instruções como if;
 deixando o código mais confiável;
 Separando cada bloco em um escopo;
  */

 let x = 5//var x = 5
/*Como vocês podem ver mudei o valor x, isso ocorre porque o javascript
é uma linguagem de tipagem fraca, ou seja a qualquer momento posso trocar
os valores de uma variável */
 x = 12
 console.log(x)

 /*Com o let, posso criar variáveis diferentes sem "poluir" o escopo
 global*/

 if(true){
    let x  = 20
    console.log(x)
 }

 console.log(x)

 /*Já o const cria uma variável de valor constante, ou seja, uma variável
 que só pode ter um valor, sendo assim, não podemos futuramente alterar
 ela. */

 const y = 10
 /*Caso eu crie outro const y  de valor diferente o código apresentara
 erro */

 if(true){
    /*Nesse caso, por estar dentro de um if, a variável const y, não
    afeta a variável anterior */
    const y = 12
    console.log(y)
 }

 /*Vamos fazer mais um exercicio, só que utilizando o let, dessa vez
 dentro de um for, vale lembrar que o let não irá afetar os outros let
  */

 for(let x = 0; x <= 10; x++){
    console.log(x)
 }


