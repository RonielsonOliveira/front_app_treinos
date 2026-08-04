import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { primaryColor } from '../../config/colors'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 35px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const Title = styled.h1`
  color: #fff;
  font-size: 36px;
  font-weight: 700;

  span {
    color: ${primaryColor};
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const NovoAluno = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 52px;

  border-radius: 14px;

  background: ${primaryColor};

  color: white;
  text-decoration: none;

  font-weight: bold;

  transition: 0.25s;

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.08);
  }
`

export const CardsContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));

  gap: 26px;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  background: linear-gradient(145deg, #1f2937, #111827);

  border: 1px solid #293548;

  border-radius: 20px;

  overflow: hidden;

  transition: 0.25s;
  @media (max-width: 768px) {
    width: 95%;
    height: 95%;
    margin: 0 auto;
  }

  &:hover {
    transform: translateY(-6px);

    border-color: ${primaryColor};

    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  padding: 24px;
`

export const IconWrapper = styled.div`
  width: 74px;
  height: 74px;

  border-radius: 50%;

  margin: 0 auto 22px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(255, 255, 255, 0.05);

  color: ${primaryColor};

  font-size: 36px;
`

export const Nome = styled.h3`
  color: white;

  text-align: center;

  font-size: 24px;

  margin-bottom: 12px;
`

export const Descricao = styled.p`
  color: #94a3b8;

  text-align: center;

  line-height: 1.6;

  margin-bottom: 22px;

  display: -webkit-box;

  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;

  overflow: hidden;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background: #334155;

  margin: 18px 0;
`

export const SectionTitle = styled.h4`
  color: ${primaryColor};

  font-size: 14px;

  letter-spacing: 1px;

  text-transform: uppercase;

  margin-bottom: 14px;
`

export const Exercicios = styled.div`
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 25px;
`

export const Exercicio = styled.span`
  background: #0f172a;

  color: #e2e8f0;

  border: 1px solid #334155;

  border-radius: 999px;

  padding: 8px 12px;

  font-size: 13px;

  transition: 0.2s;

  &:hover {
    border-color: ${primaryColor};
  }
`

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 18px;

  margin-top: auto;
  padding-top: 20px;

  a {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 44px;
    height: 44px;

    border-radius: 12px;

    background: #0f172a;
    color: #cbd5e1;

    text-decoration: none;

    transition: all 0.2s ease;

    &:hover {
      color: #fff;
      background: ${primaryColor};
      transform: translateY(-2px);
    }

    span {
      position: absolute;
      bottom: calc(100% + 10px);
      left: 50%;

      transform: translateX(-50%) translateY(6px);

      background: #0f172a;
      color: #fff;

      padding: 6px 10px;

      border-radius: 8px;

      font-size: 12px;
      font-weight: 600;

      white-space: nowrap;

      opacity: 0;
      visibility: hidden;

      transition: all 0.2s ease;

      pointer-events: none;
    }

    &:hover span {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    }
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    gap: 5px;
    padding: 15px;

    a {
      flex-direction: column;

      width: auto;
      height: auto;

      padding: 8px 12px;

      background: transparent;

      &:hover {
        background: transparent;
        color: ${primaryColor};
        transform: none;
      }

      span {
        position: static;

        opacity: 1;
        visibility: visible;

        transform: none;

        margin-top: 6px;
        padding: 0;

        background: transparent;

        color: #cbd5e1;

        font-size: 12px;
      }

      &:hover span {
        transform: none;
        color: ${primaryColor};
      }
    }
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;

  padding: 0 18px;

  margin-bottom: 28px;

  border-radius: 12px;
  border: 1px solid #334155;

  background: #1e293b;
  color: #fff;

  font-size: 15px;

  transition: 0.2s;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: ${primaryColor};
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
  }
`

export const EmptyMessage = styled.p`
  margin-top: 40px;

  text-align: center;

  color: #94a3b8;

  font-size: 16px;
`

export const ActionButton = styled(Link)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 42px;
  height: 42px;

  border-radius: 10px;

  background: #0f172a;
  color: #cbd5e1;

  transition: 0.2s;

  &:hover {
    color: #fff;
    background: ${primaryColor};
    transform: translateY(-2px);
  }

  /* Tooltip */
  &::after {
    content: attr(data-label);

    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;

    transform: translateX(-50%) translateY(8px);

    background: #0f172a;
    color: #fff;

    padding: 6px 10px;

    border-radius: 8px;

    font-size: 12px;
    font-weight: 600;

    white-space: nowrap;

    opacity: 0;
    pointer-events: none;

    transition: 0.2s;
  }

  &::before {
    content: '';

    position: absolute;

    bottom: calc(100% + 4px);
    left: 50%;

    transform: translateX(-50%) translateY(8px);

    border: 6px solid transparent;
    border-top-color: #0f172a;

    opacity: 0;

    transition: 0.2s;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`
