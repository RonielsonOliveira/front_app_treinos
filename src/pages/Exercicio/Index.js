import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Loading from "../../components/Loading";
import FormInput from "../../components/FormInput";
import UploadFotos from "../../components/UploadFotos";

import useExercicio from "../../hooks/useExercicio";
import { useExercicioForm } from "../../hooks/useExercicioForm";

import { exercicioToPayload } from "./mapper";
import { validateExercicio } from "./validation";
import { salvarExercicio } from "./actions";

import {
  Container,
  Title,
  Form,
  Section,
  SectionTitle,
  SaveBar,
  SaveButton,
} from "./styled";

export default function Exercicio() {
  const navigate = useNavigate();

  const { id } = useParams();

  const { exercicio, isLoading } = useExercicio(id);

  const {
    form,
    fotos,
    novasFotos,
    handleChange,
    handleFotoChange,
    removerNovaFoto,
    setNovasFotos,
  } = useExercicioForm(exercicio);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateExercicio(form)) return;

    const payload = exercicioToPayload(form);

    await salvarExercicio({
      id,
      payload,
      novasFotos,
      navigate,
      setNovasFotos,
    });
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>
        {id ? (
          <>
            Editar <span>Exercício</span>
          </>
        ) : (
          <>
            Novo <span>Exercício</span>
          </>
        )}
      </Title>

      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>Informações</SectionTitle>

          <FormInput
            label="Nome"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            placeholder="Digite o nome do exercício"
          />

          <FormInput
            label="Descrição"
            name="descricao"
            value={form.descricao}
            onChange={handleChange}
            placeholder="Digite a descrição"
          />
        </Section>

        <Section>
          <SectionTitle>Imagens</SectionTitle>

          <UploadFotos
            fotos={fotos}
            novasFotos={novasFotos}
            onChange={handleFotoChange}
            onRemove={removerNovaFoto}
          />
        </Section>

        <SaveBar>
          <SaveButton type="submit">
            {id ? "Atualizar Exercício" : "Cadastrar Exercício"}
          </SaveButton>
        </SaveBar>
      </Form>
    </Container>
  );
}
