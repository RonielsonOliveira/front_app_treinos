import React from "react";
import { Title } from "../../styled";

export default function TreinoHeader({ id, alunoSelecionado }) {
  return (
    <Title>
      {id ? (
        alunoSelecionado ? (
          <>
            Editar treino de <span>{alunoSelecionado.nome}</span>
          </>
        ) : (
          "Editar treino"
        )
      ) : alunoSelecionado ? (
        <>
          Novo treino de <span>{alunoSelecionado.nome}</span>
        </>
      ) : (
        "Novo treino"
      )}
    </Title>
  );
}
