import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Loading from '../../components/Loading'
import FormInput from '../../components/FormInput'

import { Container, ImageLogin, LoginWrapper, Form, Title } from './styled'

import * as actions from '../../store/modules/auth/actions'

import { validateLogin } from './validation'
import { useLoginForm } from '../../hooks/useLoginForm.js'

import Imagem from '../../utils/Img/professor.jpg'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const isLoading = useSelector((state) => state.auth.isLoading)

  const { form, handleChange } = useLoginForm()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateLogin(form)) return

    dispatch(
      actions.loginRequest({
        ...form,
        prevPath: '/'
      })
    )
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <LoginWrapper>
        <ImageLogin>
          <img src={Imagem} alt="Professor" />
        </ImageLogin>

        <Form onSubmit={handleSubmit}>
          <Title>Login</Title>

          <FormInput
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Seu email"
          />

          <FormInput
            label="Senha"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Sua senha"
          />

          <label>Perfil</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="user">Professor</option>
            <option value="aluno">Aluno</option>
          </select>

          <button type="submit">Acessar</button>
        </Form>
      </LoginWrapper>
    </Container>
  )
}
