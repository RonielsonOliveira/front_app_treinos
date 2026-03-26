import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { get } from "lodash";

import { Container } from "../../styles/GlobalStyles";
import { Form, Title, FotosGrid } from "./styled";

import Loading from "../../components/Loading";
import FotosPreview from "../../components/FotosPreview";

import useExercicio from "../../hooks/useExercicio";

import {
  createExercicio,
  updateExercicio,
  uploadFotos,
} from "../../services/exercicioService";

export default function Exercicio() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { exercicio, isLoading } = useExercicio(id);

  const [form, setForm] = useState({
    nome: "",
    descricao: "",
    numerodeSeries: "",
    numerodeRepeticoes: "",
  });

  const [fotos, setFotos] = useState([]);
  const [novasFotos, setNovasFotos] = useState([]);

  useEffect(() => {
    if (!exercicio) return;

    setForm({
      nome: exercicio.nome,
      descricao: exercicio.descricao,
      numerodeSeries: exercicio.numerodeSeries,
      numerodeRepeticoes: exercicio.numerodeRepeticoes,
    });

    setFotos(get(exercicio, "FotoExercicios", []));
  }, [exercicio]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFotoChange = (e) => {
    setNovasFotos(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.nome.length < 3 || form.descricao.length < 3) {
      toast.error("Nome e descrição precisam ter pelo menos 3 caracteres");
      return;
    }

    try {
      let exercicioId = id;

      if (id) {
        await updateExercicio(id, form);
        toast.success("Exercício atualizado!");
      } else {
        const data = await createExercicio(form);
        exercicioId = data.id;
        navigate(`/exercicio/${exercicioId}/edit`);
        toast.success("Exercício criado!");
      }

      if (novasFotos.length > 0) {
        await uploadFotos(exercicioId, novasFotos);

        toast.success("Fotos enviadas!");
        setNovasFotos([]);
      }
    } catch {
      toast.error("Erro ao salvar exercício");
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <Title>{id ? "Editar exercício" : "Novo exercício"}</Title>

      <Form onSubmit={handleSubmit}>
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Nome"
        />

        <input
          name="descricao"
          value={form.descricao}
          onChange={handleChange}
          placeholder="Descrição"
        />

        <input
          name="numerodeSeries"
          type="number"
          value={form.numerodeSeries}
          onChange={handleChange}
          placeholder="Número de séries"
        />

        <input
          name="numerodeRepeticoes"
          type="number"
          value={form.numerodeRepeticoes}
          onChange={handleChange}
          placeholder="Número de repetições"
        />

        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          onChange={handleFotoChange}
        />

        <FotosGrid>
          <FotosPreview fotos={fotos} novasFotos={novasFotos} />
        </FotosGrid>

        <button type="submit">Salvar</button>
      </Form>
    </Container>
  );
}
