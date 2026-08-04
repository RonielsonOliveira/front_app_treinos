import axios from './axios'

export async function getAluno(id) {
  const { data } = await axios.get(`/alunos/${id}`)
  return data
}

export async function createAluno(payload) {
  const { data } = await axios.post('/alunos', payload)
  return data
}

export async function updateAluno(id, payload) {
  await axios.put(`/alunos/${id}`, payload)
}
export function deleteAluno(id) {
  return axios.delete(`/alunos/${id}`)
}
