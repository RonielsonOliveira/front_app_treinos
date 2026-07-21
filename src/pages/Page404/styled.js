import styled, { keyframes } from "styled-components";
import { primaryColor } from "../../config/colors";

const float = keyframes`
  0%{
    transform:translateY(0);
  }

  50%{
    transform:translateY(-8px);
  }

  100%{
    transform:translateY(0);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 700px;

  margin: 70px auto;

  padding: 60px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  background: linear-gradient(145deg, #1e293b, #172033);

  border: 1px solid #334155;

  border-radius: 24px;

  @media (max-width: 768px) {
    margin: 30px auto;
    padding: 40px 25px;
  }
`;

export const Code = styled.h1`
  font-size: clamp(90px, 18vw, 170px);

  font-weight: 900;

  line-height: 1;

  color: ${primaryColor};

  animation: ${float} 3s ease-in-out infinite;
`;

export const Title = styled.h2`
  margin-top: 20px;

  color: #f8fafc;

  font-size: clamp(26px, 4vw, 38px);

  font-weight: 800;
`;

export const Description = styled.p`
  max-width: 520px;

  margin-top: 20px;

  color: #94a3b8;

  font-size: 16px;

  line-height: 1.8;
`;

export const Buttons = styled.div`
  display: flex;

  gap: 18px;

  margin-top: 40px;

  @media (max-width: 768px) {
    width: 100%;

    flex-direction: column;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  min-width: 190px;

  height: 52px;

  padding: 0 22px;

  border-radius: 12px;

  font-size: 15px;

  font-weight: 700;

  cursor: pointer;

  transition: 0.25s;

  svg {
    font-size: 18px;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PrimaryButton = styled(Button)`
  background: ${primaryColor};

  color: #fff;

  border: none;

  &:hover {
    filter: brightness(1.08);
  }
`;

export const SecondaryButton = styled(Button)`
  background: transparent;

  color: #f8fafc;

  border: 1px solid #475569;

  &:hover {
    border-color: ${primaryColor};
    color: ${primaryColor};
  }
`;
