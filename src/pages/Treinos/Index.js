import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaWindowClose, FaDumbbell } from "react-icons/fa";
import { toast } from "react-toastify";

import { Container } from "../../styles/GlobalStyles";
import {
  Card,
  CardInfo,
  CardActions,
  NovoAluno,
  Title,
  Header,
  CardsContainer,
} from "./styled";

import axios from "../../services/axios";
import Loading from "../../components/Loading";

export default function Treinos() {
  const [treinos, setTreinos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get("/treinos");
        setTreinos(data);
        setIsLoading(false);
      } catch {
        toast.error("Erro ao carregar treinos");
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Deseja realmente excluir este treino?")) return;

    try {
      setIsLoading(true);
      await axios.delete(`/treinos/${id}`);
      setTreinos((prev) => prev.filter((t) => t.id !== id));
      toast.success("Treino excluído com sucesso!");
      setIsLoading(false);
    } catch {
      toast.error("Erro ao excluir treino");
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Header>
        <Title>Treinos</Title>
        <NovoAluno to="/treino/">Novo Treino</NovoAluno>
      </Header>

      <CardsContainer>
        {treinos.map((treino) => (
          <Card key={treino.id}>
            <CardInfo>
              <FaDumbbell size={40} style={{ marginBottom: 10 }} />

              <h3>{treino.nome}</h3>
              <p>{treino.descricao}</p>

              <p>
                <strong>Exercícios:</strong>
              </p>

              {treino.Exercicios?.length > 0 ? (
                <ul>
                  {treino.Exercicios.map((ex) => (
                    <li key={ex.id}>
                      {ex.nome} ({ex.numerodeSeries}x{ex.numerodeRepeticoes})
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Nenhum exercício vinculado</p>
              )}

              <CardActions>
                <Link to={`/treino/${treino.id}/edit`}>
                  <FaEdit size={26} />
                </Link>

                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(treino.id);
                  }}
                >
                  <FaWindowClose size={26} />
                </Link>
              </CardActions>
            </CardInfo>
          </Card>
        ))}
      </CardsContainer>
    </Container>
  );
}
