/* Tudo é objeto */

/*Como você pode perceber muitos tipos de dados tem métodos e propriedades

podemos criar também os nossos objetos com propriedades e métodos para
auxiliar nos nossos programas.
*/

/*Agora vamos criar um objeto que possui métodos */

let pessoa = {
    nome: "Matheus",
    idade: 29,
    /*Agora vamos criar o método do objeto */
    falar: function(){
        console.log("Olá, tudo bem?")
    },

    soma: function(a, b){
        return a + b
    }
}

/*Agora vamos começar acessar o nosso objeto */

console.log(pessoa.nome)
console.log(pessoa.falar())
var soma = pessoa.soma(2,2)
console.log(soma)