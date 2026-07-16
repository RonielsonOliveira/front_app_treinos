import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
  margin: 25px 0 40px;
  color: #f8fafc;
  font-size: clamp(26px, 4vw, 36px);
  font-weight: 800;
  letter-spacing: 0.4px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;
export const Form = styled.form`
  width: 100%;
  max-width: 720px;

  margin: 0 auto;

  padding: 28px;

  display: flex;
  flex-direction: column;

  gap: 22px;

  background: linear-gradient(180deg, #1e293b, #172033);

  border: 1px solid #334155;

  border-radius: 4px;

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  @media (max-width: 768px) {
    width: 90%;
    border-radius: 4px;
  }
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    color: #e2e8f0;

    font-size: 15px;

    font-weight: 600;
  }

  input {
    width: 100%;
    height: 54px;

    padding: 0 18px;

    background: #0f172a;

    border: 1px solid #334155;

    border-radius: 4px;

    color: #f8fafc;

    font-size: 15px;

    transition: 0.25s;

    &::placeholder {
      color: #64748b;
    }

    &:focus {
      outline: none;

      border-color: ${primaryColor};

      box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.18);

      transform: translateY(-1px);
    }
  }

  button {
    width: 50%;
    height: 56px;
    margin: 0 auto;
    margin-top: 8px;

    border: none;

    border-radius: 16px;

    background: ${primaryColor};

    color: white;

    font-size: 16px;

    font-weight: 700;

    cursor: pointer;

    transition: 0.25s;

    &:hover {
      transform: translateY(-2px);
      filter: brightness(1.05);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  @media (max-width: 768px) {
    padding: 22px;

    border-radius: 18px;
  }
`;
export const UploadBox = styled.label`
  width: 100%;

  height: 150px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 10px;

  background: #0f172a;

  border: 2px dashed #334155;

  border-radius: 8px;

  cursor: pointer;

  transition: 0.25s;

  span {
    color: #94a3b8;
    font-size: 38px;
  }

  p {
    color: #cbd5e1;
    font-size: 15px;
    font-weight: 600;
  }

  small {
    color: #64748b;
  }

  &:hover {
    border-color: ${primaryColor};

    background: rgba(34, 197, 94, 0.05);

    transform: translateY(-2px);

    span {
      color: ${primaryColor};
    }
  }

  input {
    display: none;
  }

  @media (max-width: 768px) {
    height: 130px;

    span {
      font-size: 32px;
    }
  }
`;
export const FotosGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));

  gap: 14px;

  width: 100%;

  margin-top: 10px;

  img {
    width: 100%;

    aspect-ratio: 1;

    object-fit: cover;

    border-radius: 14px;

    border: 2px solid #334155;

    transition: 0.25s;

    &:hover {
      transform: scale(1.04);

      border-color: ${primaryColor};

      box-shadow: 0 12px 22px rgba(0, 0, 0, 0.25);
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    gap: 10px;

    img {
      border-radius: 10px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
