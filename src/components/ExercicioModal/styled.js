import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(2, 6, 23, 0.82);
  backdrop-filter: blur(6px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  z-index: 999;
`;

export const ModalContent = styled.div`
  width: 100%;
  max-width: 520px;

  background: #1e293b;

  border: 1px solid #334155;

  border-radius: 20px;

  overflow: hidden;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);

  animation: modalShow 0.25s ease;

  @keyframes modalShow {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.97);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 260px;

  background: #0f172a;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  border-bottom: 1px solid #334155;

  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  svg {
    color: #64748b;
    font-size: 120px;
  }

  @media (max-width: 768px) {
    height: 220px;
  }
`;

export const ExercicioInfo = styled.div`
  padding: 24px;

  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const Title = styled.h2`
  margin: 0;

  color: white;

  text-align: center;

  font-size: 28px;

  font-weight: 700;

  line-height: 1.3;
`;

export const Description = styled.p`
  margin: 0;

  text-align: center;

  color: #cbd5e1;

  font-size: 16px;

  line-height: 1.6;

  font-style: italic;
`;

export const ExercicioDados = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 10px;

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #0f172a;

    border: 1px solid #334155;

    border-radius: 12px;

    padding: 16px 18px;

    transition: 0.2s;

    &:hover {
      border-color: ${primaryColor};
    }
  }

  label {
    color: #94a3b8;

    font-size: 15px;

    font-weight: 600;
  }

  span {
    color: #fff;

    font-size: 24px;

    font-weight: 700;
  }
`;
export const Footer = styled.div`
  display: flex;

  justify-content: center;

  padding: 24px;

  border-top: 1px solid #334155;

  background: #172235;

  button {
    width: 220px;
    height: 48px;

    border-radius: 10px;

    font-size: 16px;
    font-weight: 600;

    transition: 0.2s;

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: scale(0.97);
    }
  }

  @media (max-width: 768px) {
    button {
      width: 100%;
    }
  }
`;
