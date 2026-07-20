import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 18px;

  padding: 40px 30px;

  background: linear-gradient(145deg, #1e293b, #172033);

  border: 2px solid ${({ color }) => color};

  border-radius: 22px;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    transform: translateY(-6px);

    background: linear-gradient(145deg, #26364f, #1b2940);

    .icon {
      transform: scale(1.12);
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 58px;

  color: #fff;

  transition: 0.25s;

  &.icon {
    transition: 0.25s;
  }
`;

export const Title = styled.h2`
  color: #fff;

  font-size: 24px;

  font-weight: 700;

  text-align: center;
`;

export const Description = styled.p`
  color: #94a3b8;

  text-align: center;

  line-height: 1.6;

  font-size: 15px;
`;

export const Action = styled.div`
  margin-top: 10px;

  color: #fff;

  font-weight: 700;

  font-size: 15px;
`;
