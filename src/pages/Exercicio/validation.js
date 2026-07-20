import { toast } from "react-toastify";

export function validateExercicio(form) {
  if (form.nome.length < 3) {
    toast.error("Nome precisa ter pelo menos 3 caracteres");
    return false;
  }

  if (form.descricao.length < 3) {
    toast.error("Descrição precisa ter pelo menos 3 caracteres");
    return false;
  }

  return true;
}
