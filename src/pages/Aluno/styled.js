import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #f8fafc;
  margin: 25px 0 40px;
  font-size: clamp(26px, 4vw, 36px);
  font-weight: 800;
  letter-spacing: -0.5px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-bottom: 40px;
`;

export const Section = styled.section`
  width: 95%;
  background: linear-gradient(145deg, #1e293b, #172033);
  border: 1px solid #334155;
  border-radius: 4px;
  margin: 0 auto;
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
  transition: 0.3s;

  &:hover {
    border-color: #475569;
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 4px;
  }
`;

export const SectionTitle = styled.h2`
  color: #f8fafc;
  font-size: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #334155;

  &::before {
    content: "";
    width: 5px;
    height: 24px;
    border-radius: 999px;
    background: ${primaryColor};
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
    grid-column: 1 / -1;
  }

  label {
    color: #e2e8f0;
    font-size: 14px;
    font-weight: 700;
  }

  input {
    height: 52px;
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
  border: none;
  border-radius: 16px;
  background: ${primaryColor};
  color: white;
  font-size: 17px;
  font-weight: 800;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 18px;

  img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 16px;
    border: 2px solid #334155;
    background: #0f172a;
    transition: 0.25s;

    &:hover {
      transform: scale(1.05);
      border-color: ${primaryColor};
      box-shadow: 0 10px 25px rgba(34, 197, 94, 0.25);
    }
  }
`;
