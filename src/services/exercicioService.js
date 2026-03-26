import axios from "./axios";

export async function getExercicio(id) {
  const { data } = await axios.get(`/exercicios/${id}`);
  return data;
}

export async function createExercicio(payload) {
  const { data } = await axios.post("/exercicios", payload);
  return data;
}

export async function updateExercicio(id, payload) {
  await axios.put(`/exercicios/${id}`, payload);
}

export async function uploadFotos(exercicioId, fotos) {
  const formData = new FormData();
  formData.append("exercicio_id", exercicioId);

  fotos.forEach((file) => {
    formData.append("fotoexercicio", file);
  });

  await axios.post("/fotos", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
}
