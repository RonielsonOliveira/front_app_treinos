import { useEffect, useState } from "react";
import { get } from "lodash";
import { toast } from "react-toastify";

import { getFotosExercicio } from "../services/fotoService";

export default function useFotos(id) {
  const [fotos, setFotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function carregarFotos() {
      try {
        const data = await getFotosExercicio(id);

        setFotos(get(data, "FotoExercicios", []).map((foto) => foto.url));
      } catch {
        toast.error("Erro ao carregar imagens");
      } finally {
        setIsLoading(false);
      }
    }

    carregarFotos();
  }, [id]);

  return {
    fotos,
    setFotos,
    isLoading,
    setIsLoading,
  };
}
