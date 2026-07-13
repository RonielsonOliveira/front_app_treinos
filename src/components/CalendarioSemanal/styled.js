import styled, { css } from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin: 25px 0;

  flex-wrap: wrap;
`;

export const DayButton = styled.button`
  width: 58px;
  height: 58px;

  border-radius: 50%;

  border: 2px solid #334155;

  background: #1e293b;

  color: #cbd5e1;

  font-weight: 700;
  font-size: 15px;

  transition: 0.25s;

  ${({ active }) =>
    active &&
    css`
      background: ${primaryColor};
      border-color: ${primaryColor};
      color: white;
    `}

  &:hover {
    border-color: ${primaryColor};
    color: white;
  }
`;
