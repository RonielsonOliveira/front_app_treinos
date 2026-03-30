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
export const UploadBox = styled.label`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #334155;
  border-radius: 8px;
  background: #1e293b;
  cursor: pointer;
  transition: all 0.2s ease;

  span {
    font-size: 28px;
    color: #94a3b8;
  }

  &:hover {
    border-color: ${primaryColor};
    background: rgba(34, 197, 94, 0.1);

    span {
      color: ${primaryColor};
    }
  }
  input {
    display: none;
  }
`;

export const FotosGrid = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0 auto;
  border: 2px solid #1e293b;
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
