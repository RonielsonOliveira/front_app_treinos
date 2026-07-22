import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import * as S from "./styled";
import { Container } from "../../styles/GlobalStyles";

import useTreinoData from "../../hooks/useTreinoData";
import useExerciciosTreino from "./hooks/useExerciciosTreino";
import useInformacoesTreino from "./hooks/useInformacoesTreino";

import { salvarTreino } from "./actions";
import { mapTreinoPayload } from "./mapper";
import { validateTreino } from "./validation";

import Loading from "../../components/Loading";
import ModalExercicio from "../../components/ModalExercicio";
import ExerciciosTreino from "./components/ExerciciosTreino";
import InformacoesTreino from "./components/InformacoesTreino";
import TreinoHeader from "./components/TreinoHeader";
export default function Treino() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const alunoOrigem = location.state?.alunoId;
  const treinoModelo = location.state?.treinoModelo;
  const { exercicios, alunos, treino, isLoading } = useTreinoData(id);

  const [isSaving, setIsSaving] = useState(false);

  const {
    busca,
    setBusca,
    modalOpen,
    exercicioAtual,
    series,
    setSeries,
    repeticoes,
    setRepeticoes,
    exerciciosSelecionados,
    exerciciosMap,
    exerciciosFiltrados,
    abrirModal,
    fecharModal,
    confirmarExercicio,
    removerExercicio,
  } = useExerciciosTreino({
    exercicios,
    treino,
    treinoModelo,
  });
  const {
    nome,
    setNome,
    descricao,
    setDescricao,
    alunoId,
    setAlunoId,
    diaSemana,
    setDiaSemana,
  } = useInformacoesTreino({
    treino,
    alunoOrigem,
    treinoModelo,
  });

  const alunoSelecionado = alunos.find(
    (aluno) => Number(aluno.id) === Number(alunoId)
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    const valid = validateTreino({
      nome,
      descricao,
      alunoId,
      alunoOrigem,
      exerciciosSelecionados,
    });
    if (!valid) return;
    const payload = mapTreinoPayload({
      nome,
      descricao,
      alunoId,
      diaSemana,
      exerciciosSelecionados,
    });
    await salvarTreino({
      id,
      payload,
      alunoOrigem,
      navigate,
      setIsSaving,
    });
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <TreinoHeader id={id} alunoSelecionado={alunoSelecionado} />

      <S.Form onSubmit={handleSubmit}>
        <InformacoesTreino
          nome={nome}
          setNome={setNome}
          descricao={descricao}
          setDescricao={setDescricao}
          diaSemana={diaSemana}
          setDiaSemana={setDiaSemana}
          alunoOrigem={alunoOrigem}
          alunoId={alunoId}
          setAlunoId={setAlunoId}
          alunos={alunos}
        />
        <ExerciciosTreino
          busca={busca}
          setBusca={setBusca}
          exerciciosFiltrados={exerciciosFiltrados}
          exerciciosMap={exerciciosMap}
          abrirModal={abrirModal}
        />
        <S.SaveButton type="submit" disabled={isSaving}>
          {isSaving ? "Salvando..." : "Salvar alterações"}
        </S.SaveButton>
      </S.Form>
      <ModalExercicio
        open={modalOpen}
        exercicio={exercicioAtual}
        series={series}
        repeticoes={repeticoes}
        selecionado={!!exerciciosMap[exercicioAtual?.id]}
        onSeriesChange={setSeries}
        onRepeticoesChange={setRepeticoes}
        onCancel={fecharModal}
        onConfirm={confirmarExercicio}
        onRemove={removerExercicio}
      />
    </Container>
  );
}
