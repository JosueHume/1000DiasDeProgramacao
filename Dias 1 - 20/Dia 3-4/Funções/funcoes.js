const readline = require('readline');

const entrada = readline.createInterface({
   input: process.stdin,
   output: process.stdout 
});


// Calculadora simples
function calculadora(num1, num2, expressao) {

    menu();

    switch(expressao) {
        case 1:
            somar(num1, num2);
        case 2:
            subtrair(num1, num2);
        case 3:
            multiplicar(num1, num2); 
        case 4:
            dividir(num1, num2);  
        case 5:
            menu();          
        default:
            erro();
            menu();
    }

    function menu(opcao) {
        console.log('Selecione uma opção:');
        console.log('1 - Somar');
        console.log('2 - Subtrair');
        console.log('3 - Multiplicar');
        console.log('4 - Dividir');
        console.log('5 - Sair');
    }

    function somar(num1, num2) {
        const resultado = num1 + num2;
        console.log(`Resultado: ${resultado}`);
    }
    
    function subtrair(num1, num2) {
        const resultado = num1 - num2;
        console.log(`Resultado: ${resultado}`);
    }
    
    function multiplicar(num1, num2) {
        const resultado = num1 * num2;
        console.log(`Resultado: ${resultado}`);
    }
    
    function dividir(num1, num2) {
        const resultado = num1 / num2;
        console.log(`Resultado: ${resultado}`);
    }

    function erro() {
        console.log('Expressão inexistente.\n');
    }
}

calculadora().then((resultado) => {
    console.log(resultado);
    entrada.close();
});


// Manipulação de Strings

// Gerador de números aleatórios

// Filtro de Lista

// Contados de Palavras

// Calculadora de Fatorial

// Jogo da Adivinhação

