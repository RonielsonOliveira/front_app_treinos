import api from './axios'

export const getAlunos = async () => {
  const { data } = await api.get('/alunos')
  return data
}

export async function getTreinosAluno(alunoId) {
  const { data } = await api.get(`/alunos/${alunoId}/treinos`)

  return data
}
