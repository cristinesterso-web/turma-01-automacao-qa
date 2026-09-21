//TYPE
type Pessoa = {nome:string; idade:number};

function criarPessoa(nome:string, idade:number): Pessoa {
    return{nome, idade};
}

const p = criarPessoa("Ester", 19);
console.log(p)

const p1 = criarPessoa("Ronald", 22)
console.log(p1)

type Produto = {nome:string, preco:number, estoque:number};

function criarProduto (nome:string, preco:number, estoque:number): Produto {
    return{nome, preco, estoque}
}

const produto = criarProduto("Teclado com led", 150, 59)
console.log(produto);