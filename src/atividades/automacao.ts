import PromptSync from "prompt-sync";

const prompt = PromptSync();

let automatizaveis: number = 0;
let naoAutomatizaveis: number = 0;

for(let i = 1; i<=5; i++) {
    const cenario: string =prompt(`Digite o ${i}o cenário : `);
    const resposta: string = prompt(`É automatizavél? (sim/não) :?`).toLowerCase();

    

    if(resposta === "sim") {
        console.log(`${cenario} -> Automatizar`);
        automatizaveis++
        } else if(resposta === "não" || resposta === "nao") {
            console.log(`${cenario}-> Não-Automatiar`);
            naoAutomatizaveis++
        } else {
            console.log("Ocorreu um erro")
        }
}

console.log(`Total de cenários automatizaveis: ${automatizaveis}`);
console.log(`Total de cenários não automatizaveis: ${naoAutomatizaveis}`);

