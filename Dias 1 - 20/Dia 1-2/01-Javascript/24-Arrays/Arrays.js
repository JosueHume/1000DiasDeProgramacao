

// Estrutura de dados usada para armazenar múltiplos valores em uma única variável. Um array pode conter qualquer tipo de dado, como números, strings, objetos, ou até outros arrays (arrays multidimensionais). 

const frutas = ["Maçã", "Uva", "Pêra"];
const numeros = new Array(1, 2, 3, 4);
const vazio = new Array(5);

// .push() Adiciona elementos ao final do array
frutas.push("Banana");

// .pop() Remove o último elemento do Array
frutas.pop();

// .unshift() Adiciona elementos no inicio do array
frutas.unshift("Laranja");

// .shift() Remove o primeiro elemento do array
frutas.shift();

// .length Retorna o número de elementos no array
console.log(frutas.length);

// .indexOf() Retorna o indice do primeiro elemento correspondente
console.log(frutas.indexOf("Laranja")); // -1

// .splice() Remove, substitui ou adiciona elementos no array
frutas.splice(1, 1); // Remove
// ou
frutas.splice(1, 1, "Laranja"); //Substitui

// .slice() Retorna uma cópia de uma parte do array
const algumasFrutas = frutas.slice(1, 3); // ["Banana", "Uva"]

// .concat() Combina arrays em um novo array
const frutas2 = ["Uva", "Laranja"];
const cestaDeFrutas = frutas.concat(frutas2);

// .join() Junta todos os elementos de um array
const stringFrutas = frutas.join(", ");
// ["Maçã", "Uva", "Pêra"];

// .forEach() Executa uma função em cada elemento do array
frutas.forEach((fruta, index) => {
    console.log(`${index}: ${fruta}`);
  });

// .filter() Cria um novo array com os elementos que passam em um teste
const nums = [1, 2, 3, 4, 5];
const pares = nums.filter(numero => numero % 2 === 0);
console.log(pares);

// .isArray() Verificando se é um array
console.log(Array.isArray(nums))

// .toString() Convertendo para string
console.log(nums.toString());

// Verificando o tipo de Array
console.log(typeof nums);