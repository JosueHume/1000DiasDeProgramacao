

// .asign();
// Copia os valores e propriedades de um ou mais fontes de objeto para o objeto alvo

const informacao = { texto: 'Qualquer coisa', texto1: 'Outra coisa' };

const nova_informacao = Object.assign({},  informacao);

console.log(nova_informacao);

// .defineProperty()
// Define uma nova propriedade diretamente em um objeto e retorna o objeto.

const geek = {};
Object.defineProperty(geek, 'Neo', {
    value: '',
    writable: true
});

geek.Neo = 'Nome';

console.log(geek.Neo);

// .defineProperties()
// Define um objeto novo ou modifica as propriedades existentes e retorna o objeto.

const geek1 = {};
Object.defineProperties(geek1, {
    nome: {
        value: "Genérico",
        writable: true
    },
    idade: {
        value: 0,
        writable: true
    }
});

geek1.nome = 'Mudou';
geek1.idade = 1;

console.log(geek1.nome, geek1.idade);

// .entries()
// Retorna uma matriz que consiste em pares de propriedades [chave, valor] enumeráveis ​​do objeto.

const matrix = { 0: '0', 1: '1', 2: '2'};

console.log(Object.entries(matrix)[2]);

// .freeze()
// Existe uma função para 'congelar' um objeto ou propriedades dele. O objeto é completamente congelado, o que impede qualquer tipo de alteração, incluindo adição, remoção e modificação das propriedades.

const agua = { agua: 'Congelada' };
const congelar = Object.freeze(agua);
congelar.agua = 'Já está congelada';
console.log(congelar.agua);

// .fromEntries()
// Cria um novo objeto com propriedades de uma lista dada

const map = new Map([ ['grande', 'pequeno'], [1, 0]]);
const pin = Object.fromEntries(map);
console.log(pin);

// .getOwnPropertyDescriptor()
// Retorna um descritor de propriedade para a propriedade própria de um determinado objeto.

const teste1 = {
    prop1: "Propriedade"
}

const descritor1 = Object.getOwnPropertyDescriptor(teste1, 'prop1');

console.log(descritor1.enumerable);
console.log(descritor1.value);

// .getOwnPropertyNames()	
// Retorna todas as propriedades que estão presente um dado objeto

const dadoObjeto = {
    nome: 'Nome',
    endereco: 'Endereço',
    telefone: 'Telefone'
}

console.log(Object.getOwnPropertyNames(dadoObjeto));

// .hasOwn()
// Determina se a propriedade informada existe ou não

let detalhes = {
    nome: 'Raj',
    curso: 'ADS',
    site: 'www.olheirasdeprogramador.com.br'
};

console.log('Exists?', Object.hasOwn(detalhes, 'site'));

// .Object.is()
// Determina se dois valores são iguais ou não. 

console.log('Equals?', Object.is('geek', 'nerd'));

// .isExtensible()
// Determina se um objeto é extensível. Por padrão os objetos são extensíveis.

const extensivel = {};
console.log('Extensível? ', Object.isExtensible(extensivel));

// .isFrozen()
// Determina se um objeto está congelado ou não

console.log('Congelado?', Object.isFrozen(congelar));

// .isSealed()
// Determina se um objeto está selado ou não

console.log('Selado?', Object.isSealed(congelar));

// .keys()
// É usada para retornar um array iterável contendo as chaves (ou nomes das propriedades) de um objeto. 

const pokemon = {
    name: "Hydrapple",
    type: "Água",
    hp: 100
  };
  
  const keys = Object.keys(pokemon);
  console.log(keys);  

// .preventExtensions()
// É usado para impedir que novas propriedades sejam adicionadas a um objeto. No entanto, as propriedades existentes ainda podem ser modificadas ou removidas.

const digimon = {
    name: "Agumon",
    type: "Fogo",
    hp: 100
  };

Object.preventExtensions(digimon);

// .seal()
// É usado para selar um objeto, o que significa que ele impede tanto a adição quanto a remoção de propriedades do objeto. No entanto, as propriedades existentes ainda podem ser modificadas, desde que não sejam non-writable (não graváveis).

Object.seal(digimon);

// .toLocaleString()
// É usado para converter um número, data ou objeto em uma string, levando em consideração a localização (idioma, convenções de formatação) e as configurações regionais específicas. Ele é muito útil quando você deseja exibir números ou datas no formato apropriado para um determinado idioma ou país.

const num = 123456789.89;
console.log(num.toLocaleString());

const dataAtual = new Date();
console.log(dataAtual.toLocaleString());

// .values()
// É usado para retornar um array contendo os valores das propriedades de um objeto. Ele percorre o objeto e coleta todos os valores de suas propriedades próprias (não as herdadas), sem incluir propriedades do protótipo.

console.log(Object.values(pokemon));