import { useNavigate } from 'react-router-dom'
import { FaHome, FaArrowLeft } from 'react-icons/fa'

import { Container } from '../../styles/GlobalStyles'

import * as S from './styled'

export default function Page404() {
  const navigate = useNavigate()

  return (
    <Container>
      <S.Content>
        <S.Code>404</S.Code>

        <S.Title>Página não encontrada</S.Title>

        <S.Description>
          A página que você tentou acessar não existe ou foi movida. Verifique o
          endereço informado ou volte para a página inicial.
        </S.Description>

        <S.Buttons>
          <S.PrimaryButton onClick={() => navigate('/')}>
            <FaHome />
            Página Inicial
          </S.PrimaryButton>

          <S.SecondaryButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
            Voltar
          </S.SecondaryButton>
        </S.Buttons>
      </S.Content>
    </Container>
  )
}
