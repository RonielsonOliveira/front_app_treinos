import { React, useState } from "react";

import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";
import { Title, TreinoCard } from "./styled";

import { useMeusTreinos } from "../../hooks/useMeusTreinos";
import { useToggle } from "../../hooks/useToggle";

import TreinoItem from "../../components/TreinoItem";
import { ExercicioModal } from "../../components/ExercicioModal";
import { ModalTreinoConcluido } from "../../components/ModalConcluido";

export default function MeusTreinos() {
  const { treinos, isLoading } = useMeusTreinos();
  const { openId, toggle } = useToggle();
  const [exercicioSelecionado, setExercicioSelecionado] = useState(null);
  const [checkedExercicios, setCheckedExercicios] = useState({});
  const [treinoConcluido, setTreinoConcluido] = useState(false);
  const handleCheck = (exercicioId, treino) => {
    setCheckedExercicios((prev) => {
      const updated = {
        ...prev,
        [exercicioId]: !prev[exercicioId],
      };
      const closeTreino = () => {
        toggle(openId);
      };
      const todosMarcados = treino.Exercicios.every((ex) => updated[ex.id]);

      if (todosMarcados) {
        setTreinoConcluido(true);
        closeTreino();
      }

      return updated;
    });
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Meus Treinos</Title>

      {treinos.length === 0 && <p>Você ainda não possui treinos.</p>}

      {treinos.map((treino) => (
        <TreinoItem
          key={treino.id}
          treino={treino}
          isOpen={openId === treino.id}
          onToggle={toggle}
          onSelectExercicio={setExercicioSelecionado}
          checkedExercicios={checkedExercicios}
          onCheck={handleCheck}
        />
      ))}

      <ExercicioModal
        exercicio={exercicioSelecionado}
        onClose={() => setExercicioSelecionado(null)}
      />

      <ModalTreinoConcluido
        open={treinoConcluido}
        onClose={() => {
          setTreinoConcluido(false);
          setCheckedExercicios({});
        }}
      />
    </Container>
  );
}
