import { useEffect, useState } from "react";

export default function useInformacoesTreino({ treino, alunoOrigem }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [alunoId, setAlunoId] = useState(alunoOrigem || "");
  const [diaSemana, setDiaSemana] = useState(1);

  useEffect(() => {
    if (!treino) return;

    setNome(treino.nome);
    setDescricao(treino.descricao);
    setAlunoId(treino.aluno_id || "");
    setDiaSemana(treino.dia_semana ?? 1);
  }, [treino]);

  return {
    nome,
    setNome,

    descricao,
    setDescricao,

    alunoId,
    setAlunoId,

    diaSemana,
    setDiaSemana,
  };
}
