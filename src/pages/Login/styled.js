import styled from "styled-components";
import { primaryColor } from "../../config/colors.js";

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;

  background:
    radial-gradient(
      circle at top left,
      rgba(34, 197, 94, 0.12),
      transparent 35%
    ),
    radial-gradient(
      circle at bottom right,
      rgba(34, 197, 94, 0.08),
      transparent 40%
    ),
    linear-gradient(135deg, #020617 0%, #0f172a 45%, #111827 100%);
`;

export const LoginWrapper = styled.div`
  width: min(1100px, 100%);

  min-height: 620px;

  display: grid;
  grid-template-columns: 1.1fr 0.9fr;

  overflow: hidden;

  border-radius: 28px;

  background: rgba(15, 23, 42, 0.96);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(18px);

  box-shadow:
    0 35px 80px rgba(0, 0, 0, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

export const ImageLogin = styled.div`
  position: relative;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    transition: 0.7s;
  }

  &:hover img {
    transform: scale(1.08);
  }

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    background: linear-gradient(
      120deg,
      rgba(2, 6, 23, 0.15),
      rgba(15, 23, 42, 0.55),
      rgba(2, 6, 23, 0.85)
    );

    z-index: 1;
  }

  &::after {
    content: "Treinos Personalizados";

    position: absolute;

    left: 45px;
    bottom: 45px;

    z-index: 2;

    color: white;

    font-size: 34px;

    font-weight: 800;

    width: 260px;

    line-height: 1.2;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 60px;

  gap: 20px;

  background: linear-gradient(180deg, #1e293b, #172033);

  @media (max-width: 900px) {
    padding: 45px 30px;
  }
  label {
    color: #e2e8f0;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: -4px;
  }

  input,
  select {
    width: 100%;
    height: 56px;

    padding: 0 18px;

    border-radius: 14px;

    border: 1px solid #334155;

    background: #0f172a;

    color: #f8fafc;

    font-size: 15px;

    transition: 0.25s;

    &::placeholder {
      color: #64748b;
    }

    &:hover {
      border-color: #475569;
    }

    &:focus {
      outline: none;

      border-color: ${primaryColor};

      transform: translateY(-2px);
    }
  }

  select {
    cursor: pointer;
  }

  button {
    width: 100%;
    height: 58px;

    margin-top: 12px;

    border: none;

    border-radius: 16px;

    background: ${primaryColor};

    color: white;

    font-size: 17px;

    font-weight: 700;

    letter-spacing: 0.5px;

    cursor: pointer;

    transition: 0.25s;

    &:hover {
      transform: translateY(-3px);

      filter: brightness(1.08);
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export const Title = styled.h1`
  color: #f8fafc;

  text-align: center;

  font-size: 42px;

  font-weight: 800;

  margin-bottom: 5px;

  letter-spacing: -1px;

  span {
    color: ${primaryColor};
  }

  @media (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Subtitle = styled.p`
  color: #94a3b8;

  text-align: center;

  font-size: 15px;

  margin-bottom: 18px;

  line-height: 1.6;
`;
