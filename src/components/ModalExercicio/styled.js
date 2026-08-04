import styled from 'styled-components'
import { primaryColor } from '../../config/colors'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.65);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
`

export const Container = styled.div`
  width: 420px;
  max-width: 95%;

  background: #1e293b;

  border-radius: 16px;

  padding: 25px;

  color: white;

  img {
    width: 100%;
    height: 230px;

    object-fit: cover;

    border-radius: 10px;

    margin-bottom: 20px;
  }

  h2 {
    text-align: center;
    margin-bottom: 25px;
  }

  .campo {
    display: flex;
    flex-direction: column;

    margin-bottom: 18px;
  }

  label {
    margin-bottom: 8px;
  }

  input {
    height: 45px;

    border-radius: 8px;

    border: 1px solid #475569;

    background: #0f172a;

    color: white;

    padding: 0 12px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;

    gap: 10px;

    margin-top: 20px;
  }
  .remove {
    background: #dc2626;

    &:hover {
      background: #b91c1c;
    }
  }

  .cancel {
    background: #64748b;
  }

  .confirm {
    background: ${primaryColor};
  }
`
