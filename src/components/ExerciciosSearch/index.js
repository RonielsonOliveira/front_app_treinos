import { useMemo, useState } from 'react'
import * as S from './styled'

export default function ExercicioSearch({ exercicios, onSelect }) {
  const [busca, setBusca] = useState('')

  const resultados = useMemo(() => {
    if (!busca.trim()) return []

    return exercicios.filter((exercicio) =>
      exercicio.descricao.toLowerCase().includes(busca.toLowerCase())
    )
  }, [busca, exercicios])

  return (
    <S.Container>
      <S.Input
        placeholder="Buscar exercício..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {busca && (
        <S.Lista>
          {resultados.length === 0 && (
            <S.Empty>Nenhum exercício encontrado</S.Empty>
          )}

          {resultados.map((item) => (
            <S.Item
              key={item.id}
              onClick={() => {
                onSelect(item)
                setBusca('')
              }}
            >
              {item.nome}
            </S.Item>
          ))}
        </S.Lista>
      )}
    </S.Container>
  )
}
