import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
  color: #f1f5f9;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
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
    max-width: 400px;
    height: 44px;

    padding: 0 12px;

    border: 1px solid #334155;
    border-radius: 8px;

    background: #1e293b;
    color: #f1f5f9;

    font-size: 16px;

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
    height: 48px;
    border: none;
    border-radius: 8px;
    background-color: ${primaryColor};
    color: #fff;
    font-weight: 600;
    transition: all 0.2s ease;

    &:active {
      transform: scale(0.97);
    }
  }

  label {
    width: 100%;
    max-width: 400px;
  }
  @media (min-width: 768px) {
    gap: 16px;
  }
`;
export const UploadBox = styled.label`
  height: 110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #334155;
  border-radius: 8px;
  background: #1e293b;
  transition: all 0.2s ease;

  span {
    font-size: 24px;
    color: #94a3b8;
  }

  &:active {
    background: rgba(34, 197, 94, 0.15);
  }

  @media (min-width: 768px) {
    height: 120px;

    &:hover {
      border-color: ${primaryColor};
      background: rgba(34, 197, 94, 0.1);
      span {
        color: ${primaryColor};
      }
    }
  }

  input {
    display: none;
  }
`;
export const FotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 8px;

  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  padding: 8px;
  border: 1px solid #1e293b;
  border-radius: 8px;

  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 6px;
  }

  @media (min-width: 768px) {
    gap: 12px;

    img {
      height: 100px;
    }
  }
`;
