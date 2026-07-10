import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Title = styled.h1`
  text-align: center;
  color: #f8fafc;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    margin-bottom: 30px;
  }
`;

export const Container = styled.section`
  width: min(100%, 1000px);

  margin: 30px auto;

  padding: 45px;

  background: #0f172a;

  border-radius: 24px;

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);

  @media (max-width: 900px) {
    width: 95%;
    padding: 30px;
  }

  @media (max-width: 600px) {
    width: calc(100% - 20px);

    padding: 20px;

    border-radius: 18px;

    margin: 10px auto;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;

  .fields {
    display: grid;

    grid-template-columns: repeat(2, minmax(280px, 1fr));

    gap: 28px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .field.full {
    grid-column: 1 / -1;
  }

  label {
    color: #cbd5e1;

    font-size: 14px;

    font-weight: 600;

    letter-spacing: 0.3px;
  }

  input {
    height: 52px;

    padding: 0 18px;

    border: 1px solid #334155;

    border-radius: 12px;

    background: #1e293b;

    color: #fff;

    font-size: 15px;

    transition: 0.25s;

    &::placeholder {
      color: #64748b;
    }

    &:focus {
      outline: none;

      border-color: ${primaryColor};

      box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.15);
    }
  }

  button {
    align-self: center;

    width: 240px;

    height: 52px;

    border-radius: 12px;

    font-size: 16px;

    font-weight: 600;

    transition: 0.25s;

    &:hover {
      transform: translateY(-2px);

      filter: brightness(0.95);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  @media (max-width: 900px) {
    .fields {
      grid-template-columns: 1fr;
    }

    .field {
      align-items: center;
    }

    label {
      text-align: center;
    }

    input {
      width: min(100%, 420px);
    }

    button {
      width: min(100%, 420px);
    }
  }

  @media (max-width: 500px) {
    gap: 25px;

    .fields {
      gap: 20px;
    }

    input {
      height: 48px;

      font-size: 14px;
    }

    button {
      height: 48px;
    }
  }
`;

export const FotosGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));

  gap: 15px;

  margin-top: 20px;

  img {
    width: 100%;

    aspect-ratio: 1;

    object-fit: cover;

    border-radius: 12px;

    border: 2px solid #334155;

    transition: 0.25s;

    &:hover {
      transform: scale(1.05);

      border-color: ${primaryColor};
    }
  }
`;
