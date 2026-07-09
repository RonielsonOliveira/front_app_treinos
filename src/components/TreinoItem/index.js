import React from "react";
import ExercicioCardAluno from "../ExercicioCardAluno";

import { Header, Info, Arrow, Content, ExerciciosWrapper } from "./styled";
import { Container } from "../../styles/GlobalStyles";

export default function TreinoItem({
  treino,
  isOpen,
  onToggle,
  onSelectExercicio,
  checkedExercicios = {},
  onCheck,
}) {
  return (
    <Container>
      <Header onClick={() => onToggle(treino.id)}>
        <Info>
          <h3>{treino.nome}</h3>
          <span>{treino.descricao}</span>
        </Info>

        <Arrow isOpen={isOpen}>▼</Arrow>
      </Header>

      {isOpen && (
        <Content>
          {treino.Exercicios.map((ex) => (
            <ExercicioCardAluno
              key={ex.id}
              exercicio={ex}
              checked={checkedExercicios[ex.id] || false}
              onChange={() => onCheck(ex.id, treino)} 
              onClick={() => onSelectExercicio(ex)}
            />
          ))}
        </Content>
      )}
    </Container>
  );
}
