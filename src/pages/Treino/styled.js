import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
  color: #f1f5f9;
`;

export const Form = styled.form`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  width: 100%;
  padding: 0 12px;

  input {
    width: 100%;
    max-width: 100%;
    height: 48px;

    padding: 0 12px;

    border: 1px solid #334155;
    border-radius: 8px;

    background: #1e293b;
    color: #f1f5f9;

    font-size: 16px;

    &::placeholder {
      color: #94a3b8;
    }

    &:focus {
      outline: none;
      border-color: ${primaryColor};
      box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
    }
  }

  button {
    width: 100%;
    max-width: 100%;
    height: 48px;

    border-radius: 8px;

    &:active {
      transform: scale(0.97);
    }
  }

  label {
    width: 100%;
    max-width: 100%;
  }

  @media (min-width: 768px) {
    input,
    button,
    label {
      max-width: 400px;
    }

    gap: 16px;
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 100%;
  height: 48px;

  padding: 0 12px;

  border: 1px solid #334155;
  border-radius: 8px;

  background: #1e293b;
  color: #f1f5f9;

  font-size: 16px;

  appearance: none;

  @media (min-width: 768px) {
    max-width: 400px;
  }
`;
export const ExercicioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;

  width: 100%;
  margin-top: 20px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (min-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;
export const CardFotos = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
