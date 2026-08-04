import { useEffect, useState } from 'react'

import { getAlunos } from '../services/alunosService'

export default function useAlunos() {
  const [alunos, setAlunos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAlunos() {
      try {
        const response = await getAlunos()
        setAlunos(response)
      } finally {
        setLoading(false)
      }
    }

    loadAlunos()
  }, [])

  return {
    alunos,
    setAlunos,
    loading
  }
}
