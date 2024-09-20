
/*
Objetos em JavaScript são o tipo de dados mais importante e formam os blocos de construção do JavaScript moderno. Ao contrário dos tipos de dados primitivos (Número, String, Booleano, Nulo, Indefinido e Símbolo), que contêm um único valor, os objetos podem conter vários valores como propriedades. Isso torna os objetos incrivelmente úteis para agrupar dados e operações relacionadas, levando a um código mais organizado e de fácil manutenção.
*/

var escola = {
    nome: 'Escola municipal Dona Coruja',
    localizacao: 'Chapecó',
    criacao: '1970'
}

var aluno = {
    nome: "",
    localizacao: "",
    idade: 0
}

aluno.nome = 'Jo'
aluno.localizacao = 'Rua Inglaterra'
aluno.idade = 33

//Acessando membros:

function exibirInfo() {
    console.log(`Nome: ${escola.nome}\n`, `Localização: ${escola.localizacao}\n`, `Fundada em: ${escola.criacao}\n`);
}

exibirInfo();

console.log(aluno);