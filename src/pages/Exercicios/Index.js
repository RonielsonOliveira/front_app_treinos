import React, { useState } from "react";

import { Container } from "../../styles/GlobalStyles";

import { Header, Title, CardsContainer } from "./styled";

import Loading from "../../components/Loading";
import ExercicioCard from "../../components/ExerciciosCard";

import useExercicios from "../../hooks/useExercicios";

import { excluirExercicio } from "./actions";
import ModalConfirmacao from "../../components/ModalConfirmation";

export default function Exercicios() {
  const { exercicios, setExercicios, isLoading, setIsLoading } =
    useExercicios();
  const confirmarExclusao = async () => {
    await excluirExercicio(exercicioExcluir.id, setExercicios, setIsLoading);

    setExercicioExcluir(null);
  };
  const [exercicioExcluir, setExercicioExcluir] = useState(null);
  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Header>
        <Title>Exercícios</Title>
      </Header>

      <CardsContainer>
        {exercicios.map((exercicio) => (
          <ExercicioCard
            key={exercicio.id}
            exercicio={exercicio}
            onDelete={() => setExercicioExcluir(exercicio)}
          />
        ))}
      </CardsContainer>
      <ModalConfirmacao
        open={!!exercicioExcluir}
        titulo="Excluir exercício"
        mensagem={`Deseja realmente excluir o exercício "${exercicioExcluir?.nome}"? Essa ação não poderá ser desfeita.`}
        onCancel={() => setExercicioExcluir(null)}
        onConfirm={confirmarExclusao}
      />
    </Container>
  );
}
