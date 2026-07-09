import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  color: white;
  text-align: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 24px;

  background: #1f2937;
  color: #fff;

  border-radius: 12px;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
    background: #293548;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.h2`
  margin: 0;
  font-size: 20px;
`;

export const Info = styled.p`
  margin: 0;
  color: #c7c7c7;
  font-size: 14px;
`;

export const Arrow = styled.span`
  font-size: 24px;
  color: #8b5cf6;
`;
