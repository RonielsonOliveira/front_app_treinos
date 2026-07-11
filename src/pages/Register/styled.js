import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
  color: #f8fafc;

  margin-bottom: 10px;

  font-size: 32px;
  font-weight: 700;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  text-align: center;

  color: #94a3b8;

  margin-bottom: 35px;

  font-size: 15px;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 460px;

  margin: 0 auto;

  padding: 35px;

  background: #1e293b;

  border: 1px solid #334155;
  border-radius: 18px;

  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;

  gap: 22px;

  @media (max-width: 768px) {
    padding: 24px 18px;
    border-radius: 16px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    color: #f8fafc;
    font-size: 15px;
    font-weight: 600;
  }

  input {
    width: 100%;
    height: 50px;

    padding: 0 16px;

    border: 1px solid #334155;
    border-radius: 10px;

    background: #0f172a;

    color: white;

    font-size: 15px;

    transition: 0.2s;

    &::placeholder {
      color: #94a3b8;
    }

    &:focus {
      outline: none;
      border-color: ${primaryColor};
      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.18);
    }
  }

  button {
    width: 100%;
    height: 52px;

    margin-top: 10px;

    border-radius: 10px;

    font-size: 16px;
    font-weight: 700;

    transition: 0.2s;

    &:hover {
      transform: translateY(-2px);
      filter: brightness(1.05);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;
