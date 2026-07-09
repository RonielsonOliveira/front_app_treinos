import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
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
  const location = useLocation();
  const alunoOrigem = location.state?.alunoId;
  const [alunoId, setAlunoId] = useState(alunoOrigem || "");

  const { exercicios, alunos, treino, isLoading } = useTreinoData(id);
  const alunoSelecionado = alunos.find(
    (aluno) => Number(aluno.id) === Number(alunoId)
  );

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");

  const [exerciciosSelecionados, setExerciciosSelecionados] = useState([]);

  const exerciciosMap = useMemo(() => {
    return Object.fromEntries(exerciciosSelecionados.map((e) => [e.id, e]));
  }, [exerciciosSelecionados]);

  useEffect(() => {
    if (!treino) return;

    setNome(treino.nome);
    setDescricao(treino.descricao);
    setAlunoId(treino.aluno_id || "");

    const exerciciosComSeries =
      treino.Exercicios?.map((ex) => ({
        id: ex.id,
        numerodeSeries: ex.TreinoExercicio?.numerodeSeries ?? 3,
        numerodeRepeticoes: ex.TreinoExercicio?.numerodeRepeticoes ?? 10,
      })) || [];

    setExerciciosSelecionados(exerciciosComSeries);
  }, [treino]);

  const toggleExercicio = (id) => {
    setExerciciosSelecionados((prev) => {
      if (prev.some((ex) => ex.id === id)) {
        return prev.filter((ex) => ex.id !== id);
      }

      return [...prev, { id, numerodeSeries: 12, numerodeRepeticoes: 3 }];
    });
  };

  const updateExercicio = (id, field, value) => {
    setExerciciosSelecionados((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, [field]: Number(value) } : ex))
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

    if (
      exerciciosSelecionados.some(
        (ex) => ex.numerodeSeries <= 0 || ex.numerodeRepeticoes <= 0
      )
    ) {
      toast.error("Séries e repetições devem ser maiores que 0");
      return;
    }

    const payload = {
      nome,
      descricao,
      aluno_id: alunoId ? Number(alunoId) : null,
      exercicios: exerciciosSelecionados.map((ex) => ({
        id: ex.id,
        numerodeSeries: Number(ex.numerodeSeries),
        numerodeRepeticoes: Number(ex.numerodeRepeticoes),
      })),
    };
    console.log("payload:", payload);
    try {
      if (id) {
        await updateTreino(id, payload);

        toast.success("Treino atualizado!");

        if (alunoOrigem) {
          navigate(`/alunos/${alunoOrigem}/treinos`);
        } else {
          navigate("/treinos");
        }
      } else {
        const data = await createTreino(payload);

        toast.success("Treino criado!");

        if (alunoOrigem) {
          navigate(`/alunos/${alunoOrigem}/treinos`);
        } else {
          navigate(`/treino/${data.id}/edit`);
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("Erro ao salvar treino");
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>
        {id
          ? alunoSelecionado
            ? `Editar treino de ${alunoSelecionado.nome}`
            : "Editar treino"
          : alunoSelecionado
            ? `Novo treino de ${alunoSelecionado.nome}`
            : "Novo treino"}
      </Title>

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

        {!alunoOrigem && (
          <>
            <label>Selecione um aluno</label>

            <Select
              value={alunoId}
              onChange={(e) => setAlunoId(e.target.value)}
            >
              <option value="">Sem aluno</option>

              {alunos.map((aluno) => (
                <option key={aluno.id} value={aluno.id}>
                  {aluno.nome} {aluno.sobrenome}
                </option>
              ))}
            </Select>
          </>
        )}

        <label>Exercícios</label>

        <ExercicioGrid>
          {exercicios.map((ex) => {
            const selecionado = exerciciosMap[ex.id];

            return (
              <ExercicioCard
                key={ex.id}
                exercicio={ex}
                checked={!!selecionado}
                onChange={() => toggleExercicio(ex.id)}
              >
                {selecionado && (
                  <>
                    <label>Series</label>
                    <input
                      type="number"
                      placeholder="Séries"
                      value={selecionado.numerodeSeries} // dado do relacionamento
                      onChange={(e) =>
                        updateExercicio(ex.id, "numerodeSeries", e.target.value)
                      }
                    />
                    <label>Repetições</label>
                    <input
                      type="number"
                      placeholder="Repetições"
                      value={selecionado.numerodeRepeticoes} // dado do relacionamento
                      onChange={(e) =>
                        updateExercicio(
                          ex.id,
                          "numerodeRepeticoes",
                          e.target.value
                        )
                      }
                    />
                  </>
                )}
              </ExercicioCard>
            );
          })}
        </ExercicioGrid>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
