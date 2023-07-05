/*Métodos Numéricos */
/*
O objeto Number, pai dos numeros, contém métodos muito uteis para trabalhar
com números em JavaScript;

A maioria dos tipos de dados também tem um objeto pai, como: String,
Object e Array.
*/

/*parseFloat: transforma os numeros em valores flutuantes, ou seja, um
numero com casas decimais */

console.log(parseFloat('12.999'))
/*Também podemos representar esse mesmo código da seguinte maneira */
console.log(Number.parseFloat('12.999'))

/*Temos também o parseInt que é capaz de transformar uma String em numero */
console.log(parseInt('10'))
/*Também é possivel transformar decimais em inteiros */
console.log(parseInt(16.9))

/*To fixed: Serve para limitar casas decimais */
/*Para fazermos funcionar precisamos definir o valor e dentro dos
parenteses do método, devemos colocar a quantidade de casas que 
queremos utilizar.
Observação: há a possibilidade dele arredontar o valor */
console.log(23.999.toFixed(1))

/*isNan(is not a number ou isso não é um numero): Verifica se o dado é um 
número */
console.log(isNaN('teste'))
console.log(isNaN(10))

/*Max value e min value: São valores que o JavaScript considera maior
ou menor, caso passe desses parametros o javascript considera como
infinito ou - infinito */
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
/*Caso o programador ultrapasse os numeros ele irá imprimir a mensagem
de infinito */

console.log(2.7976931348623157e+308)