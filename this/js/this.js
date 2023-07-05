/* A instrução this */

/*
Fora de escopos locais o this sempre se refere ao objeto global window;
Em objetos o this vai se referir a instância e pode acessar suas 
propriedades;
*/

/*Window: objeto global da apliacação do javascript */

/*Para começar vamos recriar o objeto do exercicio anterior */

let pessoa = {
    nome:"Caike",
    idade: 29,
    falar: function() {
        console.log("Olá, tudo bem?")
    },

    /*Também podemos concatenar o valor do this em um outro valor */
    dizerNome: function(){
        console.log("O meu nome é " + this.nome)
    },
    /*Agora vamos tentar alterar uma propriedade */
    aniversario: function(){
        this.idade += 1
    },

    saudacao: function(){
        return "Sr. " + this.nome
    }
}


pessoa.aniversario()
console.log(pessoa.idade)

console.log(pessoa.dizerNome())

console.log(this)
/*Como o this representa o window objeto global, podemos acessar alguns 
elementos que estão no código sem que eles esteja em um array */

var teste = 5

console.log(this.teste)

console.log(pessoa.saudacao())
