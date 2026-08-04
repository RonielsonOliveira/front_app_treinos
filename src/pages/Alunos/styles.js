import styled from 'styled-components'
import { primaryColor } from '../../config/colors.js'

export const Container = styled.div`
  padding: 30px;
  width: 50%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 90%;
    padding: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`

export const Title = styled.h1`
  margin-bottom: 30px;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 26px;
    margin-bottom: 20px;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 24px;

  background: #1f2937;
  color: #fff;

  border-radius: 4px;

  transition: 0.2s;

  &:hover {
    background: #293548;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;

    gap: 20px;

    padding: 20px;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;

  gap: 6px;

  min-width: 0;
`

export const Right = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Name = styled.h2`
  margin: 0;

  font-size: 20px;

  cursor: pointer;

  word-break: break-word;

  &:hover {
    color: ${primaryColor};
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const Info = styled.p`
  margin: 0;

  color: #c7c7c7;

  font-size: 14px;

  word-break: break-word;
`

export const Buttons = styled.div`
  display: flex;

  gap: 10px;

  align-items: center;

  @media (max-width: 768px) {
    width: 100%;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 8px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    gap: 10px;
  }
`

export const Button = styled.button`
  padding: 8px 14px;

  min-width: 90px;

  border-radius: 8px;

  color: white;

  font-size: 14px;

  font-weight: 600;

  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const TreinosButton = styled(Button)`
  background: #8b5cf6;
`

export const EditButton = styled(Button)`
  background: #2563eb;
`

export const DeleteButton = styled(Button)`
  background: #dc2626;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }
`

export const NewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 170px;
  height: 48px;

  padding: 0 20px;

  border: none;
  border-radius: 12px;

  background: ${primaryColor};
  color: #fff;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
