import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Form, Title, Container } from "./styled";
import Loading from "../../components/Loading";

import useAluno from "../../hooks/useAluno";
import { createAluno, updateAluno } from "../../services/alunoService";

export default function Aluno() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { aluno, isLoading } = useAluno(id);

  const [form, setForm] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    idade: "",
    peso: "",
    altura: "",
    password: "",
  });

  useEffect(() => {
    if (!aluno) return;

    setForm((prev) => ({
      ...prev,
      nome: aluno.nome,
      sobrenome: aluno.sobrenome,
      email: aluno.email,
      idade: aluno.idade || "",
      peso: aluno.peso || "",
      altura: aluno.altura || "",
    }));
  }, [aluno]);

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

    if (form.password) payload.password = form.password;

    try {
      if (id) {
        await updateAluno(id, payload);
        toast.success("Aluno atualizado!");
      } else {
        const data = await createAluno(payload);
        toast.success("Aluno criado!");
        navigate(`/aluno/${data.id}/edit`);
      }
    } catch {
      toast.error("Erro ao salvar aluno");
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>{id ? "Editar aluno" : "Novo aluno"}</Title>

      <Form onSubmit={handleSubmit}>
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          name="sobrenome"
          value={form.sobrenome}
          onChange={handleChange}
          placeholder="Sobrenome"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <input
          name="idade"
          type="number"
          value={form.idade}
          onChange={handleChange}
          placeholder="Idade"
        />

        <input
          name="peso"
          type="number"
          step="0.1"
          value={form.peso}
          onChange={handleChange}
          placeholder="Peso"
        />

        <input
          name="altura"
          type="number"
          step="0.01"
          value={form.altura}
          onChange={handleChange}
          placeholder="Altura"
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder={id ? "Nova senha (opcional)" : "Senha"}
        />

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
