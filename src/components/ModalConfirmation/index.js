import React, { useEffect, useState } from 'react'
import * as S from './styled'

export default function ModalConfirmacao({
  open,
  titulo,
  mensagem,
  onCancel,
  onConfirm
}) {
  const [tempo, setTempo] = useState(5)

  useEffect(() => {
    if (!open) return

    setTempo(5)

    const timer = setInterval(() => {
      setTempo((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [open])

  if (!open) return null

  return (
    <S.Overlay>
      <S.Container>
        <S.Title>{titulo}</S.Title>

        <S.Message>{mensagem}</S.Message>

        <S.Actions>
          <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>

          {/*
  <S.DeleteButton
    disabled={tempo > 0}
    onClick={onConfirm}
  >
    {tempo > 0 ? `Confirmar (${tempo}s)` : "Confirmar"}
  </S.DeleteButton>
  */}
        </S.Actions>
      </S.Container>
    </S.Overlay>
  )
}
