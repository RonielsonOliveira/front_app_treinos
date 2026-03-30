import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
  color: #f1f5f9;
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  input {
    width: 100%;
    max-width: 400px;
    height: 44px;
    padding: 0 12px;
    border: 1px solid #334155;
    border-radius: 8px;
    background: #1e293b;
    color: #f1f5f9;
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
  button {
    width: 100%;
    max-width: 400px;
    height: 44px;
    border: none;
    border-radius: 8px;
    background-color: ${primaryColor};
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      filter: brightness(0.9);
    }
    &:active {
      transform: scale(0.98);
    }
  }
  label {
    width: 100%;
    max-width: 400px;
  }
`;

export const Select = styled.select`
  width: 100%;
  max-width: 400px;
  height: 44px;

  padding: 0 12px;

  border: 1px solid #334155;
  border-radius: 8px;

  background: #1e293b;
  color: #f1f5f9;

  appearance: none;

  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${primaryColor};
    box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.2);
  }
`;
export const ExercicioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  width: 100%;
  margin-top: 20px;
`;
export const CardFotos = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible;

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
    object-position: center;
    display: block;
  }
`;
