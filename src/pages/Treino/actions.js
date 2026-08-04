import { toast } from 'react-toastify'
import { createTreino, updateTreino } from '../../services/treinoService'

export async function salvarTreino({
  id,
  payload,
  alunoOrigem,
  navigate,
  setIsSaving
}) {
  try {
    setIsSaving(true)

    if (id) {
      await updateTreino(id, payload)

      toast.success('Treino atualizado!')
    } else {
      await createTreino(payload)

      toast.success('Treino criado!')
    }

    const alunoId = alunoOrigem || payload.aluno_id

    navigate(`/alunos/${alunoId}/treinos`)
  } catch (err) {
    console.error(err)
    toast.error('Erro ao salvar treino')
  } finally {
    setIsSaving(false)
  }
}
