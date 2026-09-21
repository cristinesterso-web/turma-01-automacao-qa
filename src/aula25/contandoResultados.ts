const resultados = ["passou", "falhou", "passou", "passou", "falhou"];
let aprovados = 0;
let reprovados = 0;

for(let i = 0; i <resultados.length; i++) {
    if (resultados [i] === "passou") {
        aprovados = aprovados + 1;
    } else { 
        reprovados = reprovados + 1;
    }
}

console.log(`Aprovados; ${aprovados}, Resprovados: ${reprovados}`);