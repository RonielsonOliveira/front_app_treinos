import axios from './axios'

export async function getFotosExercicio(id) {
  const { data } = await axios.get(`/exercicios/${id}`)

  return data
}

export async function uploadFoto(exercicioId, file) {
  const formData = new FormData()

  formData.append('exercicio_id', exercicioId)
  formData.append('foto', file)

  const { data } = await axios.post('/fotos', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return data
}
