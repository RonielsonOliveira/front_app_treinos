import React from "react";
import * as S from "../../styled";

import ExercicioListItem from "../../../../components/ExercicioListItem";

export default function ExerciciosTreino({
  busca,
  setBusca,
  exerciciosFiltrados,
  exerciciosMap,
  abrirModal,
}) {
  return (
    <S.Section>
      <S.SectionTitle>Exercícios</S.SectionTitle>

      <S.Search
        id="buscar"
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar exercício..."
      />

      <S.ExercicioGrid>
        {exerciciosFiltrados.map((exercicio) => (
          <ExercicioListItem
            key={exercicio.id}
            exercicio={exercicio}
            selecionado={!!exerciciosMap[exercicio.id]}
            onClick={() => abrirModal(exercicio)}
          />
        ))}

        {exerciciosFiltrados.length === 0 && (
          <S.Empty>Nenhum exercício encontrado.</S.Empty>
        )}
      </S.ExercicioGrid>
    </S.Section>
  );
}
