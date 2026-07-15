import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./styled";
import { Container } from "../../styles/GlobalStyles";
import { ExercicioGrid, Form, Select, Title } from "./styled";

import Loading from "../../components/Loading";
import ExercicioCard from "../../components/ExercicioCard";

import useTreinoData from "../../hooks/useTreinoData";
import { createTreino, updateTreino } from "../../services/treinoService";
import ModalExercicio from "../../components/ModalExercicio";
import ExercicioListItem from "../../components/ExercicioListItem";

export default function Treino() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const alunoOrigem = location.state?.alunoId;
  const [alunoId, setAlunoId] = useState(alunoOrigem || "");
  const [busca, setBusca] = useState("");
  const { exercicios, alunos, treino, isLoading } = useTreinoData(id);
  const alunoSelecionado = alunos.find(
    (aluno) => Number(aluno.id) === Number(alunoId)
  );

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [exercicioAtual, setExercicioAtual] = useState(null);

  const [series, setSeries] = useState(3);

  const [repeticoes, setRepeticoes] = useState(12);
  const [diaSemana, setDiaSemana] = useState(1);
  const [exerciciosSelecionados, setExerciciosSelecionados] = useState([]);
  const removerExercicio = () => {
    setExerciciosSelecionados((prev) =>
      prev.filter((e) => e.id !== exercicioAtual.id)
    );

    setModalOpen(false);
  };
  const removerAcentos = (texto) =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const exerciciosMap = useMemo(() => {
    return Object.fromEntries(exerciciosSelecionados.map((e) => [e.id, e]));
  }, [exerciciosSelecionados]);
  const exerciciosFiltrados = useMemo(() => {
    if (!busca.trim()) return exercicios;

    const buscaNormalizada = removerAcentos(busca);

    return exercicios.filter((ex) =>
      removerAcentos(ex.descricao).includes(buscaNormalizada)
    );
  }, [busca, exercicios]);
  useEffect(() => {
    if (!treino) return;

    setNome(treino.nome);
    setDescricao(treino.descricao);
    setAlunoId(treino.aluno_id || "");
    setDiaSemana(treino.dia_semana ?? 1);
    const exerciciosComSeries =
      treino.Exercicios?.map((ex) => ({
        id: ex.id,
        numerodeSeries: ex.TreinoExercicio?.numerodeSeries ?? 3,
        numerodeRepeticoes: ex.TreinoExercicio?.numerodeRepeticoes ?? 10,
      })) || [];

    setExerciciosSelecionados(exerciciosComSeries);
  }, [treino]);

  const abrirModal = (exercicio) => {
    const existente = exerciciosSelecionados.find((e) => e.id === exercicio.id);

    setExercicioAtual(exercicio);

    setSeries(existente?.numerodeSeries || 3);

    setRepeticoes(existente?.numerodeRepeticoes || 12);

    setModalOpen(true);
  };
  const confirmarExercicio = () => {
    setExerciciosSelecionados((prev) => {
      const existe = prev.find((e) => e.id === exercicioAtual.id);

      if (existe) {
        return prev.map((e) =>
          e.id === exercicioAtual.id
            ? {
                ...e,
                numerodeSeries: Number(series),
                numerodeRepeticoes: Number(repeticoes),
              }
            : e
        );
      }

      return [
        ...prev,
        {
          id: exercicioAtual.id,
          numerodeSeries: Number(series),
          numerodeRepeticoes: Number(repeticoes),
        },
      ];
    });

    setModalOpen(false);
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
      dia_semana: diaSemana,
      exercicios: exerciciosSelecionados.map((ex) => ({
        id: ex.id,
        numerodeSeries: Number(ex.numerodeSeries),
        numerodeRepeticoes: Number(ex.numerodeRepeticoes),
      })),
    };
    console.log("payload:", payload);
    try {
      setIsSaving(true);
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
        {id ? (
          alunoSelecionado ? (
            <>
              Editar treino de <span>{alunoSelecionado.nome}</span>
            </>
          ) : (
            "Editar treino"
          )
        ) : alunoSelecionado ? (
          <>
            Novo treino de <span>{alunoSelecionado.nome}</span>
          </>
        ) : (
          "Novo treino"
        )}
      </Title>

      <S.Form onSubmit={handleSubmit}>
        <S.Section>
          <S.SectionTitle>Informações do treino</S.SectionTitle>

          <S.Fields>
            <S.Field>
              <label>Nome do treino</label>

              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Ex.: Treino A"
              />
            </S.Field>

            <S.Field>
              <label>Descrição</label>

              <input
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Descrição"
              />
            </S.Field>
            <S.Field>
              <label>Dia do treino</label>

              <S.Select
                value={diaSemana}
                onChange={(e) => setDiaSemana(Number(e.target.value))}
              >
                <option value={1}>Segunda-feira</option>
                <option value={2}>Terça-feira</option>
                <option value={3}>Quarta-feira</option>
                <option value={4}>Quinta-feira</option>
                <option value={5}>Sexta-feira</option>
                <option value={6}>Sábado</option>
                <option value={7}>Domingo</option>
              </S.Select>
            </S.Field>

            {!alunoOrigem && (
              <S.Field className="full">
                <label>Aluno</label>

                <S.Select
                  value={alunoId}
                  onChange={(e) => setAlunoId(e.target.value)}
                >
                  <option value="">Selecione um aluno</option>

                  {alunos.map((aluno) => (
                    <option key={aluno.id} value={aluno.id}>
                      {aluno.nome} {aluno.sobrenome}
                    </option>
                  ))}
                </S.Select>
              </S.Field>
            )}
          </S.Fields>
        </S.Section>

        <S.Section>
          <S.SectionTitle>Exercícios</S.SectionTitle>

          <S.Search
            id="buscar"
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar exercício..."
          />

          <S.ExercicioGrid>
            {exerciciosFiltrados.map((ex) => (
              <ExercicioListItem
                key={ex.id}
                exercicio={ex}
                selecionado={!!exerciciosMap[ex.id]}
                onClick={() => abrirModal(ex)}
              />
            ))}

            {exerciciosFiltrados.length === 0 && (
              <p
                style={{
                  color: "#94a3b8",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                Nenhum exercício encontrado.
              </p>
            )}
          </S.ExercicioGrid>
        </S.Section>

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
        onCancel={() => setModalOpen(false)}
        onConfirm={confirmarExercicio}
        onRemove={removerExercicio}
      />
    </Container>
  );
}
