import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import Loading from "../../components/Loading";
import { Container } from "../../styles/GlobalStyles";

import useAluno from "../../hooks/useAluno";
import { createAluno, updateAluno } from "../../services/alunoService";

import {
  Title,
  Form,
  Section,
  SectionTitle,
  Fields,
  Field,
  SaveBar,
  SaveButton,
} from "./styled";

export default function Aluno() {
  const navigate = useNavigate();
  const { id } = useParams();

  const initialForm = {
    nome: "",
    sobrenome: "",
    email: "",
    idade: "",
    peso: "",
    altura: "",
    password: "",
  };

  const [form, setForm] = useState(initialForm);

  const { aluno, isLoading } = useAluno(id);

  useEffect(() => {
    if (!id) {
      setForm(initialForm);
      return;
    }

    if (aluno) {
      setForm({
        nome: aluno.nome || "",
        sobrenome: aluno.sobrenome || "",
        email: aluno.email || "",
        idade: aluno.idade || "",
        peso: aluno.peso || "",
        altura: aluno.altura || "",
        password: "",
      });
    }
  }, [id, aluno]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    if (form.nome.length < 3 || form.sobrenome.length < 3) {
      toast.error("Nome e sobrenome precisam ter pelo menos 3 caracteres");
      return false;
    }

    if (!id && form.password.length < 6) {
      toast.error("Senha precisa ter pelo menos 6 caracteres");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const payload = {
      nome: form.nome,
      sobrenome: form.sobrenome,
      email: form.email,
      idade: form.idade || null,
      peso: form.peso || null,
      altura: form.altura || null,
    };

    if (form.password) {
      payload.password = form.password;
    }

    try {
      if (id) {
        await updateAluno(id, payload);
        toast.success("Aluno atualizado!");
      } else {
        await createAluno(payload);
        toast.success("Aluno criado!");
      }

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
            <Field>
              <label htmlFor="nome">Nome</label>

              <input
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Digite o nome"
              />
            </Field>

            <Field>
              <label htmlFor="sobrenome">Sobrenome</label>

              <input
                id="sobrenome"
                name="sobrenome"
                value={form.sobrenome}
                onChange={handleChange}
                placeholder="Digite o sobrenome"
              />
            </Field>

            <Field className="full">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="new-email"
                value={form.email}
                onChange={handleChange}
                placeholder="Digite o email"
              />
            </Field>
          </Fields>
        </Section>

        <Section>
          <SectionTitle>Informações Físicas</SectionTitle>

          <Fields>
            <Field>
              <label htmlFor="idade">Idade</label>

              <input
                id="idade"
                name="idade"
                type="number"
                value={form.idade}
                onChange={handleChange}
                placeholder="Idade"
              />
            </Field>

            <Field>
              <label htmlFor="peso">Peso (kg)</label>

              <input
                id="peso"
                name="peso"
                type="number"
                step="0.1"
                value={form.peso}
                onChange={handleChange}
                placeholder="Peso"
              />
            </Field>

            <Field className="full">
              <label htmlFor="altura">Altura (m)</label>

              <input
                id="altura"
                name="altura"
                type="number"
                step="0.01"
                value={form.altura}
                onChange={handleChange}
                placeholder="Altura"
              />
            </Field>
          </Fields>
        </Section>

        <Section>
          <SectionTitle>Segurança</SectionTitle>

          <Fields>
            <Field className="full">
              <label htmlFor="password">
                {id ? "Nova senha (opcional)" : "Senha"}
              </label>

              <input
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
            </Field>
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
