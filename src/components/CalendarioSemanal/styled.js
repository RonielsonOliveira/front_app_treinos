import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

export const DayButton = styled.button`
  width: 45px;
  height: 45px;

  border-radius: 50%;
  border: none;

  font-weight: 600;
  cursor: pointer;

  color: #fff;

  background: ${({ possuiTreino }) => (possuiTreino ? "#166534" : "#991b1b")};

  opacity: ${({ active }) => (active ? 1 : 0.75)};

  transform: ${({ active }) => (active ? "scale(1.1)" : "scale(1)")};

  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;
