import React from "react";

import * as S from "./styled";

export default function ModalConfirmacao({
  open,
  titulo,
  mensagem,
  onConfirm,
  onCancel,
}) {
  if (!open) return null;

  return (
    <S.Overlay>
      <S.Container>
        <S.Title>{titulo}</S.Title>

        <S.Message>{mensagem}</S.Message>

        <S.Actions>
          <S.CancelButton onClick={onCancel}>Cancelar</S.CancelButton>

          <S.DeleteButton onClick={onConfirm}>Excluir</S.DeleteButton>
        </S.Actions>
      </S.Container>
    </S.Overlay>
  );
}
