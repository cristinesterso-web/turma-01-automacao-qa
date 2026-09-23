// @ts-expect-error Vitest is provided by the test runner at runtime.
import { describe, it, expect, vi } from "vitest";
import { buscarExecucao } from "../atividades/execucoes.js";

describe("buscarExecucao", () => {
  it("deve retornar uma execução existente", async () => {
    vi.useFakeTimers();

    const promessa = buscarExecucao(1);

    vi.advanceTimersByTime(1000);

    await expect(promessa).resolves.toMatchObject({ id: 1 });

    vi.useRealTimers();
  });

  it("deve lançar erro quando o id não existe", async () => {
    vi.useFakeTimers();

    const promessa = buscarExecucao(10);

    vi.advanceTimersByTime(1000);

    await expect(promessa).rejects.toThrow("Execução não encontrada");

    vi.useRealTimers();
  });
});