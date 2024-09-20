const readline = require('readline');

class Veiculo {
    constructor(nome, marca, motor) {
        this.nome = nome;
        this.marca = marca;
        this.motor = motor;
    }
    detalhes() {
        return (`Informações do Veículo:\n 
            Nome: ${this.nome}\n
            Marca: ${this.marca}\n
            Motor: ${this.motor}\n`)
    }
}

let carro1 = new Veiculo('Celta', 'Chevrolet', '666');

console.log(carro1.detalhes());

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function criarPessoa() {
    const pessoa = {};

    return new Promise((resolve) => {
        entrada.question("Digite o nome: \n", (nome) => {
            pessoa.nome = nome;
                entrada.question("Digite a idade: \n", (idade) => {
                    pessoa.idade = idade;
                        entrada.question("Digite o email: \n", (email) => {
                            pessoa.email = email;
                            resolve(pessoa);
                        });
                    });
                }); 
            });
}

criarPessoa().then((pessoaCriada) => {
    console.log(pessoaCriada);
    entrada.close();
});