import React from "react";
import { FaUserCircle } from "react-icons/fa";

import {
  ExercicioCheck,
  Exercicio,
  ImageWrapper,
  ExercicioInfoWrapper,
  ExercicioInfoTitle,
  ExercicioInfoDetails,
  Footer,
  CheckboxWrapper,
  ExercicioSeriesERepeticoes,
} from "./styled";

export default function ExercicioCard({ exercicio, checked, onChange }) {
  console.log(exercicio);
  return (
    <ExercicioCheck>
      <Exercicio>
        <ImageWrapper>
          {exercicio.FotoExercicios?.[0] ? (
            <img src={exercicio.FotoExercicios[0].url} alt={exercicio.nome} />
          ) : (
            <FaUserCircle size={80} />
          )}
        </ImageWrapper>

        <ExercicioInfoWrapper>
          <ExercicioInfoTitle>{exercicio.nome}</ExercicioInfoTitle>

          <ExercicioInfoDetails>{exercicio.descricao}</ExercicioInfoDetails>
          <ExercicioSeriesERepeticoes>
            {exercicio.TreinoExercicio?.numerodeSeries}x
            {exercicio.TreinoExercicio?.numerodeRepeticoes}
          </ExercicioSeriesERepeticoes>

          <Footer>
            <span></span>

            <CheckboxWrapper>
              <input
                className="checkbox"
                type="checkbox"
                checked={checked}
                onChange={onChange}
              />
            </CheckboxWrapper>
          </Footer>
        </ExercicioInfoWrapper>
      </Exercicio>
    </ExercicioCheck>
  );
}
