import { useEffect, useState } from "react";

import { getAlunos } from "../../services/alunosService";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";

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

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <S.Container>
      <S.Title>Alunos</S.Title>

      <S.Grid>
        {alunos.map((aluno) => (
          <S.Card
            key={aluno.id}
            onClick={() => navigate(`/alunos/${aluno.id}/treinos`)}
          >
            <S.Name>{aluno.nome}</S.Name>

            <S.Info>{aluno.email}</S.Info>

            <S.Info>{aluno.telefone}</S.Info>

            <S.Info>{aluno.objetivo}</S.Info>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  );
}
