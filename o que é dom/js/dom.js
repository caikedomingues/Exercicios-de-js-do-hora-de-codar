/*O que é dom */
/*Document object model;
Uma interface de programação HTML;
Por meio dele temos métodos para acessar a arvore de elementos;
O dom fornece uma cópia do HTMl;
Podemos manipular eventos pelo DOM para afetar o HTML. 
*/

/*Acessando o DOM */

/*Acessar o dom caracteriza-se por identificar um elemento do html 
através de métodos;

Depois podemos manipula-los da forma que quisermos;

Acessar o dom é semelhante as regras de CSS;

Podemos acessar por: tags, ids, classes;
*/

/*Para iniciar o exercicio tentaremos acessar a tag h1 do html*/

/*Isso significa que pegaremos o primeiro elemento h1 */
var titulo = document.getElementsByTagName('h1')[0]

console.log(titulo)

/*Vamos acessar os elementos de lista */
var lis = document.getElementsByTagName('li')
console.log(lis)
/*Também podemos escolher por indices */

 
/*Agora vamos acessar os elementos por id no caso o id está dentro da
 tag <p>, colocamos element e não elements, porque há apenas um elemento */
var paragrafo = document.getElementById('paragrafo')
console.log(paragrafo)

/*Agora vamos acessar por classe */
var itensDaLista = document.getElementsByClassName('item')

console.log(itensDaLista)


