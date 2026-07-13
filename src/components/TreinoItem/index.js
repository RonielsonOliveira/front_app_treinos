import React from "react";
import ExercicioCardAluno from "../ExercicioCardAluno";

import * as S from "./styled";

export default function TreinoItem({
  treino,
  isOpen,
  onToggle,
  onSelectExercicio,
  checkedExercicios = {},
  onCheck,
}) {
  return (
    <S.Container>
      <S.Header isOpen={isOpen} onClick={() => onToggle(treino.id)}>
        <S.Info>
          <h3>{treino.nome}</h3>
          <span>{treino.descricao}</span>
        </S.Info>

        <S.Arrow isOpen={isOpen}>▼</S.Arrow>
      </S.Header>

      {isOpen && (
        <S.Content>
          {treino.Exercicios.map((ex) => (
            <ExercicioCardAluno
              key={ex.id}
              exercicio={ex}
              checked={checkedExercicios[ex.id] || false}
              onChange={() => onCheck(ex.id, treino)}
              onClick={() => onSelectExercicio(ex)}
            />
          ))}
        </S.Content>
      )}
    </S.Container>
  );
}
