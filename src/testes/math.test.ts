import { toWritable } from 'node:stream/iter';
import {test, describe, expect} from 'vitest'

describe ( 'Calcular raiz quadrada de um número' , () => {
    test('Retornar a raiz quadrada de um número perfeito', ()=>{
        expect(Math.sqrt(4)).toBe(2)
        expect(Math.sqrt(9)).toBe(3)
    });

    test('Retornar NAN se o número for negativo',()=> {
        expect(Math.sqrt(-1)).toBeNaN()
    });

    test('Retornar 0 se for passado um 0', ()=> {
        expect(Math.sqrt(0)).toBe(0)
    });

} )