import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95));

  padding: 20px;
`;

export const LoginWrapper = styled.div`
  width: 900px;
  max-width: 100%;

  min-height: 550px;

  display: flex;

  background: #ffffff;

  border-radius: 24px;

  overflow: hidden;

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.45);

  @media (max-width: 768px) {
    min-height: auto;
  }
`;

export const ImageLogin = styled.div`
  width: 50%;

  position: relative;

  &::after {
    content: "";

    position: absolute;
    inset: 0;

    background: linear-gradient(
      90deg,
      rgba(15, 23, 42, 0.2),
      rgba(15, 23, 42, 0.8)
    );
  }

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Form = styled.form`
  width: 50%;

  padding: 50px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  gap: 18px;

  background: #ffffff;

  @media (max-width: 768px) {
    width: 100%;

    padding: 35px 25px;
  }

  input,
  select {
    width: 100%;

    height: 52px;

    border-radius: 12px;

    border: 1px solid #d1d5db;

    padding: 0 16px;

    font-size: 15px;

    color: #111827;

    background: #f8fafc;

    transition: 0.3s;

    &:focus {
      outline: none;

      border-color: ${primaryColor};

      background: white;

      box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.15);
    }
  }

  select {
    cursor: pointer;
  }

  button {
    width: 100%;

    height: 54px;

    margin-top: 15px;

    border-radius: 14px;

    background: ${primaryColor};

    color: white;

    font-size: 16px;

    font-weight: 700;

    letter-spacing: 0.5px;

    transition: 0.3s;

    &:hover {
      transform: translateY(-3px);

      filter: brightness(1.1);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const Title = styled.h1`
  text-align: center;

  color: #0f172a;

  font-size: 36px;

  font-weight: 800;

  margin-bottom: 20px;

  span {
    color: ${primaryColor};
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
