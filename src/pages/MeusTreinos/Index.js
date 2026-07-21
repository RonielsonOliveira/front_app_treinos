import React, { useMemo, useState } from "react";

import { Container } from "../../styles/GlobalStyles";

import { EmptyMessage } from "./styled";

import Loading from "../../components/Loading";
import CalendarioSemanal from "../../components/CalendarioSemanal";
import TreinoItem from "../../components/TreinoItem";
import AlunoInfo from "../../components/AlunoInfo";
import ExercicioModal from "../../components/ExercicioModal";
import { ModalTreinoConcluido } from "../../components/ModalConcluido";

import { useMeusTreinos } from "../../hooks/useMeusTreinos";
import { useToggle } from "../../hooks/useToggle";
import { useTreinoConcluido } from "../../hooks/useTreinoConcluido";

import { getDiaAtual } from "./helpers";

export default function MeusTreinos() {
  const { treinos, aluno, isLoading } = useMeusTreinos();

  const { openId, toggle } = useToggle();

  const [exercicioSelecionado, setExercicioSelecionado] = useState(null);

  const [diaSelecionado, setDiaSelecionado] = useState(getDiaAtual());

  const { checkedExercicios, treinoConcluido, handleCheck, fecharModal } =
    useTreinoConcluido(toggle);

  const treinosDoDia = useMemo(() => {
    return treinos.filter(
      (treino) => Number(treino.dia_semana) === Number(diaSelecionado)
    );
  }, [treinos, diaSelecionado]);

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <AlunoInfo aluno={aluno} />

      <CalendarioSemanal
        diaSelecionado={diaSelecionado}
        onChange={setDiaSelecionado}
        treinos={treinos}
      />

      {!treinosDoDia.length && (
        <EmptyMessage>Nenhum treino para este dia.</EmptyMessage>
      )}

      {treinosDoDia.map((treino) => (
        <TreinoItem
          key={treino.id}
          treino={treino}
          isOpen={openId === treino.id}
          onToggle={toggle}
          onSelectExercicio={setExercicioSelecionado}
          checkedExercicios={checkedExercicios}
          onCheck={(idExercicio) => handleCheck(idExercicio, treino, openId)}
        />
      ))}

      <ExercicioModal
        exercicio={exercicioSelecionado}
        onClose={() => setExercicioSelecionado(null)}
      />

      <ModalTreinoConcluido open={treinoConcluido} onClose={fecharModal} />
    </Container>
  );
}
