import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.section`
  width: min(1200px, 100%);
  margin: 40px auto;
  padding: 20px;

  @media (max-width: 1000px) {
    margin: 20px auto;
    padding: 12px;
  }
`;

export const Header = styled.div`
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 1000px) {
    margin-bottom: 24px;
  }
`;

export const Title = styled.h1`
  color: #fff;

  span {
    color: ${primaryColor};
  }

  @media (max-width: 1000px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.p`
  margin-top: 15px;
  color: #94a3b8;
  font-size: 17px;

  @media (max-width: 1000px) {
    margin-top: 8px;
    font-size: 15px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;
