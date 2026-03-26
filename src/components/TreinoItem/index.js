import React from "react";
import { TreinoCard, TreinoTitle, Arrow } from "../../pages/MeusTreinos/styled";

import ExercicioCard from "../ExercicioCard";

export default function TreinoItem({ treino, isOpen, onToggle }) {
  return (
    <div className="treinoItem">
      <TreinoTitle onClick={() => onToggle(treino.id)}>
        <div>
          <h3>{treino.nome}</h3>
          <span>{treino.descricao}</span>
        </div>

        <Arrow isOpen={isOpen}>▼</Arrow>
      </TreinoTitle>

      {isOpen && (
        <TreinoCard>
          {treino.Exercicios.map((ex) => (
            <ExercicioCard key={ex.id} exercicio={ex} />
          ))}
        </TreinoCard>
      )}
    </div>
  );
}
