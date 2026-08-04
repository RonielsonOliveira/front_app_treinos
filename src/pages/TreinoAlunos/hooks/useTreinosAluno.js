import { useEffect, useMemo, useState } from 'react'
import { toast } from 'react-toastify'

import { getTreinosAluno } from '../../../services/alunosService'
import { deleteTreino } from '../../../services/treinoService'

function getDiaSemanaAtual() {
  const dia = new Date().getDay()

  return dia === 0 ? 7 : dia
}

export default function useTreinosAluno(alunoId) {
  const [treinos, setTreinos] = useState([])
  const [loading, setLoading] = useState(true)

  const [treinoExcluir, setTreinoExcluir] = useState(null)

  const [diaSelecionado, setDiaSelecionado] = useState(getDiaSemanaAtual())

  useEffect(() => {
    async function carregar() {
      try {
        const response = await getTreinosAluno(alunoId)

        setTreinos(response)
      } catch (err) {
        toast.error('Erro ao carregar treinos.')
      } finally {
        setLoading(false)
      }
    }

    carregar()
  }, [alunoId])

  const confirmarExclusao = async () => {
    if (!treinoExcluir) return

    try {
      await deleteTreino(treinoExcluir.id)

      setTreinos((prev) =>
        prev.filter((treino) => treino.id !== treinoExcluir.id)
      )

      setTreinoExcluir(null)

      toast.success('Treino excluído com sucesso!')
    } catch {
      toast.error('Erro ao excluir treino.')
    }
  }

  const treinosFiltrados = useMemo(() => {
    return treinos.filter(
      (treino) => Number(treino.dia_semana) === Number(diaSelecionado)
    )
  }, [treinos, diaSelecionado])

  return {
    loading,

    treinos,

    treinosFiltrados,

    treinoExcluir,
    setTreinoExcluir,

    diaSelecionado,
    setDiaSelecionado,

    confirmarExclusao
  }
}
