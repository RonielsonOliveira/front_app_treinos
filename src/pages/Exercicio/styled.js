import styled from 'styled-components'
import { primaryColor } from '../../config/colors'

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  border-radius: 4px;
`

export const Title = styled.h1`
  width: 100%;

  text-align: center;

  margin: 25px 0 40px;

  color: #f8fafc;

  font-size: clamp(26px, 4vw, 36px);

  font-weight: 800;

  letter-spacing: -0.5px;

  span {
    color: ${primaryColor};
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 28px;

  padding-bottom: 80px;
`

export const Section = styled.section`
  width: 100%;

  max-width: 760px;

  margin: 0 auto;

  background: linear-gradient(145deg, #1e293b, #172033);

  border: 1px solid #334155;

  border-radius: 4px;

  padding: 28px;

  display: flex;

  flex-direction: column;

  gap: 25px;

  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);

  transition: 0.25s;

  &:hover {
    border-color: #475569;
  }

  @media (max-width: 768px) {
    padding: 20px;

    border-radius: 4px;
  }
`

export const SectionTitle = styled.h2`
  color: #f8fafc;

  font-size: 22px;

  font-weight: 700;

  display: flex;

  align-items: center;

  gap: 10px;

  margin: 0;

  padding-bottom: 15px;

  border-bottom: 1px solid #334155;

  &::before {
    content: '';

    width: 5px;

    height: 24px;

    border-radius: 999px;

    background: ${primaryColor};
  }

  @media (max-width: 768px) {
    font-size: 19px;
  }
`

export const UploadBox = styled.label`
  width: 100%;

  min-height: 170px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  gap: 12px;

  background: #0f172a;

  border: 2px dashed #334155;

  border-radius: 16px;

  cursor: pointer;

  transition: all 0.25s ease;

  span {
    font-size: 42px;

    color: #94a3b8;

    transition: 0.25s;
  }

  p {
    color: #e2e8f0;

    font-weight: 700;

    font-size: 15px;
  }

  small {
    color: #64748b;

    text-align: center;
  }

  &:hover {
    border-color: ${primaryColor};

    background: rgba(34, 197, 94, 0.06);

    span {
      color: ${primaryColor};

      transform: scale(1.1);
    }
  }

  input {
    display: none;
  }

  @media (max-width: 768px) {
    min-height: 150px;

    span {
      font-size: 34px;
    }
  }
`

export const FotosGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));

  gap: 16px;
`

export const SaveBar = styled.div`
  display: flex;

  justify-content: center;

  padding-top: 10px;

  @media (max-width: 768px) {
    position: sticky;

    bottom: 10px;

    background: #020617;

    padding: 15px;

    border-radius: 18px;

    z-index: 20;
  }
`

export const SaveButton = styled.button`
  width: 280px;

  height: 56px;

  border: none;

  border-radius: 16px;

  background: ${primaryColor};

  color: white;

  font-size: 17px;

  font-weight: 800;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-3px);

    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
