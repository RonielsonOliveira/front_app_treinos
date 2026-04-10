import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryColor, infoColor } from "../../config/colors";

export const Title = styled.h1`
  display: flex;
  align-items: center;
  padding: 2px;
  justify-content: center;
  color: #fff;
  margin: 0 auto;
  font-size: 40px;
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
`;
export const TreinoTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: aliceblue;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  h3 {
    padding: 4px;
    font-size: 24px;
  }
  span {
    padding: 4px;
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
  }
  &:hover {
    background: ${infoColor};
  }
`;

export const TreinoCard = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  width: 100%;
  padding: 12px;
`;
export const Card = styled.div`
  width: 100%;
  min-height: 420px;
  padding: 16px;
  border-radius: 10px;
  background: ${primaryColor};
  color: white;

  display: flex;
  flex-direction: column;
  gap: 12px;

  transition: transform 0.2s ease;

  &:hover {
    background: ${infoColor};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 12px;
  border-radius: 8px;

  strong {
    font-size: 20px;
    margin-bottom: 10px;
  }

  li {
    list-style: none;
    margin-bottom: 6px;
    font-size: 15px;
  }
`;
export const ImageSlider = styled.div`
  width: 80%;
  height: 260px;
  margin: 0 auto;
  border-radius: 8px;

  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-prev:before,
  .slick-next:before {
    color: white;
    font-size: 24px;
  }

  .slick-dots li button:before {
    color: white;
  }

  img {
    width: 100%;
    height: 260px;
    object-fit: fill;
    border-radius: 8px;
  }
`;
export const Arrow = styled.span`
  font-size: 20px;
  transition: transform 0.3s ease;

  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;
