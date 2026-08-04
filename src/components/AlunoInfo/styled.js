import styled from 'styled-components'
import { primaryColor } from '../../config/colors'

export const Container = styled.section`
  background: linear-gradient(145deg, #1e293b, #111827);

  border: 1px solid #334155;
  margin: 0 auto;
  border-radius: 18px;

  padding: 20px;
  margin-top: 10px;
  margin-bottom: 25px;

  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.22);
  width: 90%;
  @media (max-width: 600px) {
    padding: 14px;

    border-radius: 14px;

    margin-bottom: 18px;
  }
`

export const Header = styled.div`
  display: flex;

  align-items: center;

  gap: 14px;

  margin-bottom: 18px;

  @media (max-width: 600px) {
    gap: 10px;

    margin-bottom: 14px;
  }
`

export const Avatar = styled.div`
  width: 52px;

  height: 52px;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  background: ${primaryColor};

  color: white;

  font-size: 22px;

  font-weight: 700;

  @media (max-width: 600px) {
    width: 42px;

    height: 42px;

    font-size: 18px;
  }
`

export const Name = styled.h2`
  margin: 0;

  color: #f8fafc;

  font-size: 20px;

  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`

export const Subtitle = styled.p`
  margin: 4px 0 0;

  color: #94a3b8;

  font-size: 14px;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`

export const Grid = styled.div`
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 12px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);

    gap: 8px;
  }
`

export const Card = styled.div`
  background: #0f172a;

  border: 1px solid #334155;

  border-radius: 12px;

  padding: 14px;

  display: flex;

  flex-direction: column;

  gap: 6px;

  span {
    color: #94a3b8;

    font-size: 12px;
  }

  strong {
    color: #f8fafc;

    font-size: 20px;
  }

  @media (max-width: 600px) {
    padding: 10px;

    border-radius: 10px;

    gap: 4px;

    span {
      font-size: 10px;
    }

    strong {
      font-size: 15px;
    }
  }
`
