import styled from "styled-components";
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
`;

export const ModalContent = styled.div`
  background: #1e293b;
  color: #f1f5f9;

  padding: 20px;
  border-radius: 12px;
  width: 90%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  background: #0f172a;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    opacity: 0.5;
  }
`;
export const ExercicioInfo = styled.div`
  display: grid;
`;
export const Title = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 300;
`;
export const Description = styled.div`
  text-align: center;
  font-size: 18px;
  font-style: italic;
`;
export const ExercicioDados = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  font-size: 18px;

  label {
    padding: 10px;
  }
`;
