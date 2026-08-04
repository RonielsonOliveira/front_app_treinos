import styled from 'styled-components'
import { primaryColor } from '../../config/colors'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  width: 100%;

  &.full {
    grid-column: 1 / -1;
  }

  label {
    color: #e2e8f0;
    font-size: 14px;
    font-weight: 700;
  }

  input,
  select,
  textarea {
    width: 100%;

    min-height: 52px;

    padding: 0 16px;

    border-radius: 4px;

    background: #0f172a;

    border: 1px solid #334155;

    color: #f8fafc;

    font-size: 15px;

    transition: 0.25s;

    &::placeholder {
      color: #64748b;
    }

    &:hover {
      border-color: #64748b;
    }

    &:focus {
      outline: none;
      border-color: ${primaryColor};
      box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.15);
    }
  }

  textarea {
    min-height: 120px;
    padding: 14px 16px;
    resize: vertical;
  }
`
