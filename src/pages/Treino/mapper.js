export function mapTreinoPayload({
  nome,
  descricao,
  alunoId,
  diaSemana,
  exerciciosSelecionados,
}) {
  return {
    nome,
    descricao,
    aluno_id: alunoId ? Number(alunoId) : null,
    dia_semana: Number(diaSemana),
    exercicios: exerciciosSelecionados.map((ex) => ({
      id: ex.id,
      numerodeSeries: Number(ex.numerodeSeries),
      numerodeRepeticoes: Number(ex.numerodeRepeticoes),
    })),
  };
}
