import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Container } from "../../styles/GlobalStyles";
import { ExercicioGrid, Form, Select, Title } from "./styled";

import Loading from "../../components/Loading";
import ExercicioCard from "../../components/ExercicioCard";

import useTreinoData from "../../hooks/useTreinoData";
import { createTreino, updateTreino } from "../../services/treinoService";

export default function Treino() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { exercicios, alunos, treino, isLoading } = useTreinoData(id);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [alunoId, setAlunoId] = useState("");
  const [exerciciosSelecionados, setExerciciosSelecionados] = useState([]);

  useEffect(() => {
    if (!treino) return;

    setNome(treino.nome);
    setDescricao(treino.descricao);
    setAlunoId(treino.aluno_id || "");

    const ids = treino.Exercicios?.map((ex) => Number(ex.id)) || [];
    setExerciciosSelecionados(ids);
  }, [treino]);

  const toggleExercicio = (id) => {
    setExerciciosSelecionados((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nome.length < 3 || descricao.length < 3) {
      toast.error("Nome e descrição precisam ter pelo menos 3 caracteres");
      return;
    }

    if (!exerciciosSelecionados.length) {
      toast.error("Selecione pelo menos um exercício");
      return;
    }

    const payload = {
      nome,
      descricao,
      aluno_id: alunoId ? Number(alunoId) : null,
      exercicios: exerciciosSelecionados,
    };

    try {
      if (id) {
        await updateTreino(id, payload);
        toast.success("Treino atualizado!");
      } else {
        const data = await createTreino(payload);
        toast.success("Treino criado!");
        navigate(`/treino/${data.id}/edit`);
      }
    } catch {
      toast.error("Erro ao salvar treino");
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>{id ? "Editar treino" : "Novo treino"}</Title>

      <Form onSubmit={handleSubmit}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do treino"
        />

        <input
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
        />

        <label>Aluno</label>

        <Select value={alunoId} onChange={(e) => setAlunoId(e.target.value)}>
          <option value="">Sem aluno</option>

          {alunos.map((aluno) => (
            <option key={aluno.id} value={aluno.id}>
              {aluno.nome} {aluno.sobrenome}
            </option>
          ))}
        </Select>

        <label>Exercícios</label>

        <ExercicioGrid>
          {exercicios.map((ex) => (
            <ExercicioCard
              key={ex.id}
              exercicio={ex}
              checked={exerciciosSelecionados.includes(ex.id)}
              onChange={() => toggleExercicio(ex.id)}
            />
          ))}
        </ExercicioGrid>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
