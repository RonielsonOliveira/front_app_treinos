import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaWindowClose, FaDumbbell, FaCopy } from "react-icons/fa";
import { toast } from "react-toastify";

import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";

import axios from "../../services/axios";

import * as S from "./styled";

export default function Treinos() {
  const [treinos, setTreinos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [busca, setBusca] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);

        const { data } = await axios.get("/treinos");

        setTreinos(data);
      } catch {
        toast.error("Erro ao carregar treinos");
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  const removerAcentos = (texto = "") =>
    texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const treinosFiltrados = useMemo(() => {
    if (!busca.trim()) return treinos;

    const buscaNormalizada = removerAcentos(busca);

    return treinos.filter((treino) => {
      const encontrouTreino =
        removerAcentos(treino.nome).includes(buscaNormalizada) ||
        removerAcentos(treino.descricao).includes(buscaNormalizada);

      const encontrouExercicio = treino.Exercicios?.some((ex) =>
        removerAcentos(ex.descricao).includes(buscaNormalizada)
      );

      return encontrouTreino || encontrouExercicio;
    });
  }, [busca, treinos]);

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir este treino?")) return;

    try {
      setIsLoading(true);

      await axios.delete(`/treinos/${id}`);

      setTreinos((prev) => prev.filter((t) => t.id !== id));

      toast.success("Treino excluído com sucesso!");
    } catch {
      toast.error("Erro ao excluir treino");
    } finally {
      setIsLoading(false);
    }
  };

  const duplicarTreino = (treino) => {
    navigate("/treino", {
      state: {
        treinoModelo: treino,
      },
    });
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <S.Header>
        <S.Title>Treinos</S.Title>

        <S.NovoAluno to="/treino">Novo Treino</S.NovoAluno>
      </S.Header>

      <S.SearchInput
        type="text"
        placeholder="Buscar por nome, descrição ou exercício..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      <S.CardsContainer>
        {treinosFiltrados.map((treino) => (
          <S.Card key={treino.id}>
            <S.CardInfo>
              <S.IconWrapper>
                <FaDumbbell />
              </S.IconWrapper>

              <S.Nome>{treino.nome}</S.Nome>

              <S.Descricao>{treino.descricao}</S.Descricao>

              <S.Divider />

              <S.SectionTitle>Exercícios</S.SectionTitle>

              <S.Exercicios>
                {treino.Exercicios?.slice(0, 6).map((ex) => (
                  <S.Exercicio key={ex.id}>{ex.descricao}</S.Exercicio>
                ))}

                {treino.Exercicios?.length > 6 && (
                  <S.Exercicio>
                    +{treino.Exercicios.length - 6} exercícios
                  </S.Exercicio>
                )}
              </S.Exercicios>

              <S.CardActions>
                <Link to={`/treino/${treino.id}/edit`}>
                  <FaEdit size={20} />
                  <span>Editar</span>
                </Link>

                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    duplicarTreino(treino);
                  }}
                >
                  <FaCopy size={18} />
                  <span>Duplicar</span>
                </Link>

                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(treino.id);
                  }}
                >
                  <FaWindowClose size={20} />
                  <span>Excluir</span>
                </Link>
              </S.CardActions>
            </S.CardInfo>
          </S.Card>
        ))}
      </S.CardsContainer>

      {!isLoading && treinosFiltrados.length === 0 && (
        <S.EmptyMessage>Nenhum treino encontrado.</S.EmptyMessage>
      )}
    </Container>
  );
}
