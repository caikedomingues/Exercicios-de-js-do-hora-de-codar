/*Alterando o conteúdo(texto)*/

/*
Podemos alterar o texto de qualquer elemento de forma fácil com JavaScript;
Posteriormente poderemos atrelar esta ação com algum evento.
*/

/*A primeira coisa que temos fazer é selecionar o elemento */

var title = document.querySelector('#titulo')
console.log(titulo);

/*Vamos alterar o conteúdo do title utilizando o inner    */

titulo.innerHTML = "Testando o inner"


/*textContent: mais recomendado. Vamos tentar trocar o conteudo h2 com ele */
var subtitle = document.querySelector('.subtitulo')
console.log(subtitulo)
subtitulo.textContent = "Testando o textContent"

  



