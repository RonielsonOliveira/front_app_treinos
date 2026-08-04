import styled from 'styled-components'
import { primaryColor } from '../../config/colors.js'

export const Title = styled.h1`
  background: ${primaryColor};
  border-radius: 4px;
  color: #fff;
  justify-content: center;
  align-items: center;
  display: flex;
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: aqua;
  }
`

export const Paragrafo = styled.p`
  font-size: 80px;
`
