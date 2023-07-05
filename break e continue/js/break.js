/*                             Break e Continue

Com break podemos encerrar uma instrução;
Com o continue podemos pular uma instrução;
Utilizados na maioria das vezes em loop.

*/

/*Vamos criar um programa que para a execução ao enxergar no valor 5
durante a contagem */

for(var i = 10; i > 0; i--){
    /*É importante imprimir antes de criar a condição
    se, assim, o 5 também aparecerá no console. */
    console.log(i)

    if(i == 5){
        break
    }

   
    
}

console.log("Deu o break")
/*Aqui vamos criar um programa que conta até 100 de 10 em 10*/

var x = 10
/*Enquanto valor for menor que 100 ele irá adicionar mais 10 na contagem */
while(x < 100){
    /*Incremento */
    x += 10
    /*Se o valor de x for igual a 60, ele dara continue e pulara 
    o valor(a execução do codigo ou da contagem) */
    if(x == 60){
        continue
    }

    console.log(x)
   
}
console.log("Deu continue")



