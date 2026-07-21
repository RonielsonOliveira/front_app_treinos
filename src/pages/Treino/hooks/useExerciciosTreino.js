import { useEffect, useMemo, useState } from "react";

export default function useExerciciosTreino({ exercicios, treino }) {
  const [busca, setBusca] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const [exercicioAtual, setExercicioAtual] = useState(null);

  const [series, setSeries] = useState(3);

  const [repeticoes, setRepeticoes] = useState(12);

  const [exerciciosSelecionados, setExerciciosSelecionados] = useState([]);
  const fecharModal = () => setModalOpen(false);
  useEffect(() => {
    if (!treino) return;

    const exerciciosComSeries =
      treino.Exercicios?.map((ex) => ({
        id: ex.id,
        numerodeSeries: ex.TreinoExercicio?.numerodeSeries ?? 3,
        numerodeRepeticoes: ex.TreinoExercicio?.numerodeRepeticoes ?? 10,
      })) || [];

    setExerciciosSelecionados(exerciciosComSeries);
  }, [treino]);

  const removerAcentos = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const exerciciosMap = useMemo(() => {
    return Object.fromEntries(exerciciosSelecionados.map((e) => [e.id, e]));
  }, [exerciciosSelecionados]);

  const exerciciosFiltrados = useMemo(() => {
    if (!busca.trim()) return exercicios;

    const buscaNormalizada = removerAcentos(busca);

    return exercicios.filter((ex) =>
      removerAcentos(ex.descricao).includes(buscaNormalizada)
    );
  }, [busca, exercicios]);

  const abrirModal = (exercicio) => {
    const existente = exerciciosSelecionados.find((e) => e.id === exercicio.id);

    setExercicioAtual(exercicio);

    setSeries(existente?.numerodeSeries || 3);

    setRepeticoes(existente?.numerodeRepeticoes || 12);

    setModalOpen(true);
  };

  const confirmarExercicio = () => {
    setExerciciosSelecionados((prev) => {
      const existe = prev.find((e) => e.id === exercicioAtual.id);

      if (existe) {
        return prev.map((e) =>
          e.id === exercicioAtual.id
            ? {
                ...e,
                numerodeSeries: Number(series),
                numerodeRepeticoes: Number(repeticoes),
              }
            : e
        );
      }

      return [
        ...prev,
        {
          id: exercicioAtual.id,
          numerodeSeries: Number(series),
          numerodeRepeticoes: Number(repeticoes),
        },
      ];
    });

    setModalOpen(false);
  };

  const removerExercicio = () => {
    setExerciciosSelecionados((prev) =>
      prev.filter((e) => e.id !== exercicioAtual.id)
    );

    setModalOpen(false);
  };

  return {
    busca,
    setBusca,

    modalOpen,

    exercicioAtual,

    series,
    setSeries,

    repeticoes,
    setRepeticoes,

    exerciciosSelecionados,

    exerciciosMap,

    exerciciosFiltrados,

    abrirModal,
    fecharModal,

    confirmarExercicio,

    removerExercicio,
  };
}
