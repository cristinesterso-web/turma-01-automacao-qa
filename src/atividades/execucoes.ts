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

execucoes.map((execucao) => execucao.nome);

execucoes.filter((execucao) => execucao.status === "aprovado");

execucoes.reduce((total, execucao) => total + execucao.nota, 0);

export async function buscarExecucao(id: number): Promise<Execucao> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const execucao = execucoes.find((execucao) => execucao.id === id);

  if (!execucao) {
    throw new Error("Execução não encontrada");
  }

  return execucao;
}