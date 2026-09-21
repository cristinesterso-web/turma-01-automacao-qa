const statusCode : number = 500;

if (statusCode === 200) {
    console.log("OK: recurso retornado");
} else if (statusCode === 201) {
    console.log("Created: recurso criado");
} else {
    console.log(`Status inesperado: ${statusCode}`);
}

//Operador ternário: decisão curta em uma linha só
const resultado = statusCode < 400 ? "passou" : "falhou" ;
console.log (resultado) ; //passou'