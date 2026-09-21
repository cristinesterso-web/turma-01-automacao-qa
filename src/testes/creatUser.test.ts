import {expect, test} from 'vitest'

interface User {
    nome: string;
    idade: number;
}

function createUser(nome: string, idade:number): User {
    return {nome, idade}
}

test('Criar um usuário com nome e idade', ()=> {
    const user = createUser('Sophia', 24)

    expect(user).toEqual({nome:'Sophia', idade: 24}) 
    expect(user.nome).toBe('Sophia')
});
