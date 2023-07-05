/*O que são eventos? */

/*
Por meio de JavaScript podemos mapear algumas ações dos usuários,
que chamamos de eventos;

como: movimento do mouse, click, mouse entrando ou saindo de um elemento,
carregamento de uma página e etc.

E então criar um comportamento interessante como: animação de menu abrindo
e fechando
*/

/*Evento onload */

/*
O onload é ativado ao carregar a página;
Podemos depois desse evento realizar alguma ação no nosso projeto,
*/

/*Vamos começar  criando um window que contera um onload e uma funçaõ
que deixara uma mensagem ao carregar o programa */

window.onload = function(){
    console.log("Carregou o dom")
    var title = document.querySelector("#title")
    console.log(title)
}


