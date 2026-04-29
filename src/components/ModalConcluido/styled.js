import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;

  /* animação suave */
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background: #1e293b;
  color: #fff;

  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  text-align: center;

  /* animação de entrada */
  animation: scaleIn 0.2s ease;

  @keyframes scaleIn {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  h2 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin: 0;
    opacity: 0.85;
    font-size: 14px;
  }

  button {
    margin-top: 10px;
    padding: 10px 14px;

    border: none;
    border-radius: 8px;

    background: #22c55e;
    color: white;

    cursor: pointer;
    transition: 0.2s;

    &:hover {
      filter: brightness(1.1);
    }

    &:active {
      transform: scale(0.97);
    }
  }
`;
