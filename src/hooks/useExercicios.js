import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getExercicios } from '../services/exerciciosService'

export default function useExercicios() {
  const [exercicios, setExercicios] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function load() {
      try {
        setIsLoading(true)
        const data = await getExercicios()
        setExercicios(data)
        setIsLoading(false)
      } catch {
        toast.error('Erro ao carregar exercícios')
        setIsLoading(false)
      }
    }

    load()
  }, [])

  return { exercicios, setExercicios, isLoading, setIsLoading }
}
