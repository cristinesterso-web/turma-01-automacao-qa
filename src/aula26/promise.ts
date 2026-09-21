import {resolve} from "node:dns";

// function buscarNome(): Promise<string> {
//     return new Promise( (resolve) => {
//         setTimeout(()=> {
//             resolve("Juan");
//         },6000);
//     });
// }

// async function executar (){
//     console.log("inicio do programa....");
//     const nome = await buscarNome();
//     console.log(nome);
//     console.log("fim do programa....")
// }

// executar();

// console.log(typeof Promise)

function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function buscarUsuario(id: number): Promise<string> {
    await delay(5000); //simula chamada de rede
    return `Usuário #${id}`;
}

console.log("Início do programa...");
const nome = await buscarUsuario(42);
console.log(nome); //Usuário #42