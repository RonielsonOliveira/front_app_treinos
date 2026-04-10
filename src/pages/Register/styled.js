import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
  color: #f1f5f9;

  font-size: 22px;
  padding: 0 12px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Form = styled.form`
  width: 100%;
  padding: 0 12px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;

  input {
    width: 100%;
    height: 44px;
    padding: 0 12px;

    border: 1px solid #334155;
    border-radius: 8px;

    background: #1e293b;
    color: #f1f5f9;

    font-size: 14px;

    transition: all 0.2s ease;

    &::placeholder {
      color: #94a3b8;
    }

    &:focus {
      outline: none;
      border-color: ${primaryColor};
      box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
    }
  }

  @media (min-width: 768px) {
    align-items: center;
    gap: 16px;

    input {
      max-width: 400px;
      font-size: 16px;
    }
  }
`;
