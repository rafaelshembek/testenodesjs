const { resolve } = require('path');
const readline = require('readline');
const brain = require('./brainAI.json');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// console.log(brain);

class AIPessoal {
    constructor(name){
        this.name = name;
    }
    // função inicial de boas vindas
    async boasVindas(duration)
    {
        await new Promise(resolve => setTimeout(resolve, duration));
    }
    // função que iniciar a buscar da palavra chave
    async suaPesquisa(duration){
        await new Promise(resolve => setTimeout(resolve, duration))
        rl.question(`\t Entre com a Palavra Chave? `, (input_pesquisa) => {
            do {
                if(input_pesquisa == "programador"){
                    console.log(brain.Programador);
                }else if(input_pesquisa == "matador"){
                    console.table(brain.matador);
                }else if(input_pesquisa == "cantora")
                {
                    console.table(brain.cantora);
                }else{
                    console.log(`\tInformações errado porfavo tente novamento!...\n`)
                    myAI.suaPesquisa(1000);
                }
            } while (input_pesquisa == "sair");
        })
    }
}

class AI extends AIPessoal{
    constructor(name)
    {
        super(name);
    }

    falar(){
        rl.question(`\tOla como se chamar? `, (input_name) => {
            console.log(`\tOla ${input_name} tudo bem?`)
            console.log(`\tO que gostaria de fazer? ${input_name}`);
            console.log(`\tInformações de sua busca...`);
            rl.on("line", (input_pesquisa) => {
                console.log(`\t\nSua persquisa.... \n${input_pesquisa}`);
                if(input_pesquisa == "sair"){
                    rl.close();
                }else{
                    myAI.suaPesquisa(2000);
                }
            })
        })
       
        // rl.on("line", (input_perguntas) => {
        //     console.log(`Sua persquisa ${input_perguntas}`)
        //     if(input_perguntas == "sair")
        //     {
        //         rl.close()
        //     }
        // })
    }
}

const myAI = new AI("Rafael");
myAI.boasVindas(2000).then( () => {
    myAI.falar();
} )