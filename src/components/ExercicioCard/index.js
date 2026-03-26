import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { CardFotos } from "../../pages/Treino/styled";
import {
  CheckboxWrapper,
  Exercicio,
  ExercicioCheck,
  ExercicioInfoDetails,
  ExercicioInfoTitle,
  ExercicioInfoWrapper,
} from "./styled";

export default function ExercicioCard({ exercicio, checked, onChange }) {
  return (
    <ExercicioCheck>
      <Exercicio>
        <ExercicioInfoWrapper>
          <CardFotos>
            {exercicio.FotoExercicios?.[0] ? (
              <img
                src={exercicio.FotoExercicios[0].url}
                alt="Foto do exercício"
              />
            ) : (
              <FaUserCircle size={120} />
            )}
          </CardFotos>

          <ExercicioInfoTitle>{exercicio.nome}</ExercicioInfoTitle>

          <ExercicioInfoDetails>{exercicio.descricao}</ExercicioInfoDetails>

          <CheckboxWrapper>
            <input
              className="checkbox"
              type="checkbox"
              checked={checked}
              onChange={onChange}
            />
          </CheckboxWrapper>
        </ExercicioInfoWrapper>
      </Exercicio>
    </ExercicioCheck>
  );
}
