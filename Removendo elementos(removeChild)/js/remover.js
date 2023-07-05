/* Removendo Elementos*/
/*
Remover elementos também é muito facil em JavaScript;
Temos como remover o elemento diretamente e também um 
elemento filho;
*/

/*Para começarmos a trabalhar, devemos primeiro, selecionar a tag que 
queremos remover 
*/
/*removeChild: remove os elementos filho */
var container = document.querySelector("#container")
/*Antes de criar o método para remover, devemso criar a variável que 
recebe o elemento filho
 */
var p = document.querySelector("#container p")

container.removeChild(p);

/*Agora vamos tentar remeover o h2 */
var h2 = document.querySelector(".subtitulo")
subtitulo.remove()