import { React, useState } from "react";

import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";
import { Title, TreinoCard } from "./styled";

import { useMeusTreinos } from "../../hooks/useMeusTreinos";
import { useToggle } from "../../hooks/useToggle";

import TreinoItem from "../../components/TreinoItem";
import { ExercicioModal } from "../../components/ExercicioModal";
import { ModalTreinoConcluido } from "../../components/ModalConcluido";
import CalendarioSemanal from "../../components/CalendarioSemanal";
import AlunoInfo from "../../components/AlunoInfo";

export default function MeusTreinos() {
  const { treinos, aluno, isLoading } = useMeusTreinos();
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
  const getDiaSemana = () => {
    const dia = new Date().getDay();

    if (dia === 0) return 7; // domingo

    return dia;
  };

  const [diaSelecionado, setDiaSelecionado] = useState(getDiaSemana());
  const treinosDoDia = treinos.filter(
    (treino) => Number(treino.dia_semana) === Number(diaSelecionado)
  );
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <AlunoInfo aluno={aluno} />
      <Title>Meus Treinos</Title>
      <CalendarioSemanal
        diaSelecionado={diaSelecionado}
        onChange={setDiaSelecionado}
        treinos={treinos}
      />
      {treinosDoDia.length === 0 && (
        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginTop: 20,
          }}
        >
          Nenhum treino para este dia.
        </p>
      )}

      {treinosDoDia.map((treino) => (
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
