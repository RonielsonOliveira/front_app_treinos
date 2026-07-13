import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 12px;

  padding: 20px 0;

  flex-wrap: wrap;
`;

export const DayButton = styled.button`
  position: relative;

  width: 78px;
  height: 72px;

  border: none;
  border-radius: 18px;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 700;

  color: ${({ active }) => (active ? "#fff" : "#334155")};

  background: ${({ active, possuiTreino }) =>
    active ? "#2563eb" : possuiTreino ? "#f0fdf4" : "#fef2f2"};

  border: 2px solid
    ${({ active, possuiTreino }) =>
      active ? "#2563eb" : possuiTreino ? "#22c55e" : "#ef4444"};

  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);

  transition: 0.25s ease;

  &:hover {
    transform: translateY(-3px);
  }

  /* Barra de status */
  span {
    position: absolute;

    top: 0;
    left: 50%;

    transform: translateX(-50%);

    width: 35px;
    height: 5px;

    border-radius: 0 0 8px 8px;

    background: ${({ active, possuiTreino }) =>
      active ? "#fff" : possuiTreino ? "#22c55e" : "#ef4444"};
  }

  @media (max-width: 768px) {
    width: 62px;
    height: 62px;

    border-radius: 14px;

    font-size: 12px;
  }
`;
