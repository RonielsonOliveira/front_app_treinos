import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.div`
  width: 90%;

  margin: 0 auto 22px;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto 18px;
  }
`;
export const Header = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 24px;

  cursor: pointer;

  background: linear-gradient(145deg, #1f2937, #111827);

  border: 1px solid #334155;

  border-radius: ${({ isOpen }) => (isOpen ? "18px 18px 0 0" : "18px")};

  transition: all 0.25s ease;

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);

  &:hover {
    transform: translateY(-2px);

    border-color: ${primaryColor};

    background: linear-gradient(145deg, #263449, #182334);
  }

  &:active {
    transform: scale(0.99);
  }

  @media (max-width: 768px) {
    padding: 18px;

    border-radius: ${({ isOpen }) => (isOpen ? "16px 16px 0 0" : "16px")};
  }
`;

export const Info = styled.div`
  display: flex;

  flex-direction: column;

  gap: 6px;

  flex: 1;

  min-width: 0;

  h3 {
    margin: 0;

    color: #fff;

    font-size: 20px;

    font-weight: 700;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;
  }

  span {
    color: #94a3b8;

    font-size: 14px;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 17px;
    }

    span {
      font-size: 12px;
    }
  }
`;

export const Arrow = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  width: 40px;

  height: 40px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  margin-left: 16px;

  border-radius: 50%;

  font-size: 16px;

  font-weight: bold;

  color: ${({ isOpen }) => (isOpen ? "#fff" : primaryColor)};

  background: ${({ isOpen }) => (isOpen ? primaryColor : "#0f172a")};

  transform: rotate(${({ isOpen }) => (isOpen ? "180deg" : "0deg")});

  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 34px;

    height: 34px;

    font-size: 14px;
  }
`;

export const Content = styled.div`
  background: linear-gradient(145deg, #111827, #0f172a);

  border-left: 1px solid #334155;

  border-right: 1px solid #334155;

  border-bottom: 1px solid #334155;

  border-radius: 0 0 18px 18px;

  padding: 22px;

  display: flex;

  flex-direction: column;

  gap: 18px;

  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.22);

  animation: fade 0.25s ease;

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(-8px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 16px;

    border-radius: 0 0 16px 16px;

    gap: 14px;
  }
`;

export const ExerciciosWrapper = styled.div`
  display: flex;

  flex-direction: column;

  gap: 14px;
`;
