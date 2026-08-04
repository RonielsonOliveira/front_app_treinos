import { toast } from 'react-toastify'
import { isEmail } from 'validator'

export function validateLogin(form) {
  if (!isEmail(form.email)) {
    toast.error('Email inválido')
    return false
  }

  if (form.password.length < 6) {
    toast.error('Senha inválida')
    return false
  }

  return true
}
