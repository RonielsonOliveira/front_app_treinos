import { useEffect, useState } from 'react'

export default function useInformacoesTreino({
  treino,
  alunoOrigem,
  treinoModelo
}) {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [alunoId, setAlunoId] = useState(alunoOrigem || '')
  const [diaSemana, setDiaSemana] = useState(1)

  useEffect(() => {
    if (treinoModelo) {
      setNome(treinoModelo.nome)
      setDescricao(treinoModelo.descricao)

      // NÃO copia o aluno
      setAlunoId(alunoOrigem || '')

      setDiaSemana(treinoModelo.dia_semana ?? 1)

      return
    }

    if (!treino) return

    setNome(treino.nome)
    setDescricao(treino.descricao)
    setAlunoId(treino.aluno_id || alunoOrigem || '')
    setDiaSemana(treino.dia_semana ?? 1)
  }, [treino, treinoModelo, alunoOrigem])

  return {
    nome,
    setNome,

    descricao,
    setDescricao,

    alunoId,
    setAlunoId,

    diaSemana,
    setDiaSemana
  }
}
