import { deleteAluno } from '../../services/alunoService'
import { toast } from 'react-toastify'

export async function excluirAluno(alunoExcluir, setAlunos, fecharModal) {
  try {
    await deleteAluno(alunoExcluir.id)

    setAlunos((prev) => prev.filter((aluno) => aluno.id !== alunoExcluir.id))

    fecharModal()

    toast.success('Aluno excluído com sucesso!')
  } catch (error) {
    console.error(error)
    toast.error('Erro ao excluir aluno')
  }
}
