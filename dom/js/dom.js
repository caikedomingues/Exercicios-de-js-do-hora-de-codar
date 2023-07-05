/*Primeiro vamos criar array que tera dentro dele uma lista com nomes de
frutas. */

var lista = ['Laranja', 'maçã', 'pera', 'jaca', 'limão']

/*Agora vamos criar o elemento que trabalha com listas não ordenadas */
/*Dentro dos parenteses teremos o nome do elemento que no caso é a ul,
que em html, significa lista não ordenada */
var ul = document.createElement('ul')

/*Agora vamos colocar o elemento dentro do body */
var body = document.getElementsByTagName('body')

console.log(body[0])
/*Agora vamos criar o método que serve para adicionar o elemento filho */
body[0].appendChild(ul)

var listaNoBody = document.getElementsByTagName('ul')

console.log(listaNoBody[0])

/*Basicamente, esse for irá conferir se a variável i é menor que o
tamanho da lista(array), e enquanto essa condição for verdadeira,
ele irá adicionar + 1 */
for(i = 0; i < lista.length; i++){
    /*Criei o lemento li */
    var liFor = document.createElement('li')
    /*Criei o texto do elemento */
    var textoLi = document.createTextNode(lista[i])
    /*Vamos novamente criar o elemento filho */
    liFor.appendChild(textoLi)
    console.log(liFor)
    /*Agora vamos adicionar os elementos do array no html */
    listaNoBody[0].appendChild(liFor)
}