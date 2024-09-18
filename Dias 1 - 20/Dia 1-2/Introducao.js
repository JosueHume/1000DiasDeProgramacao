/* <script>
    console.log("Abrir a tag ~script~ para inserir um código de javascript diretamente em um HTML.");
</script> 
*/

//Para importar um javascript externo, basta usar 
// <script src="javascript.js"> </script>

//----------- Declaração de Variáveis -----------//

let num1 = 50;
let num2 = 50.05;
let str1 = "Geeks";
let str2 = 'Geeks';

let conjuntos = [num1, str2];

let objeto = {
    nome: 'Nome',
    idade: 34
};

//Função básica
function retornarDados() {
    console.log(num1, num2, str1, str2, conjuntos, objeto);
}

//----------- Variáveis e tipo de dados -----------//

var nome = "Jesus";
let idade = 33;
const cidade = "Chapecó"
let ativo = true;
let contador = undefined;
let vazio = null;
let numeroGrande = 123456789012345678901234567890n;

//---------- Variáveis locais e globais ----------//

let variavelGlobal = 'Global';

function testarVariavelGlobalELocal() {
    console.log(variavelGlobal);

    let variavelLocal = 'Local';
    console.log(variavelLocal);
}

testarVariavelGlobalELocal();

{
    let dentroDoBloco = 'Vai dar erro';
    var varDentroDoBloco = 'Não vai dar erro';
}

console.log(varDentroDoBloco);

//------------- Operadores -------------//

// operadores básicos: +, -, *, /, %, **, ++, --, +a, -aa, 

// operadores de atribuições: =, +=, -=, *=, /=, %=, **=, <<=, >>=, &=, |=, ^=

// operadores de comparação: ==, ===, !=, !==, >, <, >=, <=

// operadores de lógica: &&, ||, !

//operador ternário: ? :

//operadores relacionais: in, instanceof 

