import { useMemo } from 'react'

import { removerAcentos } from '../helpers'

export default function useExerciciosFiltro(exercicios, busca) {
  return useMemo(() => {
    if (!busca.trim()) return exercicios

    const texto = removerAcentos(busca)

    return exercicios.filter((ex) =>
      removerAcentos(ex.descricao).includes(texto)
    )
  }, [busca, exercicios])
}
