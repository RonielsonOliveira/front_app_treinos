import { toast } from 'react-toastify'

export function validateAluno(form, isEdit) {
  if (form.nome.trim().length < 3) {
    toast.error('Nome precisa ter pelo menos 3 caracteres')
    return false
  }

  if (form.sobrenome.trim().length < 3) {
    toast.error('Sobrenome precisa ter pelo menos 3 caracteres')
    return false
  }

  if (!isEdit && form.password.length < 6) {
    toast.error('Senha precisa ter pelo menos 6 caracteres')
    return false
  }

  return true
}
