/*programa que irá mostrar ao usuário se ele é ou não obrigado  a votar
                                       Tabela
menor que 16: não pode votar
entre 16 e menor que 18: voto opcional
18 ou mais: voto obrigatório
70 ou mais: voto opcional
*/

var idade = 70

if(idade >= 18 && idade < 70){
    console.log("Voto Obrigatório")
}

if(idade >= 16 && idade < 18 ){
    console.log("Voto opcional")
}

if(idade < 16 ){
    console.log("não pode votar")
}

if(idade >= 70){
    console.log("Voto opcional")
}