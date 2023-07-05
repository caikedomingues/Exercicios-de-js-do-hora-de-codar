                                    /*
                                    Funções
São blocos de códigos reutilizáveis;

Ou seja, evitamos a repetição da lógica de um programa em diversas partes
do código;

A função precisa ser invocada (chamada) para ser executada.
                                    */

/*Vamos criar uma função simples que tem como finalidade escrever
olá mundo das funções na tela. */
/*Aqui vamos criar o método dando um nome pra ele e colocar 
blocos de código dentro das chaves. */
function primeiraFuncao(){
    console.log('Olá mundo das funções')
}
/*Agora vamos chamar o método*/
primeiraFuncao()

/*Agora vamos trabalhar com argumentos */
/*Feito isso, iremos imprimir o valor que será
atribuido a variável nome */
function dizerNome(nome){
    console.log("O nome é: " + nome)
}

/*Mais uma vez, vamos realizar a chamada do método, porém, dessa vez
vamos colocar nos parenteses o valor da variável nome. */
dizerNome("Caike")

/*Agora vamos usar o mesmo método só que com a criação de outra 
variável. */

var NomeDoBancoDeDados = "Luiz Carlos"
dizerNome(NomeDoBancoDeDados)

/*Também podemos usar returns dentro dos métodos */
function Soma(a, b){
 var soma = a + b
 return soma 
}
/*Agora podemos atribuir a variáveis a função soma contendo dois valores
ou argumentos
 */
var somaUm = Soma(2,5)
console.log(somaUm)

var somaDois = Soma(5,5)
console.log(somaDois)

