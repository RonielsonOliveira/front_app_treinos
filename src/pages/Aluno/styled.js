import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Title = styled.h1`
  text-align: center;
  color: #f1f5f9;
  margin-top: 20px;
`;
export const Container = styled.section`
  width: 70%;
  height: 80%;
  margin: 20px auto;
  padding: 80px;
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
export const Form = styled.form`
  margin-top: 10px;
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
    text-align: center;
    max-width: 100%;
    font-size: 20px;
    color: white;
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

export const ProfilePicture = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 30px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50px;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;
export const FotosGrid = styled.div`
  display: flex;

  gap: 0.5rem;
  margin: 0 auto;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }
`;
