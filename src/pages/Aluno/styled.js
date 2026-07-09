import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;

  color: #f1f5f9;

  margin-top: 20px;

  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Container = styled.section`
  width: 70%;

  min-height: 80%;

  margin: 20px auto;

  padding: 60px;

  border-radius: 30px;

  background: #0f172a;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    width: 85%;

    padding: 40px;
  }

  @media (max-width: 768px) {
    width: 95%;

    padding: 30px 20px;

    border-radius: 20px;
  }

  @media (max-width: 480px) {
    width: 100%;

    margin: 0;

    padding: 25px 15px;

    border-radius: 0;
  }
`;

export const Form = styled.form`
  margin-top: 40px;

  display: flex;

  flex-direction: column;

  gap: 30px;

  .fields {
    display: grid;

    grid-template-columns: repeat(2, 1fr);

    gap: 25px;

    width: 100%;
  }

  .field {
    display: flex;

    flex-direction: column;

    gap: 8px;
  }

  .field.full {
    grid-column: 1 / -1;
  }

  label {
    color: #f1f5f9;

    font-size: 15px;

    font-weight: 600;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  input {
    width: 100%;

    max-width: 420px;

    height: 48px;

    padding: 0 14px;

    border: 1px solid #334155;

    border-radius: 10px;

    background: #1e293b;

    color: #f8fafc;

    font-size: 16px;

    transition: 0.2s;

    align-self: center;

    &::placeholder {
      color: #94a3b8;
    }

    &:focus {
      outline: none;

      border-color: ${primaryColor};

      box-shadow: 0 0 0 3px rgba(34, 197, 60, 0.15);
    }

    @media (max-width: 768px) {
      width: 90%;
      max-width: 350px;
      height: 46px;
    }

    @media (max-width: 480px) {
      width: 85%;
      max-width: 320px;
      font-size: 15px;
    }
  }

  button {
    width: 220px;

    height: 48px;

    margin: 0 auto;

    border-radius: 10px;

    font-size: 16px;

    transition: 0.2s;

    &:hover {
      filter: brightness(90%);
    }

    &:active {
      transform: scale(0.97);
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    .fields {
      grid-template-columns: 1fr;

      gap: 20px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 25px;

    gap: 20px;

    input {
      height: 46px;

      font-size: 15px;
    }

    label {
      font-size: 14px;
    }
  }
`;

export const FotosGrid = styled.div`
  display: flex;

  flex-wrap: wrap;

  justify-content: center;

  gap: 0.5rem;

  margin: 0 auto;

  img {
    width: 80px;

    height: 80px;

    object-fit: cover;

    border-radius: 8px;

    @media (max-width: 480px) {
      width: 65px;

      height: 65px;
    }
  }
`;
