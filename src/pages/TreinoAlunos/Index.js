import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Container } from '../../styles/GlobalStyles'

import Loading from '../../components/Loading'
import CalendarioSemanal from '../../components/CalendarioSemanal'
import ModalConfirmacao from '../../components/ModalConfirmation'
import ExercicioModal from '../../components/ExercicioModal'
import TreinoItem from '../../components/TreinoItem'

import { useToggle } from '../../hooks/useToggle'
import useTreinosAluno from './hooks/useTreinosAluno'

import * as S from './styled'
export default function TreinosAluno() {
  const { alunoId } = useParams()

  const navigate = useNavigate()

  const { openId, toggle } = useToggle()

  const [exercicioSelecionado, setExercicioSelecionado] = useState(null)

  const {
    loading,

    treinos,

    treinosFiltrados,

    treinoExcluir,
    setTreinoExcluir,

    diaSelecionado,
    setDiaSelecionado,

    confirmarExclusao
  } = useTreinosAluno(alunoId)

  const editarTreino = (id) => {
    navigate(`/treino/${id}/edit`, {
      state: {
        alunoId
      }
    })
  }

  const novoTreino = () => {
    navigate('/treino', {
      state: {
        alunoId
      }
    })
  }

  return (
    <Container>
      <Loading isLoading={loading} />

      <S.Header>
        <S.Title>Treinos do Aluno</S.Title>
        <S.NewButton onClick={novoTreino}>+ Novo Treino</S.NewButton>
      </S.Header>
      <CalendarioSemanal
        diaSelecionado={diaSelecionado}
        onChange={setDiaSelecionado}
        treinos={treinos}
      />
      {treinos.length === 0 ? (
        <p>Esse aluno ainda não possui treinos.</p>
      ) : treinosFiltrados.length === 0 ? (
        <p
          style={{
            textAlign: 'center',
            color: '#94a3b8',
            margin: '30px 0'
          }}
        >
          Nenhum treino cadastrado para este dia.
        </p>
      ) : (
        treinosFiltrados.map((treino) => (
          <div key={treino.id}>
            <TreinoItem
              treino={treino}
              isOpen={openId === treino.id}
              onToggle={toggle}
              onSelectExercicio={setExercicioSelecionado}
              checkedExercicios={{}}
              onCheck={() => {}}
            />{' '}
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
            <ExercicioModal
              exercicio={exercicioSelecionado}
              onClose={() => setExercicioSelecionado(null)}
            />
            <ModalConfirmacao
              open={!!treinoExcluir}
              titulo="Excluir treino"
              mensagem={`Deseja realmente excluir o treino "${treinoExcluir?.nome}"? Essa ação não poderá ser desfeita.`}
              onCancel={() => setTreinoExcluir(null)}
              onConfirm={confirmarExclusao}
            />
          </div>
        ))
      )}
    </Container>
  )
}
