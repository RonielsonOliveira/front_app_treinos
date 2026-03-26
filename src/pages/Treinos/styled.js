import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor } from "../../config/colors";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  margin-left: 20px;
`;

export const NovoAluno = styled(Link)`
  display: block;
  color: #fff;
  background-color: ${primaryColor};
  width: 140px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 8px;
  text-decoration: none;
`;

export const Card = styled.div`
  background: green;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  margin-bottom: 1.5rem;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  }
`;

export const CardFotos = styled.div`
  width: 100%;
  height: 180px;
  overflow: visible;

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
`;

export const CardInfo = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px;
  background-color: gray;

  h3 {
    font-size: 24px;
    margin: 30px 10px 10px 10px; //top right  bottom left
  }
  p {
    font-size: 18px;
    margin: 0px 10px 10px 10px; //top right  bottom left
  }
`;

export const CardActions = styled.div`
  display: flex;
  align-items: end;
  margin: 15px auto; //top right  bottom left: ;
  gap: 2rem;
  color: red;
  padding: 18px;

  a {
    color: black;
    &:hover {
      color: aliceblue;
      transform: scale(1.5);
    }
  }
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;

  /* limita a 4 colunas no máximo */
  max-width: 1400px;
  margin: 0 auto;
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
