const { resolve } = require('path');
const readline = require('readline');
const brain = require('./brainAI');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})




class AIPessoal {
    constructor(name){
        this.name = name;
    }

    async boasVindas(duration)
    {
        await new Promise(resolve => setTimeout(resolve, duration));
    }
    async suaPesquisa(duration){
        await new Promise(resolve => setTimeout(resolve, duration))
        rl.question(`\t O que você gostari de fazer? `, (input_pesquisa) => {
            console.log(`\t\n Iniciando... Buscar ${input_pesquisa}`);
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
            rl.on("line", (input_perguntas) => {
                console.log(`\t\nSua persquisa.... \n${input_perguntas}`)
                if (input_perguntas == "sair") {
                    rl.close()
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
myAI.boasVindas(1000).then( () => {
    myAI.falar();
} )