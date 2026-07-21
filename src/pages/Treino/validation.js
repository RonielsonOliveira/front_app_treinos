import { toast } from "react-toastify";

export function validateTreino({
  nome,
  descricao,
  exerciciosSelecionados,
  alunoId,
  alunoOrigem,
}) {
  if (nome.trim().length < 3) {
    toast.error("Nome precisa ter pelo menos 3 caracteres");
    return false;
  }

  if (descricao.trim().length < 3) {
    toast.error("Descrição precisa ter pelo menos 3 caracteres");
    return false;
  }

  // Só exige aluno quando o treino NÃO foi aberto a partir de um aluno
  if (!alunoOrigem && !alunoId) {
    toast.error("Selecione um aluno");
    return false;
  }

  if (!exerciciosSelecionados.length) {
    toast.error("Selecione pelo menos um exercício");
    return false;
  }

  const invalido = exerciciosSelecionados.some(
    (ex) => Number(ex.numerodeSeries) <= 0 || Number(ex.numerodeRepeticoes) <= 0
  );

  if (invalido) {
    toast.error("Séries e repetições devem ser maiores que zero");
    return false;
  }

  return true;
}
