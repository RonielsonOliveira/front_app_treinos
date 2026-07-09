import axios from "./axios";

export async function createTreino(payload) {
  const { data } = await axios.post("/treinos", payload);
  return data;
}

export async function updateTreino(id, payload) {
  await axios.put(`/treinos/${id}`, payload);
}
export const deleteTreino = async (id) => {
  const { data } = await axios.delete(`/treinos/${id}`);
  return data;
};
