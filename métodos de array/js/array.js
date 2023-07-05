/*Métodos array */
/*
Os arrays também possuem métodos;
Facilitando nossa vida para: adicionar e remover elementos;
resgatar apenas uma parte do array, etc.
*/

/*Vamos começar utilizando o length, que nos retorna o tamanho do array */
var arr = [1, 2, 3, 4, 5,];

console.log(arr.length)

/*O push pode adicionar elementos no array*/
arr.push(6)
console.log(arr)
console.log(arr.length)

/*Temos o pop que serve para excluir elementos no array*/
arr.pop()
console.log(arr)

/*unshift: Serve para adicionar elementos no começo do array*/
arr.unshift(0)
console.log(arr)

/*Shift: remove do começo */
arr.shift()
console.log(arr)

/*Acessar o ultimo elemento do array */
console.log(arr[arr.length - 1])


