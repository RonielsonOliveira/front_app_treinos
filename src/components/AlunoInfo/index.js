import React from "react";
import * as S from "./styled";
import { useAlunoPerfil } from "../../hooks/useAlunoPerfil";

export default function AlunoInfo() {
  const { aluno } = useAlunoPerfil();

  if (!aluno) return null;

  const calcularIMC = () => {
    const peso = Number(aluno.peso);
    const altura = Number(aluno.altura);

    if (!peso || !altura) {
      return "--";
    }

    const imc = peso / (altura * altura);

    return imc.toFixed(2);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Avatar>{aluno.nome?.charAt(0)}</S.Avatar>

        <div>
          <S.Name>
            {aluno.nome} {aluno.sobrenome}
          </S.Name>

          <S.Subtitle>Informações corporais</S.Subtitle>
        </div>
      </S.Header>

      <S.Grid>
        <S.Card>
          <span>Peso</span>

          <strong>{aluno.peso || "--"} kg</strong>
        </S.Card>

        <S.Card>
          <span>Altura</span>

          <strong>{aluno.altura || "--"} m</strong>
        </S.Card>

        <S.Card>
          <span>IMC</span>

          <strong>{calcularIMC()}</strong>
        </S.Card>
      </S.Grid>
    </S.Container>
  );
}
