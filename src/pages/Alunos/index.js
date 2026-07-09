import { useEffect, useState } from "react";

import { getAlunos } from "../../services/alunosService";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";
import { deleteAluno } from "../../services/alunoService";
import { toast } from "react-toastify";
import ModalConfirmacao from "../../components/ModalConfirmation";
export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [alunoExcluir, setAlunoExcluir] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const confirmarExclusao = async () => {
    try {
      await deleteAluno(alunoExcluir.id);

      setAlunos((prev) => prev.filter((aluno) => aluno.id !== alunoExcluir.id));

      setAlunoExcluir(null);

      toast.success("Aluno excluído com sucesso!");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir aluno");
    }
  };
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
          <S.Card key={aluno.id}>
            <S.Left>
              <S.Name onClick={() => navigate(`/alunos/${aluno.id}/treinos`)}>
                {aluno.nome} {aluno.sobrenome}
              </S.Name>

              <S.Info>{aluno.email}</S.Info>
              <S.Info>{aluno.telefone}</S.Info>
              <S.Info>Objetivo: {aluno.objetivo}</S.Info>
            </S.Left>

            <S.Right>
              <S.Buttons>
                <S.TreinosButton
                  onClick={() => navigate(`/alunos/${aluno.id}/treinos`)}
                >
                  Treinos
                </S.TreinosButton>

                <S.EditButton
                  onClick={() => navigate(`/aluno/${aluno.id}/edit`)}
                >
                  Editar
                </S.EditButton>

                <S.DeleteButton onClick={() => setAlunoExcluir(aluno)}>
                  Excluir
                </S.DeleteButton>
              </S.Buttons>
            </S.Right>
          </S.Card>
        ))}
      </S.List>
      <ModalConfirmacao
        open={!!alunoExcluir}
        titulo="Excluir aluno"
        mensagem={`Deseja realmente excluir o aluno "${alunoExcluir?.nome}"? Essa ação não poderá ser desfeita.`}
        onCancel={() => setAlunoExcluir(null)}
        onConfirm={confirmarExclusao}
      />
    </S.Container>
  );
}
