import { toast } from "react-toastify";

import {
  createExercicio,
  updateExercicio,
  uploadFotos,
} from "../../services/exercicioService";

export async function salvarExercicio({
  id,
  payload,
  novasFotos,
  navigate,
  setNovasFotos,
}) {
  try {
    let exercicioId = id;

    if (id) {
      await updateExercicio(id, payload);

      toast.success("Exercício atualizado!");
    } else {
      const data = await createExercicio(payload);

      exercicioId = data.id;

      toast.success("Exercício criado!");

      navigate(`/exercicio/${exercicioId}/edit`);
    }

    if (novasFotos.length) {
      await uploadFotos(exercicioId, novasFotos);

      toast.success("Fotos enviadas!");

      setNovasFotos([]);
    }
  } catch {
    toast.error("Erro ao salvar exercício");
  }
}
