import { useState, useEffect } from "react";

export function useAlunoForm(aluno) {
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

  useEffect(() => {
    if (!aluno) {
      setForm(initialForm);
      return;
    }

    setForm({
      nome: aluno.nome || "",
      sobrenome: aluno.sobrenome || "",
      email: aluno.email || "",
      idade: aluno.idade || "",
      peso: aluno.peso || "",
      altura: aluno.altura || "",
      password: "",
    });
  }, [aluno]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    form,
    setForm,
    handleChange,
    initialForm,
  };
}
