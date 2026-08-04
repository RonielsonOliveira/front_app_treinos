import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getExercicio } from '../services/exercicioService'

export default function useExercicio(id) {
  const [exercicio, setExercicio] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!id) return

    async function load() {
      try {
        setIsLoading(true)
        const data = await getExercicio(id)
        setExercicio(data)
        setIsLoading(false)
      } catch {
        setIsLoading(false)
        toast.error('Erro ao carregar exercício')
      }
    }

    load()
  }, [id])

  return { exercicio, isLoading }
}
