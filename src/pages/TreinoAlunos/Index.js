import { useEffect, useState } from "react";
import { deleteTreino } from "../../services/treinoService";
import { toast } from "react-toastify";
import { Container } from "../../styles/GlobalStyles";
import { getTreinosAluno } from "../../services/alunosService";
import { useToggle } from "../../hooks/useToggle";
import * as S from "./styled";
import Loading from "../../components/Loading";
import TreinoItem from "../../components/TreinoItem";
import { Title } from "./styled";
import { useNavigate, useParams } from "react-router-dom";
import ModalConfirmacao from "../../components/ModalConfirmation";
export default function TreinosAluno() {
  const { alunoId } = useParams();
  const { openId, toggle } = useToggle();
  const [treinos, setTreinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [treinoExcluir, setTreinoExcluir] = useState(null);
  const navigate = useNavigate();
  const editarTreino = (id) => {
    navigate(`/treino/${id}/edit`, {
      state: {
        alunoId,
      },
    });
    // depois:
    // navigate(`/treino/${id}/edit`);
  };
  const confirmarExclusao = async () => {
    try {
      await deleteTreino(treinoExcluir.id);

      setTreinos((prev) => prev.filter((t) => t.id !== treinoExcluir.id));

      setTreinoExcluir(null);

      toast.success("Treino excluído com sucesso!");
    } catch (err) {
      toast.error("Erro ao excluir treino.");
    }
  };
  const novoTreino = () => {
    navigate("/treino", {
      state: {
        alunoId,
      },
    });
  };

  const excluirTreino = async (id) => {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este treino?"
    );

    if (!confirmar) return;

    try {
      await deleteTreino(id);

      setTreinos((treinosAntigos) =>
        treinosAntigos.filter((treino) => treino.id !== id)
      );

      toast.success("Treino excluído com sucesso!");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao excluir treino.");
    }
  };
  useEffect(() => {
    async function carregar() {
      try {
        const response = await getTreinosAluno(alunoId);

        setTreinos(response);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, [alunoId]);

  return (
    <Container>
      <Loading isLoading={loading} />

      <S.Header>
        <S.Title>Treinos do Aluno</S.Title>

        <S.NewButton onClick={novoTreino}>+ Novo Treino</S.NewButton>
      </S.Header>
      {treinos.length === 0 && <p>Esse aluno ainda não possui treinos.</p>}

      {treinos.map((treino) => (
        <div key={treino.id}>
          <TreinoItem
            treino={treino}
            isOpen={openId === treino.id}
            onToggle={toggle}
            onSelectExercicio={() => {}}
            checkedExercicios={{}}
            onCheck={() => {}}
          />

          {openId === treino.id && (
            <S.Actions>
              <S.EditButton onClick={() => editarTreino(treino.id)}>
                Editar
              </S.EditButton>

              <S.DeleteButton onClick={() => setTreinoExcluir(treino)}>
                Excluir
              </S.DeleteButton>
            </S.Actions>
          )}
          <ModalConfirmacao
            open={!!treinoExcluir}
            titulo="Excluir treino"
            mensagem={`Deseja realmente excluir o treino "${treinoExcluir?.nome}"? Essa ação não poderá ser desfeita.`}
            onCancel={() => setTreinoExcluir(null)}
            onConfirm={confirmarExclusao}
          />
        </div>
      ))}
    </Container>
  );
}
