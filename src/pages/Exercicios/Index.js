import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "../../styles/GlobalStyles";

import { Header, Title, NewButton, CardsContainer } from "./styled";

import Loading from "../../components/Loading";
import ExercicioCard from "../../components/ExerciciosCard";
import ModalConfirmacao from "../../components/ModalConfirmation";

import useExercicios from "../../hooks/useExercicios";

import { excluirExercicio } from "./actions";

export default function Exercicios() {
  const navigate = useNavigate();

  const { exercicios, setExercicios, isLoading, setIsLoading } =
    useExercicios();

  const [exercicioExcluir, setExercicioExcluir] = useState(null);

  const confirmarExclusao = async () => {
    await excluirExercicio(exercicioExcluir.id, setExercicios, setIsLoading);

    setExercicioExcluir(null);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Header>
        <Title>Exercícios</Title>

        <NewButton onClick={() => navigate("/exercicio")}>
          + Novo Exercício
        </NewButton>
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
