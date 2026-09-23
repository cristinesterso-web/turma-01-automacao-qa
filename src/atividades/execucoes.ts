type Execucao = {
  id: number;
  nome: string;
  status: string;
  nota: number;
};

const execucoes: Execucao[] = [
  { id: 1, nome: "Login", status: "aprovado", nota: 10 },
  { id: 2, nome: "Cadastro", status: "reprovado", nota: 5 },
  { id: 3, nome: "Pagamento", status: "aprovado", nota: 8 },
  { id: 4, nome: "Logout", status: "aprovado", nota: 9 },
  { id: 5, nome: "Perfil", status: "reprovado", nota: 6 },
];

// O map percorre o array e pega o nome de cada execução.
execucoes.map((execucao) => execucao.nome);

// O filter seleciona somente as execuções aprovadas.
execucoes.filter((execucao) => execucao.status === "aprovado");

// O reduce soma as notas de todas as execuções.
execucoes.reduce((total, execucao) => total + execucao.nota, 0);

// Função assíncrona que busca uma execução pelo id.
export async function buscarExecucao(id: number): Promise<Execucao> {
  // A Promise simula uma espera de rede.
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Depois da espera, procura a execução pelo id.
  const execucao = execucoes.find((execucao) => execucao.id === id);

  // Se o id não existir, lança um erro.
  if (!execucao) {
    throw new Error("Execução não encontrada");
  }

  // Retorna a execução encontrada.
  return execucao;
}