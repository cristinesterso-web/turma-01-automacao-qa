import { describe, it, expect, vi } from "vitest";
import { buscarExecucao } from "../atividades/execucoes.js";

describe("buscarExecucao", () => {
  // Testa o caminho de sucesso.
  it("deve retornar uma execução existente", async () => {
    vi.useFakeTimers();

    const promessa = buscarExecucao(1);

     // Avança o tempo da espera simulada.
    vi.advanceTimersByTime(1000);

    await expect(promessa).resolves.toMatchObject({ id: 1 });

    vi.useRealTimers();
  });

  // Testa o caminho de erro.
  it("deve lançar erro quando o id não existe", async () => {
    vi.useFakeTimers();

    const promessa = buscarExecucao(10);

     // Avança o tempo da espera simulada.
    vi.advanceTimersByTime(1000);

    await expect(promessa).rejects.toThrow("Execução não encontrada");

    vi.useRealTimers();
  });
});