import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #1f2937;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const Name = styled.h2`
  margin-bottom: 15px;
`;

export const Info = styled.p`
  margin: 5px 0;
`;
