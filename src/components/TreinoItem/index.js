import React from "react";
import ExercicioCardAluno from "../ExercicioCardAluno";

import { Header, Info, Arrow, Content } from "./styled";
import { Container } from "../../styles/GlobalStyles";

export default function TreinoItem({ treino, isOpen, onToggle }) {
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
            <ExercicioCardAluno key={ex.id} exercicio={ex} />
          ))}
        </Content>
      )}
    </Container>
  );
}
