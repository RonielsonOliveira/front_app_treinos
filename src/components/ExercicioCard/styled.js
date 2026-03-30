import styled from "styled-components";
import { primaryColor, primaryDarkColor } from "../../config/colors.js";

export const ExercicioCheck = styled.label`
  display: block;
  width: 100%;

  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const Exercicio = styled.div`
  background-color: #1e293b;
  color: #f1f5f9;

  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  background: #0f172a;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    opacity: 0.5;
  }
`;

export const ExercicioInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
`;

export const ExercicioInfoTitle = styled.h3`
  font-size: 16px;
  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ExercicioInfoDetails = styled.p`
  font-size: 13px;
  opacity: 0.8;
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const CheckboxWrapper = styled.div`
  .checkbox {
    accent-color: ${primaryDarkColor};
  }

  input {
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`;
