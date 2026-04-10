import React from "react";
import { Container } from "../../styles/GlobalStyles";
import Loading from "../../components/Loading";
import { Title, TreinoCard } from "./styled";

import { useMeusTreinos } from "../../hooks/useMeusTreinos";
import { useToggle } from "../../hooks/useToggle";

import TreinoItem from "../../components/TreinoItem";

export default function MeusTreinos() {
  const { treinos, isLoading } = useMeusTreinos();
  const { openId, toggle } = useToggle();

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>Meus Treinos</Title>

      {treinos.length === 0 && <p>Você ainda não possui treinos.</p>}

      {treinos.map((treino) => (
        <TreinoItem
          key={treino.id}
          treino={treino}
          isOpen={openId === treino.id}
          onToggle={toggle}
        />
      ))}
    </Container>
  );
}
