/*Alterando o css com Js */

/*
É muito comum alterar CSS com JavaScript também
As regras de CSS ficam de forma inline
Substituindo a maioria das outras regras criadas
*/

/*Vamos acessar(Selecionar) a tag h1 pelo id titulo */

var title = document.getElementById("#title")

/*Agora vamos adicionar estilo css pelo js */
title.style.color = "red"
/*Também podemos alterar a cor de fundo do elemento */

title.style.backgroundColor = "yellow"

/*Vamos selecionar agora o h2 de class subtitulo */

subtitle = document.getElementById(".subtitulo")

/*Nesse caso, iremos alterar o os elementos visuais através do text, 
sendo assim, precisamos mudar um pouco o código*/

subtitle.style.cssText = "color: blue; background-color: pink; font-size: 50px "



