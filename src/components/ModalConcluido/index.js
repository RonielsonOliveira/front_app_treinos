import { useEffect } from "react";
import { Overlay, ModalContent } from "./styled";

export function ModalTreinoConcluido({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Treino concluído 🎉</h2>
        <p>Parabéns! Você finalizou todos os exercícios.</p>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </Overlay>
  );
}
