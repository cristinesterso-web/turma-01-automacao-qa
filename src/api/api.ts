interface Postagem {
    id: number;
    title: string;
    body: string;
}

//GET: buscar postagem
async function buscarPostagem(id: number): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    console.log('STATUS:')
    console.log(res.status)

    const resGet = await res.json() as Promise<Postagem>;
    return resGet;


    // const get = await buscarPostagem(77);
    // console.log(get)
}

//POST: Cria uma nova postagem
async function criarPostagem(): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'My primeira postagem',
            body: 'Aqui vai o corpo da postagem',
            userId: 3
        }),
    });

    console.log('STATUS:')
    console.log(res.status)

    const resPost = await res.json() as Promise<Postagem>;
    return resPost
}

//PUT: ATUALIZA UMA POSTAGEM EXISTENTE
async function atualizarPostagemCompleta(id: number): Promise<Postagem> {
    const corpoEnviado = {
        title: 'Atualização da minha primeira postagem',
        body: 'Aqui tem tem um novo corpo da postagem',
        userId: 4
    }

    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpoEnviado),
    });

    console.log('corpo enviado:');
    console.log(corpoEnviado);

    console.log('STATUS:')
    console.log(res.status)

    console.log('corpo recebido:')
    const resPut = await res.json() as Promise<Postagem>;
    return resPut
}

async function deletar(id: number): Promise<void> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    });
    console.log('STATUS:')
    console.log(res.status)


}
//PATCH:atualiza apenas um campo da postagem existente
async function atualizarCampo(id: number): Promise<Postagem> {
    const corpoEnviado = {
        title: 'Novo Título'
    }

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpoEnviado)
    });

    console.log('corpo enviado:');
    console.log(corpoEnviado);

    console.log('STATUS:')
    console.log(res.status)

    const resPatch = await res.json() as Promise<Postagem>;
    return resPatch
}
const patch = await atualizarCampo(56);
console.log(patch.title)
console.log(patch)
// const put = await atualizarPostagemCompleta(77);
// console.log(put)

// const post = await criarPostagem();
// console.log(post)


