import React from "react";
import * as S from "./styled";

const dias = [
  { id: 1, nome: "Seg" },
  { id: 2, nome: "Ter" },
  { id: 3, nome: "Qua" },
  { id: 4, nome: "Qui" },
  { id: 5, nome: "Sex" },
  { id: 6, nome: "Sáb" },
  { id: 7, nome: "Dom" },
];

export default function CalendarioSemanal({ diaSelecionado, onSelect }) {
  return (
    <S.Container>
      {dias.map((dia) => (
        <S.DayButton
          key={dia.id}
          type="button"
          active={dia.id === diaSelecionado}
          onClick={() => onSelect(dia.id)}
        >
          {dia.nome}
        </S.DayButton>
      ))}
    </S.Container>
  );
}
