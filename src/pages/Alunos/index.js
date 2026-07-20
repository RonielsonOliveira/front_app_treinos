import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

import Loading from "../../components/Loading";
import ModalConfirmacao from "../../components/ModalConfirmation";

import useAlunos from "../../hooks/useAlunos";

import { excluirAluno } from "./actions";

export default function Alunos() {
  const navigate = useNavigate();

  const { alunos, setAlunos, loading } = useAlunos();

  const [alunoExcluir, setAlunoExcluir] = useState(null);

  return (
    <S.Container>
      <Loading isLoading={loading} />

      <S.Header>
        <S.Title>Alunos</S.Title>

        <S.NewButton onClick={() => navigate("/aluno")}>
          + Novo Aluno
        </S.NewButton>
      </S.Header>

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
        onConfirm={() =>
          excluirAluno(alunoExcluir, setAlunos, () => setAlunoExcluir(null))
        }
      />
    </S.Container>
  );
}
