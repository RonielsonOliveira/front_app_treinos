import styled from 'styled-components'
import { primaryColor } from '../../config/colors'

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  background: rgba(2, 6, 23, 0.82);
  backdrop-filter: blur(8px);

  z-index: 999;
`

export const ModalContent = styled.div`
  width: 100%;
  max-width: 620px;

  background: #1e293b;

  border: 1px solid #334155;
  border-radius: 22px;

  overflow: hidden;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);

  animation: modalShow 0.28s cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes modalShow {
    from {
      opacity: 0;
      transform: translateY(40px) scale(0.96);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`

export const Tabs = styled.div`
  display: flex;

  background: #172235;

  border-bottom: 1px solid #334155;
`

export const Tab = styled.button`
  flex: 1;

  height: 56px;

  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  cursor: pointer;

  font-size: 15px;
  font-weight: 600;

  background: ${({ $active }) =>
    $active ? 'rgba(255,255,255,.04)' : 'transparent'};

  color: ${({ $active }) => ($active ? '#fff' : '#94a3b8')};

  border-bottom: 3px solid
    ${({ $active }) => ($active ? primaryColor : 'transparent')};

  transition: 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    color: white;
  }

  svg {
    font-size: 18px;
  }
`

export const MediaWrapper = styled.div`
  width: 100%;
  height: 320px;

  background: #0f172a;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  img,
  iframe,
  video {
    width: 100%;
    height: 100%;
  }

  img {
    object-fit: cover;
  }

  iframe,
  video {
    border: none;
  }

  svg {
    color: #64748b;
    font-size: 120px;
  }

  @media (max-width: 768px) {
    height: 220px;
  }
`

export const ExercicioInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 22px;

  padding: 24px;
`

export const Title = styled.h2`
  margin: 0;

  color: white;

  text-align: center;

  font-size: 28px;
  font-weight: 700;
`

export const Description = styled.p`
  margin: 0;

  color: #cbd5e1;

  text-align: center;

  line-height: 1.6;
`

export const ExercicioDados = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 14px;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 95px;

    background: #0f172a;

    border: 1px solid #334155;
    border-radius: 14px;

    transition: 0.2s;
  }

  .item:hover {
    border-color: ${primaryColor};
  }

  label {
    margin-bottom: 8px;

    color: #94a3b8;

    font-size: 14px;
    font-weight: 600;
  }

  span {
    color: white;

    font-size: 32px;
    font-weight: bold;
  }
`

export const Footer = styled.div`
  padding: 24px;

  border-top: 1px solid #334155;

  background: #172235;

  button {
    width: 100%;
    height: 50px;

    border: none;

    border-radius: 12px;

    background: ${primaryColor};

    color: white;

    font-size: 16px;
    font-weight: bold;

    cursor: pointer;

    transition: 0.2s;
  }

  button:hover {
    transform: translateY(-2px);
  }

  button:active {
    transform: scale(0.98);
  }
`
export const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-top: 20px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 12px;
  }
`
