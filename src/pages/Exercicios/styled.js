import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor } from "../../config/colors";

export const Header = styled.div`
  width: 100%;
  max-width: 1400px;

  margin: 25px 0 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  color: #f8fafc;
  font-size: 34px;
  font-weight: 700;
  margin: 25px 0 40px;
  flex: 1;
  text-align: center;

  margin: 0;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const NovoAluno = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 180px;
  height: 48px;

  border-radius: 10px;

  background: ${primaryColor};
  color: white;

  text-decoration: none;
  font-weight: 600;

  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  max-width: 1400px;

  margin: auto;

  display: grid;
  gap: 24px;

  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%;
  }
`;

export const Card = styled.div`
  background: #1e293b;

  border-radius: 18px;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  transition: 0.25s;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #253449;

    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.35);
  }
`;

export const CardFotos = styled.div`
  width: 100%;
  height: 240px;

  overflow: hidden;

  background: #0f172a;

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
    display: block;
  }

  @media (max-width: 768px) {
    height: 220px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  padding: 22px;

  flex: 1;

  h3 {
    color: white;
    margin: 0;

    font-size: 24px;
    font-weight: 700;
  }

  p {
    margin: 0;

    color: #cbd5e1;

    font-size: 15px;

    line-height: 1.5;
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: center;

  gap: 16px;

  padding: 18px 22px 22px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  a {
    width: 42px;
    height: 42px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;

    color: white;

    background: #334155;

    transition: 0.25s;

    &:hover {
      background: ${primaryColor};
      transform: translateY(-2px);
    }
  }
`;
