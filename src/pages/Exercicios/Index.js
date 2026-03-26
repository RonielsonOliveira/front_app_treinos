import React from "react";
import { Container } from "../../styles/GlobalStyles";

import { Title, Header, CardsContainer } from "./styled";

import Loading from "../../components/Loading";
import ExercicioCard from "../../components/ExerciciosCard";

import useExercicios from "../../hooks/useExercicios";
import { deleteExercicio } from "../../services/exerciciosService";

import { toast } from "react-toastify";

export default function Exercicios() {
  const { exercicios, setExercicios, isLoading, setIsLoading } =
    useExercicios();

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir este exercício?")) return;

    try {
      setIsLoading(true);

      await deleteExercicio(id);

      setExercicios((prev) => prev.filter((ex) => ex.id !== id));

      toast.success("Exercício excluído!");
    } catch {
      toast.error("Erro ao excluir exercício");
    } finally {
      setIsLoading(false);
    }
  };

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
            onDelete={handleDelete}
          />
        ))}
      </CardsContainer>
    </Container>
  );
}
