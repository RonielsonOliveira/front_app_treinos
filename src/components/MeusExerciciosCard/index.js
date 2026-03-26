import React from "react";
import { Card, Details, ImageSlider } from "../../pages/MeusTreinos/styled";
import ExercicioSlider from "../ExercicioSlider";

export default function ExercicioCard({ exercicio }) {
  return (
    <Card>
      <ImageSlider>
        <ExercicioSlider fotos={exercicio.FotoExercicios} />
      </ImageSlider>

      <Details>
        <strong>{exercicio.nome}</strong>

        <li>
          Descrição: <strong>{exercicio.descricao}</strong>
        </li>

        <li>
          Séries: <strong>{exercicio.TreinoExercicio.series}</strong>
        </li>

        <li>
          Repetições: <strong>{exercicio.TreinoExercicio.repeticoes}</strong>
        </li>
      </Details>
    </Card>
  );
}
