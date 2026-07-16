import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Loading from "../../components/Loading";
import FormInput from "../../components/FormInput";
import { Container } from "../../styles/GlobalStyles";

import useAluno from "../../hooks/useAluno";
import { useAlunoForm } from "../../hooks/useAlunoForm";
import { createAluno, updateAluno } from "../../services/alunoService";
import { validateAluno } from "./validation";
import { alunoToPayload } from "./mapper";

import {
  Title,
  Form,
  Section,
  SectionTitle,
  Fields,
  SaveBar,
  SaveButton,
} from "./styled";

export default function Aluno() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { aluno, isLoading } = useAluno(id);
  const { form, handleChange } = useAlunoForm(aluno);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAluno(form, !!id)) return;
    const payload = alunoToPayload(form);

    try {
      await (id ? updateAluno(id, payload) : createAluno(payload));
      toast.success(id ? "Aluno atualizado!" : "Aluno criado!");
      navigate("/alunos");
    } catch {
      toast.error("Erro ao salvar aluno");
    }
  };
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>
        {id ? (
          <>
            Editar <span>Aluno</span>
          </>
        ) : (
          <>
            Novo <span>Aluno</span>
          </>
        )}
      </Title>
      <Form onSubmit={handleSubmit}>
        <Section>
          <SectionTitle>Informações Pessoais</SectionTitle>
          <Fields>
            <FormInput
              label="Nome"
              id="nome"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite o nome"
            />
            <FormInput
              label="Sobrenome"
              id="sobrenome"
              name="sobrenome"
              value={form.sobrenome}
              onChange={handleChange}
              placeholder="Digite o sobrenome"
            />
            <FormInput
              className="full"
              label="Email"
              id="email"
              name="email"
              type="email"
              autoComplete="new-email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite o email"
            />
          </Fields>
        </Section>
        <Section>
          <SectionTitle>Informações Físicas</SectionTitle>
          <Fields>
            <FormInput
              label="Idade"
              id="idade"
              name="idade"
              type="number"
              value={form.idade}
              onChange={handleChange}
              placeholder="Idade"
            />
            <FormInput
              label="Peso (kg)"
              id="peso"
              name="peso"
              type="number"
              step="0.1"
              value={form.peso}
              onChange={handleChange}
              placeholder="Peso"
            />
            <FormInput
              className="full"
              label="Altura (m)"
              id="altura"
              name="altura"
              type="number"
              step="0.01"
              value={form.altura}
              onChange={handleChange}
              placeholder="Altura"
            />
          </Fields>
        </Section>

        <Section>
          <SectionTitle>Segurança</SectionTitle>
          <Fields>
            <FormInput
              className="full"
              label={id ? "Nova senha (opcional)" : "Senha"}
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={form.password}
              onChange={handleChange}
              placeholder={
                id ? "Digite uma nova senha (opcional)" : "Digite a senha"
              }
            />
          </Fields>
        </Section>
        <SaveBar>
          <SaveButton type="submit">
            {id ? "Atualizar Aluno" : "Cadastrar Aluno"}
          </SaveButton>
        </SaveBar>
      </Form>
    </Container>
  );
}
