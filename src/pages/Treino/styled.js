import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
  color: #f1f5f9;
  margin: 20px 0 35px;
  font-size: 32px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 30px;
`;

export const Section = styled.section`
  background: #1e293b;

  border: 1px solid #334155;

  border-radius: 16px;

  padding: 24px;

  display: flex;
  flex-direction: column;

  gap: 24px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

export const SectionTitle = styled.h2`
  color: #f8fafc;

  font-size: 22px;

  font-weight: 700;

  margin: 0;

  padding-bottom: 12px;

  border-bottom: 1px solid #334155;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 20px;
  }
`;

export const Fields = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;

  &.full {
    grid-column: 1 / -1;
  }

  label {
    color: #f8fafc;

    font-size: 15px;

    font-weight: 600;
  }

  input,
  select {
    width: 100%;

    height: 48px;

    padding: 0 14px;

    border-radius: 10px;

    border: 1px solid #334155;

    background: #0f172a;

    color: #f8fafc;

    font-size: 15px;

    transition: 0.2s;

    &::placeholder {
      color: #94a3b8;
    }

    &:focus {
      outline: none;

      border-color: ${primaryColor};

      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
    }
  }
`;

export const Search = styled.input`
  width: 100%;

  height: 48px;

  padding: 0 16px;

  border-radius: 10px;

  border: 1px solid #334155;

  background: #0f172a;

  color: white;

  font-size: 15px;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;

    border-color: ${primaryColor};

    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
  }
`;

export const Select = styled.select`
  width: 100%;

  height: 48px;

  padding: 0 14px;

  border-radius: 10px;

  border: 1px solid #334155;

  background: #0f172a;

  color: white;

  font-size: 15px;

  appearance: none;

  cursor: pointer;

  &:focus {
    outline: none;

    border-color: ${primaryColor};

    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
  }
`;

export const ExercicioGrid = styled.div`
  display: flex;

  flex-direction: column;

  gap: 12px;

  max-height: 500px;

  overflow-y: auto;

  padding-right: 6px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #0f172a;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #64748b;
  }
`;

export const SaveButton = styled.button`
  width: 260px;

  height: 52px;

  margin: 0 auto;

  border-radius: 10px;

  font-size: 16px;

  font-weight: bold;

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardFotos = styled.div`
  width: 100%;

  aspect-ratio: 1;

  overflow: hidden;

  border-radius: 10px;

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
