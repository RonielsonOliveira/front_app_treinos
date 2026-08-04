import styled from 'styled-components'
import { primaryColor } from '../../config/colors'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;

  border-radius: 8px;
  border: 1px solid #334155;

  background: #1e293b;
  color: white;

  &:focus {
    border-color: ${primaryColor};
  }
`

export const Lista = styled.div`
  position: absolute;

  top: 100%;
  left: 0;
  right: 0;

  margin-top: 5px;

  background: #1f2937;

  border-radius: 8px;

  max-height: 250px;

  overflow-y: auto;

  z-index: 50;
`

export const Item = styled.div`
  padding: 12px 16px;

  cursor: pointer;

  transition: 0.2s;

  color: white;

  &:hover {
    background: ${primaryColor};
  }
`

export const Empty = styled.div`
  padding: 16px;
  color: #94a3b8;
  text-align: center;
`
