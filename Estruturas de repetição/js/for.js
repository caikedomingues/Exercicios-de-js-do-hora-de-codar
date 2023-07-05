/*                             Estrutura for(para)
O for tem uma sintaxe mais complexa, mas é optado pela maioria dos 
programadores;

Apesar de parecer mais dificil, como a instrução fica toda em uma linha
proporciona maior controle.
*/

/*O for funciona com valor inicial, valor final e incremento */


for(var i = 0; i < 10; i++){
        console.log("Teste de for")
}

/*Também podemos trabalhar com arrays */
var arr = [1, 2, 3, 4]
/*Nesse caso, arr.length é o tamanho do array, ou seja,
enquanto, o valor de j for menor que o tamanho do array
ele executara o bloco. */
for(var j = 0; j < arr.length; j++ ){
    console.log(arr[j])

}
/*Vamos descobrir o tamanho do array */
console.log(arr.length)

for(var x = 5; x < 100; x *= 3){
    console.log(x)
}


