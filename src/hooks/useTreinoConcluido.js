import { useState } from 'react'

export function useTreinoConcluido(toggle) {
  const [checkedExercicios, setCheckedExercicios] = useState({})
  const [treinoConcluido, setTreinoConcluido] = useState(false)

  const handleCheck = (exercicioId, treino, openId) => {
    setCheckedExercicios((prev) => {
      const updated = {
        ...prev,
        [exercicioId]: !prev[exercicioId]
      }

      const todosMarcados = treino.Exercicios.every((ex) => updated[ex.id])

      if (todosMarcados) {
        setTreinoConcluido(true)

        if (toggle) {
          toggle(openId)
        }
      }

      return updated
    })
  }

  const fecharModal = () => {
    setTreinoConcluido(false)
    setCheckedExercicios({})
  }

  return {
    checkedExercicios,
    treinoConcluido,
    handleCheck,
    fecharModal
  }
}
