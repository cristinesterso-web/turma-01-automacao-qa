import { constants } from "node:buffer";

type CasoDeTeste = {
    id: number;
    titulo: string;
    descricao: string;
    automatizado: boolean;
};

function criarCasoDeTeste(
    id: number, titulo: string, descricao: string, automatizado: boolean
): CasoDeTeste {
    return {
        id, titulo, descricao, automatizado
    };
};

function automatizado(caso: CasoDeTeste): boolean {
    return caso.automatizado;
};

const primeiroCaso = criarCasoDeTeste(
    1, "Login com dados válidos", "Verificar se o usuário consegue efetuar login com dados válidos.", true
);
const segundoCaso = criarCasoDeTeste(
    2, "Login com senha inválida", "Verificar se o sistema impede o login com senha inválida.", false
);
console.log(automatizado(primeiroCaso));
console.log(automatizado(segundoCaso));

const casoComErro = criarCasoDeTeste(
    1, "Teste", "Descrição do teste", true
);
