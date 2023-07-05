                       /*
                       Escopo
No JavaScript podemos ter vários escopos;
O global, que é iniciado em toda a aplicação;
E os locais, que podem existir em várias instruções como
as funções.
                       */
    
/*Vamos começar a exemplificar com uma variável global */

var x = 1
var y = 3
console.log(x,y)

/*Agora, supondo que eu crie uma variável dentro de um bloco especifico,
como em uma função por exemplo, éssa variável só funcionara dentro do
bloco em que ela foi criada. */

function teste(){
    var z = 0
    console.log(z)
    /*Caso eu tente acessar a variável x aqui dentro, eu terei sucesso,
    pois, por ser uma variavel global, eu consigo utiliza-la durante
    todo o programa */
    console.log(x)
}
/*Já a variável z, eu não consigo acessar fora da função, já que ela
é uma variável local, sendo assim, só consigo utiliza-la dentro da função
 */
teste()

/*No caso do if, ele não limita a variável, ou seja, as variáveis que
estão no bloco do if são globais */

if(true){
    var p = 1
}


console.log(p)