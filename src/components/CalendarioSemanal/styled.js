import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 14px 0;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin: auto;
    width: 95%;
    gap: 6px;
  }
`

export const DayButton = styled.button`
  position: relative;

  width: 76px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 16px;
  border: 2px solid
    ${({ active, possuiTreino }) =>
      active ? '#2563eb' : possuiTreino ? '#22c55e' : '#ef4444'};

  background: ${({ active, possuiTreino }) =>
    active
      ? '#2563eb'
      : possuiTreino
        ? 'rgba(34,197,94,.08)'
        : 'rgba(239,68,68,.08)'};

  color: ${({ active }) => (active ? '#fff' : '#f8fafc')};

  font-size: 15px;
  font-weight: 700;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    border-color: ${({ active, possuiTreino }) =>
      active ? '#3b82f6' : possuiTreino ? '#16a34a' : '#dc2626'};

    background: ${({ active, possuiTreino }) =>
      active
        ? '#3b82f6'
        : possuiTreino
          ? 'rgba(34,197,94,.15)'
          : 'rgba(239,68,68,.15)'};
  }

  &:active {
    transform: scale(0.96);
  }

  span {
    position: absolute;

    top: 8px;
    left: 50%;

    transform: translateX(-50%);

    width: 28px;
    height: 4px;

    border-radius: 999px;

    background: ${({ active, possuiTreino }) =>
      active ? '#fff' : possuiTreino ? '#22c55e' : '#ef4444'};
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;

    border-radius: 14px;

    font-size: 13px;

    span {
      width: 18px;
      height: 3px;
      top: 6px;
    }
  }
`
