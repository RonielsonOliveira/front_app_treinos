import React from "react";
import { FaUserCircle } from "react-icons/fa";

import {
  ExercicioCheck,
  Exercicio,
  ImageWrapper,
  ExercicioInfoWrapper,
  ExercicioInfoTitle,
  Footer,
  CheckboxWrapper,
} from "./styled";

export default function ExercicioCardAluno({
  exercicio,
  checked,
  onChange,
  onClick,
}) {
  return (
    <ExercicioCheck>
      <Exercicio onClick={() => onClick(exercicio)}>
        {" "}
        {/* aqui abre modal */}
        <ExercicioInfoWrapper>
          <ExercicioInfoTitle>{exercicio.descricao}</ExercicioInfoTitle>

          <Footer>
            <CheckboxWrapper onClick={(e) => e.stopPropagation()}>
              <input type="checkbox" checked={checked} onChange={onChange} />
            </CheckboxWrapper>
          </Footer>
        </ExercicioInfoWrapper>
      </Exercicio>
    </ExercicioCheck>
  );
}
