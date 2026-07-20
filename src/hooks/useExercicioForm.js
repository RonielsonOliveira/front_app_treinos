import { useEffect, useState } from "react";
import { get } from "lodash";

const initialForm = {
  nome: "",
  descricao: "",
};

export function useExercicioForm(exercicio) {
  const [form, setForm] = useState(initialForm);
  const [fotos, setFotos] = useState([]);
  const [novasFotos, setNovasFotos] = useState([]);

  useEffect(() => {
    if (!exercicio) {
      setForm(initialForm);
      setFotos([]);
      return;
    }

    setForm({
      nome: exercicio.nome || "",
      descricao: exercicio.descricao || "",
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
    const arquivos = Array.from(e.target.files);

    setNovasFotos((prev) => {
      const novas = arquivos.filter(
        (arquivo) =>
          !prev.some(
            (foto) => foto.name === arquivo.name && foto.size === arquivo.size
          )
      );

      return [...prev, ...novas];
    });

    e.target.value = "";
  };

  const removerNovaFoto = (index) => {
    setNovasFotos((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    form,
    fotos,
    novasFotos,
    handleChange,
    handleFotoChange,
    removerNovaFoto,
    setNovasFotos,
  };
}
