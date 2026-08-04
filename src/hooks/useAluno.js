import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getAluno } from '../services/alunoService'

export default function useAluno(id) {
  const [aluno, setAluno] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!id) return

    async function loadAluno() {
      try {
        setIsLoading(true)
        const data = await getAluno(id)
        setAluno(data)
        setIsLoading(false)
      } catch {
        setIsLoading(false)
        toast.error('Erro ao carregar aluno')
      }
    }

    loadAluno()
  }, [id])

  return { aluno, isLoading }
}
