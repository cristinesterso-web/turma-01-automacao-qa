import {test, describe, expect} from 'vitest'

function login(username: string, password: string): boolean {
    return username === 'rosa' && password === '232425'
}

test('Permitir fazer login com credenciais válidas',() =>{
    const efetuandoLogin = login('rosa', "232425")
    expect(efetuandoLogin).toBe(true)
})
 
describe('Megar login com credenciais inválidas', () => {
    test('Negar login com senha incorreta', () =>  {
        const efetuandoLogin = login('rosa', '242532')
        expect(efetuandoLogin).toBe(false)
     })

     test('Negar login com usuário incorreto', () => {
         const efetuandoLogin = login('Zara', '232425')
         expect(efetuandoLogin).toBe(false)
     })

     test('Negar login com usuário e senha incorretos', () => {
         const efetuandoLogin = login('Zara', '23225')
         expect(efetuandoLogin).toBe(false)
     })


})