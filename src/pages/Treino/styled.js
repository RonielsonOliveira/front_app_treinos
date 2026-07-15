import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  width: 100%;
  text-align: center;

  color: #f8fafc;

  margin: 25px 0 40px;

  font-size: clamp(26px, 4vw, 36px);

  font-weight: 800;

  letter-spacing: -0.5px;

  span {
    color: ${primaryColor};
  }
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 28px;

  padding-bottom: 100px;
`;

export const Section = styled.section`
  width: 100%;

  background: linear-gradient(145deg, #1e293b, #172033);

  border: 1px solid #334155;

  border-radius: 22px;

  padding: 28px;

  display: flex;
  flex-direction: column;

  gap: 25px;

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);

  transition: 0.3s;

  &:hover {
    border-color: #475569;
  }

  @media (max-width: 768px) {
    padding: 20px;

    border-radius: 18px;
  }
`;

export const SectionTitle = styled.h2`
  color: #f8fafc;

  font-size: 22px;

  font-weight: 700;

  display: flex;

  align-items: center;

  gap: 10px;

  margin: 0;

  padding-bottom: 15px;

  border-bottom: 1px solid #334155;

  &::before {
    content: "";

    width: 5px;

    height: 24px;

    background: ${primaryColor};

    border-radius: 20px;
  }

  @media (max-width: 768px) {
    font-size: 19px;
  }
`;

export const Fields = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 22px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;

  flex-direction: column;

  gap: 9px;

  &.full {
    grid-column: 1/-1;
  }

  label {
    color: #e2e8f0;

    font-size: 14px;

    font-weight: 700;
  }

  input,
  select {
    height: 52px;

    padding: 0 16px;

    border-radius: 14px;

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
`;

export const Search = styled.input`
  height: 52px;

  width: 100%;

  padding: 0 18px;

  border-radius: 14px;

  background: #0f172a;

  border: 1px solid #334155;

  color: white;

  font-size: 15px;

  transition: 0.2s;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    outline: none;

    border-color: ${primaryColor};

    box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.15);
  }
`;

export const Select = styled.select`
  cursor: pointer;

  appearance: auto;
`;

export const ExercicioGrid = styled.div`
  display: flex;

  flex-direction: column;

  gap: 14px;

  max-height: 560px;

  overflow-y: auto;

  padding-right: 8px;

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
    background: ${primaryColor};
  }
`;

export const SaveBar = styled.div`
  display: flex;

  justify-content: center;

  padding-top: 10px;

  @media (max-width: 768px) {
    position: sticky;

    bottom: 10px;

    background: #020617;

    padding: 15px;

    border-radius: 18px;

    z-index: 20;
  }
`;

export const SaveButton = styled.button`
  width: 280px;
  height: 56px;
  margin: 0 auto;
  border: none;
  border-radius: 16px;

  background: ${({ disabled }) => (disabled ? "#64748b" : primaryColor)};

  color: white;

  font-size: 17px;
  font-weight: 800;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  transition: all 0.25s ease;

  box-shadow: ${({ disabled }) =>
    disabled ? "none" : "0 10px 25px rgba(34,197,94,.25)"};

  opacity: ${({ disabled }) => (disabled ? 0.85 : 1)};

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
        transform: translateY(-3px);
        filter: brightness(1.1);
      `}
  }

  &:active {
    ${({ disabled }) =>
      !disabled &&
      `
        transform: scale(.97);
      `}
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardFotos = styled.div`
  width: 100%;

  aspect-ratio: 1;

  overflow: hidden;

  border-radius: 18px;

  background: #0f172a;

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

export const DayBadge = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;

  padding: 8px 14px;

  border-radius: 999px;

  background: ${primaryColor};

  color: white;

  font-size: 13px;

  font-weight: 700;

  width: max-content;
`;
