import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  background: #1e293b;
  color: #f1f5f9;

  padding: 14px 16px;
  border-radius: 10px;
  cursor: pointer;

  transition: all 0.2s ease;

  min-height: 60px;

  &:hover {
    background: ${primaryColor};
  }

  h3 {
    margin: 0;
    font-size: 16px;
  }

  span {
    font-size: 13px;
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    padding: 16px 20px;
    border-radius: 12px;

    h3 {
      font-size: 18px;
    }

    span {
      font-size: 14px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 80%;

  h3 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

export const Arrow = styled.span`
  font-size: 16px;
  transition: transform 0.3s ease;

  transform: rotate(${(props) => (props.isOpen ? "180deg" : "0deg")});

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Content = styled.div`
  margin-top: 8px;
  padding: 12px;

  background: #0f172a;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 16px;
    gap: 12px;
  }
`;
