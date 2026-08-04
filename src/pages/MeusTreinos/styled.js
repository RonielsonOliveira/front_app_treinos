import styled from 'styled-components'
import { primaryColor, infoColor } from '../../config/colors'

export const Title = styled.h1`
  text-align: center;
  color: #f8fafc;
  font-size: 34px;
  margin: 10px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`
export const EmptyMessage = styled.p`
  text-align: center;
  color: #94a3b8;
  font-size: 16px;
  font-weight: 500;
  margin-top: 24px;
`
export const TreinoTitle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 22px;

  background: #1e293b;

  border: 1px solid #334155;
  border-radius: 14px;

  cursor: pointer;

  transition: 0.25s;

  h3 {
    color: white;
    font-size: 22px;
    margin: 0;
  }

  span {
    color: #cbd5e1;
    font-size: 14px;
    font-style: italic;
  }

  &:hover {
    background: #273449;
    border-color: ${primaryColor};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;

    text-align: center;

    h3 {
      font-size: 20px;
    }
  }
`

export const TreinoCard = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 24px;

  margin-top: 24px;

  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.div`
  background: #1e293b;

  border: 1px solid #334155;

  border-radius: 18px;

  overflow: hidden;

  display: flex;
  flex-direction: column;

  transition: 0.25s;

  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.18);

  &:hover {
    transform: translateY(-4px);

    border-color: ${primaryColor};

    box-shadow: 0 18px 35px rgba(0, 0, 0, 0.3);
  }
`

export const ImageSlider = styled.div`
  width: 100%;
  height: 250px;

  background: #0f172a;

  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 250px;
  }

  img {
    width: 100%;
    height: 250px;

    object-fit: cover;
  }

  .slick-prev {
    left: 10px;
    z-index: 5;
  }

  .slick-next {
    right: 10px;
    z-index: 5;
  }

  .slick-prev:before,
  .slick-next:before {
    color: white;
    font-size: 28px;
  }

  .slick-dots li button:before {
    color: white;
  }

  @media (max-width: 768px) {
    height: 220px;

    .slick-slider,
    .slick-list,
    .slick-track,
    .slick-slide,
    .slick-slide > div {
      height: 220px;
    }

    img {
      height: 220px;
    }
  }
`

export const Details = styled.div`
  padding: 22px;

  display: flex;
  flex-direction: column;

  gap: 14px;

  flex: 1;

  strong {
    color: white;

    font-size: 22px;

    border-bottom: 1px solid #334155;

    padding-bottom: 10px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;

    padding: 10px 14px;

    margin-bottom: 10px;

    background: #0f172a;

    border-radius: 10px;

    color: #e2e8f0;

    font-size: 15px;

    border-left: 4px solid ${primaryColor};

    transition: 0.2s;

    &:hover {
      background: #162133;
      transform: translateX(4px);
    }
  }
`

export const Arrow = styled.span`
  color: ${primaryColor};

  font-size: 24px;

  transition: transform 0.3s ease;

  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`
