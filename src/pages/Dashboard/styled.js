import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Container = styled.section`
  width: min(1200px, 100%);
  margin: 40px auto;
  padding: 20px;
`;

export const Header = styled.div`
  margin-bottom: 50px;

  text-align: center;
`;

export const Title = styled.h1`
  color: #fff;
  span {
    color: ${primaryColor};
  }
`;

export const SubTitle = styled.p`
  margin-top: 15px;

  color: #94a3b8;

  font-size: 17px;
`;

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 28px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
