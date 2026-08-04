import styled from 'styled-components'
import { primaryColor, primaryDarkColor } from '../../config/colors.js'

export const ExercicioCheck = styled.label`
  display: block;
  width: 100%;

  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;

  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.98);
  }
`

export const Exercicio = styled.div`
  background-color: #1e293b;
  color: #f1f5f9;

  display: flex;
  flex-direction: column;
  height: 100%;
`
export const ExercicioSeriesERepeticoes = styled.div``

export const ImageWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 180px;

  background: #0f172a;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const ExercicioInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
`

export const ExercicioInfoTitle = styled.h3`
  font-size: 16px;
  margin: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ExercicioInfoDetails = styled.p`
  font-size: 13px;
  opacity: 0.8;
  margin: 0;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`

export const CheckboxWrapper = styled.div`
  .checkbox {
    accent-color: ${primaryDarkColor};
  }

  input {
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
`
export const VideoButton = styled.button`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  width: 58px;
  height: 58px;

  border: none;
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.55);
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);

    background: ${primaryColor};
  }

  svg {
    font-size: 24px;
  }
`
