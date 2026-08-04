import { useState } from 'react'

const initialForm = {
  email: '',
  password: '',
  role: 'user'
}

export function useLoginForm() {
  const [form, setForm] = useState(initialForm)

  const handleChange = ({ target }) => {
    const { name, value } = target

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return {
    form,
    handleChange,
    setForm,
    initialForm
  }
}
