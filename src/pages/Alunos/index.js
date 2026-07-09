import { useEffect, useState } from "react";

import { getAlunos } from "../../services/alunosService";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function carregar() {
      try {
        const response = await getAlunos();
        setAlunos(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);

  return (
    <S.Container>
      <Loading isLoading={loading} />
      <S.Title>Alunos</S.Title>

      <S.List>
        {alunos.map((aluno) => (
          <S.Card
            key={aluno.id}
            onClick={() => navigate(`/alunos/${aluno.id}/treinos`)}
          >
            <S.Left>
              <S.Name>{aluno.nome}</S.Name>
              <S.Info>{aluno.email}</S.Info>
              <S.Info>{aluno.telefone}</S.Info>
              <S.Info>Objetivo: {aluno.objetivo}</S.Info>
            </S.Left>

            <S.Right>
              <S.Arrow>→</S.Arrow>
            </S.Right>
          </S.Card>
        ))}
      </S.List>
    </S.Container>
  );
}
