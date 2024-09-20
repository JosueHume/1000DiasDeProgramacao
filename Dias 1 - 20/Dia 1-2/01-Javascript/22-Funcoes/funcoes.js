
// Sintaxe básica de uma função

//Função nomeada
function funcaoBasica(parametro) {}

//Função anônima
let funcaoAnonima = function (parametro) {}

//Função aninhada
function funcao(parametro) {
    function funcaoAninhada() {}

    return funcaoAninhada();
}

// Expressão de função imediatamente invocada
let mensagem = (function() {
    return "Olá mundo!";
}) ();
console.log(mensagem);