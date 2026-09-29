import { test, describe, expect } from "vitest";

function classificarIdade(idade: number): string {
    if (idade < 0) {
        throw new Error("Idade inválida");
    }

    if (idade <= 12) {
        return "Criança";
    }

    if (idade <= 17) {
        return "Adolescente";
    }

    if (idade <= 59) {
        return "Adulto";
    }

    return "Idoso";
}

describe('Testes para a função classificarIdade', () => {

    // toThrowError: verifica se a função apresenta um erro
    test('Validar idade negativa', () => {
        expect(() => classificarIdade(-1)).toThrowError("Idade inválida");
    });

    // toBe: verifica o resultado exato
    test('Validar classificação de idade', () => {
        expect(classificarIdade(10)).toBe("Criança");
    });

    // toEqual: compara o resultado esperado
    test('Validar classificação de idade adolescente', () => {
        expect(classificarIdade(15)).toEqual("Adolescente");
    });

    // map + toHaveLength: classifica várias idades e verifica a quantidade de resultados
    test('Validar classificação de várias idades', () => {
        const idades = [12, 17, 59, 60];

        const resultados = idades.map(idade => classificarIdade(idade));

        expect(resultados).toHaveLength(4);
    });

    // toContain: verifica se o resultado contém a classificação esperada
    test('Validar classificação adulta', () => {
        const resultado = classificarIdade(30);

        expect(resultado).toContain("Adulto");
    });
});