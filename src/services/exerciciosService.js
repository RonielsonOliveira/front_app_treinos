import axios from './axios'

export async function getExercicios() {
  const { data } = await axios.get('/exercicios')
  return data
}

export async function deleteExercicio(id) {
  await axios.delete(`/exercicios/${id}`)
}
