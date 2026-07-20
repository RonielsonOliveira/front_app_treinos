import { toast } from "react-toastify";
import { deleteExercicio } from "../../services/exerciciosService";

export async function excluirExercicio(id, setExercicios, setIsLoading) {
  try {
    setIsLoading(true);

    await deleteExercicio(id);

    setExercicios((prev) => prev.filter((exercicio) => exercicio.id !== id));

    toast.success("Exercício excluído!");
  } catch {
    toast.error("Erro ao excluir exercício");
  } finally {
    setIsLoading(false);
  }
}
