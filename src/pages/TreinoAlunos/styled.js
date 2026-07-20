import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }
`;

export const Title = styled.h1`
  color: #f8fafc;

  font-size: clamp(28px, 4vw, 36px);

  font-weight: 800;

  letter-spacing: -0.5px;

  margin: 0;

  span {
    color: ${primaryColor};
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const EmptyMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 220px;

  background: linear-gradient(145deg, #1e293b, #172033);

  border: 1px solid #334155;

  border-radius: 22px;

  color: #94a3b8;

  font-size: 16px;

  font-weight: 600;

  text-align: center;

  padding: 30px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
export const NewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 190px;

  height: 52px;

  padding: 0 24px;

  border: none;

  border-radius: 14px;

  background: green;

  color: white;

  font-size: 15px;

  font-weight: 700;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 500px) {
    margin: 0 auto;
    width: 60%;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 150px;

  height: 48px;

  padding: 0 20px;

  border: none;

  border-radius: 12px;

  background: #dc2626;

  color: white;

  font-size: 14px;

  font-weight: 700;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    background: #b91c1c;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 120px;
  height: 44px;
  padding: 0 18px;

  border: none;
  border-radius: 12px;

  background: #2563eb;
  color: #fff;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    min-width: 82px;
    width: 82px;
    height: 34px;
    padding: 0;
    font-size: 12px;
    border-radius: 8px;
  }
`;

export const DeleteButton = styled(EditButton)`
  background: #dc2626;

  &:hover {
    background: #b91c1c;
  }
`;
